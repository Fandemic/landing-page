#!/usr/bin/python
import math
import random
import time
from email.utils import parseaddr
from flask import Flask, render_template, request, jsonify, redirect, make_response, session
from pymongo import MongoClient, GEO2D
from collections import Counter
from jinja2 import Template
import json
import bson
from flask_mobility import Mobility
from flask_mobility.decorators import mobile_template
import stripe
import os
from werkzeug.utils import secure_filename
import braintree
from flask_compress import Compress

from objects.mailer import Mailer
from objects.shipping import Shipping
from objects.slack import Slack
from objects.trello import Trello
from objects.star import Star
from objects.partner import Partner
from objects.cdn import CDN

from password import hash_password, verify_password
from config import Config

c = Config()
db = c.dbConfig()
MODE = c.configMode()

#get the stars products
if MODE == 'test':
    db = MongoClient('45.79.159.210', 27018).fandemic_test
    braintree.Configuration.configure(braintree.Environment.Sandbox,
                                      merchant_id="2hf4g4nnyr988sbq",
                                      public_key="k7kxgfrgmwq95qrr",
                                      private_key="c33bb5198238ee8c544f5e2ff894a63b")
elif MODE == 'live':
    #BRAINTREE LIVE MODE
    db = MongoClient('45.79.159.210', 27018).fandemic
    braintree.Configuration.configure(braintree.Environment.Production,
                                      merchant_id="xhfrd2njsj3hpjqg",
                                      public_key="24hn86zpmj3kg6zd",
                                      private_key="bf70efac06af024e582747b76b9a621a")

email = Mailer()

app = Flask(__name__)

Mobility(app)
Compress(app)


#================INDEX=====================
@app.route('/', methods=['GET', 'POST'])
def home():
    storeCount = db.stars.count()

    storeCountPending = db.stars.count({"campaigns.0.status":"live"})
    stars = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(10)

    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)

    categories = db.stars.distinct("category")

    return render_template('index.html', categories = categories, stars=stars, star_names = star_names, storeCount = storeCount)
#-------------------------------------------

def toList(s):
    return [str(x) for x in s.split(',') if x]

def toString(l):
    l = list(set(l))
    return ",".join(l)


@app.route('/builder')
@app.route('/builder/<cat>')
@app.route('/builder/<cat>/<cat2>')
@app.route('/builder/<cat>/<cat2>/<cat3>')
def catalog(cat=None,cat2=None,cat3=None):

    #Get the current stars store info
    storeCountPending = db.stars.count({"$or":[ {"campaigns.0.status":"pending"}, {"campaigns.0.status":"live"}]})
    stars = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(6)

    #get the box styles and packaging material
    styles = db.design.find({"category":"box"})
    packaging = db.packaging.find({"category":"packaging"})

    box_items = []

    if request.cookies.get('box') is not None:
        box = toList(request.cookies.get('box'))
        box_items = db.items.find({"sku":{ "$in": box }})

    if cat is None:

        #items = db.items.find() #find the
        return redirect("/builder/beauty", code=302)

    else:

        if cat2 is None:
            items = db.staging_items.find({"category":cat},{'_id': False}) #find the star

        else:

            if cat3 is None:
                items = db.staging_items.find({"category":cat,"sub-category":cat2},{'_id': False}) #find the star

            else:
                items = db.staging_items.find({"category":cat,"sub-category":cat2,"sub-sub-category":cat3},{'_id': False}) #find the star

    items = list(items);
    for item in items:
        item['price'] = int(math.ceil(math.ceil( float(item['retail_price'])) ))

    brands = list(db.profiles.find({"system":"partners","bio": { "$exists": True }}))

    return render_template('builder.html', items=list(items), items_string=json.dumps(items), brands=brands, box_items=list(box_items),styles=styles,packaging=list(packaging),cat=cat,cat2=cat2,cat3=cat3,stars=stars)


#Product search for the builder
@app.route("/product-search", methods=['GET', 'POST'])
def productSearch():

    filters = request.get_json()

    items = []

    if filters['category'] == 'All Products' and filters['brand']['id'] == 'All Brands':
        items = list(db.staging_items.find({"category":"beauty"},{'_id': False}))

    elif filters['category'] == 'All Products':
        items = list(db.staging_items.find({"category":"beauty","company_id":filters['brand']['id']},{'_id': False}))

    elif filters['brand']['id'] == 'All Brands':
        items = list(db.staging_items.find({"category":"beauty","sub-category":filters['category']},{'_id': False}))

    else:
        items = list(db.staging_items.find({"category":"beauty","sub-category":filters['category'],"company_id":filters['brand']['id']},{'_id': False}))



    return json.dumps(items)


@app.route("/shipping-rates", methods=['GET', 'POST'])
def getShippingRates():

    customer = request.get_json()
    print customer

    shipment = Shipping()

    return json.dumps(shipment.get_rates(customer))

#-------------------------------------------

@app.route('/terms')
def terms():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('terms.html', star_names=star_names)
#-------------------------------------------

@app.route('/blog')
def blogHome():
    posts = db.blog.find({})
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('blog.html', star_names=star_names, posts = posts)
#-------------------------------------------

#------------BLOG POST and EMAIL POST SUBMISSION & DELETION-------------------------------

@app.route('/poster-login', methods=['POST'])
def do_admin_login():
    username = str(request.form['username'])
    credential = db.credentials.find_one({'username':username})

    if credential != None:
        if credential['system'] == 'blog' and request.form['password'] == credential['password'] and request.form['username'] == credential['username']:
            session['logged_in_blog'] = True
            session['username'] = credential['username']
            return blogPoster()
        elif credential['system'] == 'email' and request.form['password'] == credential['password'] and request.form['username'] == credential['username']:
            session['logged_in_email'] = True
            session['username'] = credential['username']
            return emailPoster()
        else:
            return 'Wrong Username or Password'
    else:
        return 'Wrong Username or Password!'

@app.route("/logout-sessions")
def logout():
    session['logged_in_blog'] = False
    session['logged_in_email'] = False
    return 'done!'

@app.route('/blog-poster')
def blogPoster():
    credential = db.credentials.find_one({'username':session['username']})
    if not session.get('logged_in_blog'):
        return render_template('poster-login.html')
    else:
        return render_template('blog-poster.html', credential=credential)

@app.route('/blog-post-submit-form', methods=['GET', 'POST'])
def blogPosterSubmission():
    blogPost = {}
    blogPost['content'] = request.form['content']
    blogPost['author'] = request.form['author']
    blogPost['url'] = request.form['url']
    blogPost['title'] = request.form['title']
    blogPost['summary'] = request.form['summary']
    blogPost['date'] = time.strftime("%B %d, %Y")

    db.testblog.insert_one(blogPost)
    return ''

#-------------------END Email POST SUBMISSION------------------------

@app.route('/blog/<url>')
def blogPost(url):
    print url

    content = ''
    post = db.blog.find({'url':url})
    if post == None: return render_template("404.html")
    #print post.explain()
    for posts in post:
        content = posts['content']
        author = posts['author']
        date = posts['date']
        title = posts['title']
    #content = post.content
    #print post['content']
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)

    return render_template('blog-posts.html',star_names=star_names, content = content, title = title, author = author, date = date)
#-------------------------------------------

@app.route('/faq')
def faq():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('faq.html', star_names=star_names)
#-------------------------------------------

@app.route('/about')
def about():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('about.html', star_names=star_names)
#-------------------------------------------

@app.route('/partners')
def partners():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('partners.html', star_names=star_names)
#-------------------------------------------

@app.route('/benefits')
def benefits():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('benefits.html', star_names=star_names)

#-------------------------------------------

@app.route('/privacy')
def privacy():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('privacy.html', star_names=star_names)



#=================MOCK STORES=====================
@app.route('/<starID>')
def store(starID):

    star = db.stars.find_one({'id':starID.lower()}) #find the star
    #print star

    if star == None: return render_template("404.html")

    currentTime = int(time.time())

    #get blog posts
    blogs = db.blogs.find({'star_id':starID.lower()})

    #pull default descriptions for products
    c = 0
    for product in star['campaigns'][0]['products']:

        #match the product info to the users products
        product_info = db.staging_items.find_one({'name':product['name']})
        star['campaigns'][0]['products'][c]['description'] = product_info['description'].replace("'","\\'") #find the star
        star['campaigns'][0]['products'][c]['company_id'] = product_info['company_id']

        #match the company info to the users products
        company = db.staging_items.find_one({'name':product['name']})
        star['campaigns'][0]['products'][c]['company'] = company

        c += 1


    return render_template('shop.html', star = star, blogs = list(blogs),
                                     braintree=braintree.ClientToken.generate())


#================PROCESS AN ORDER====================#
@app.route('/charge', methods=['GET', 'POST'])
def charge():

    #get the ajaxed info
    if request.method == "POST":

        #setup the classes
        email = Mailer()
        sarah = Slack()
        star = Star(c)
        partner = Partner(c)
        shipping = Shipping()

        #get the post data
        data = request.get_json()

        shipping_rate = float(data['shipping_method']['rate'])

        #process the transaction
        result = braintree.Transaction.sale({
            "amount": str(data['total_price']+shipping_rate),
            "payment_method_nonce": data['nonce'],
            "order_id": data['order_id'],
            "options": {
              "submit_for_settlement": True
            }

        });


        #The transaction was a success, process the data
        if result.is_success:

            #process order
            partner.process_order(data,result)


            #submit transaction to orders collection
            #db.orders.insert_one(data);

            #send the email confirmation to customer
            #email.sendOrderConfirmation(customer,data)

            #send order alert to the team
            #sarah.sendOrderConfirmation(customer,data)

            return 'OK';


#================PROCESS A STOCKING FEE====================#
@app.route('/sample-charge', methods=['GET', 'POST'])
def sampleCharge():

    #get the ajaxed info
    if request.method == "POST":

        info = request.get_json()

        slack = Slack()

        if MODE == 'test':
            SECRET_KEY = 'sk_test_BSCdbwIufwN4xI0AKXBk3XNB'
            PUBLISHABLE_KEY = 'pk_test_z1mq9KQ3GyakW5OdduPIX94u'
        if MODE == 'live':
            SECRET_KEY = 'sk_live_tcrVqjaEdr9Jue13huqL7lk2'
            PUBLISHABLE_KEY = 'pk_live_kyvM71oajfwVWnxBoy7SfqOp'

        #initialize the stripe data
        stripe_keys = {
            'secret_key': SECRET_KEY,
            'publishable_key': PUBLISHABLE_KEY
        }

        stripe.api_key = stripe_keys['secret_key']


        customer = stripe.Customer.create(
            email=info['email'],
            card=info['id']
        )

        charge = stripe.Charge.create(
            customer=customer.id,
            amount=info['amount'],
            currency='usd',
            description= 'Someone ordered a sample for review',
            metadata={},
            receipt_email=info['email']
        )

        #send the confirmation email to client
        toaddr = [info['email']]
        subject = "Sample Order Confirmation"
        html =  """
                Hey """+ info['star']['name'] +""",<br><br>
                I saw see you ordered some products for review!<br><br>
                I am reaching out just to tell you that your products will be shipped within 24 hours
                and should be at your doorstep in 5 business days or less.<br><br>
                You have received these products at an extremely discounted rate and are expected to review them
                prior to selling them on your <a href='https://fandemic.co/"""+info['star']['id']+"""'>Official """ + info['star']['id'] + """ Fandemic Store</a>
                If you have any questions or concerns please don't hesitate to reach out to me!<br><br>
                - Sarah :)
                """
        email.send(toaddr,subject,html)

        string = '*Sample Order Placed*\n'
        for k, v in info.iteritems():
            string += '*'+k+'*: ' + str(v) + '\n'

        slack.slack_orders.notify(text=string)

    return '';


#================Launch a Store====================#
@app.route('/launch-store-request', methods=['GET', 'POST'])
def launchStoreRequest():

    #get the ajaxed info
    if request.method == "POST":

        #create objects
        star = Star(c)
        slack = Slack()
        email = Mailer()

        #grab the info from ajax request
        info = request.get_json()

        #create the star ID using the instagram
        info['star']['id'] = star.getID(info['star']['instagram'])

        #hash the password
        info['star']['password'] = hash_password(info['star']['password'], salt)

        star.createProfile(info) #create a star profile
        star.createStore(info) #create a new store for the star

        #send alert to Fandemic team via slack
        slack.sendStoreCreatedAlert(info)

        #send confirmation to star via email
        email.sendStoreConfirmation(info)

    return '';

#=============PARTNERS FORM=============

@app.route('/partner-submit-form', methods=['GET', 'POST'])
def partnersForm():
    companyname =  request.form['companyname']
    companywebsite = request.form['companywebsite']
    companyemail = request.form['email']
    username = request.form['username']
    password = request.form['password']

    hashed = hash_password(password, salt)

    #build dictionary
    userProfile = {}
    userProfile['username'] = username
    userProfile['hashed_pw'] = hashed
    userProfile['system'] = 'partners'

    userProfile['bio'] = {}
    userProfile['bio']['company_id'] = companyname.replace(" ","-").lower()
    userProfile['bio']['company_name'] = companyname
    userProfile['bio']['short_story'] = ''
    userProfile['bio']['contact_name'] = ''
    userProfile['bio']['website'] = companywebsite
    userProfile['bio']['email'] = companyemail
    userProfile['bio']['phone'] = ''
    userProfile['bio']['logo_url'] = ''
    userProfile['bio']['approved'] = False

    userProfile['bio']['address'] = {}
    userProfile['bio']['address']['street'] = ''
    userProfile['bio']['address']['city'] = ''
    userProfile['bio']['address']['state'] = ''
    userProfile['bio']['address']['zip'] = ''
    userProfile['bio']['address']['country'] = ''


    db.profiles.insert_one(userProfile)

    toaddr = [companyemail]
    subject = "Thank you for letting us work with " + companyname + "!"
    html =  """
            Hey There!
            <br><br>
            My name is Sarah and I'll be your advisor while you experience our partners platform for """+companyname+"""!
            <br><br>
            When you get a chance, please <a href="http://admin.fandemic.co">sign in here</a> using the username and password you provided, begin filling out your profile, and upload all your best products/variations.
            <br><br>
            Please, let me know if you have ANY questions at all (there are no silly questions)!
            <br><br>
            Thanks so much,
            <br>
            Sarah
            """
    if MODE == 'live':
        email = Mailer()
        email.send(toaddr,subject,html)

        slack = Slack()

        slack.sendPartnerSignupAlert(userProfile)

    #return redirect("/partners", code=302)
    return ''


@app.route('/instagram-validate', methods=['GET', 'POST'])
def instagramValidate():
    username = request.args.get('username')
    u = Star(c)
    exists = u.instagramUsernameExists(username)
    if exists == True:
        return 'success'
    else:
        return 'failed'

@app.route('/partners-form-validate', methods=['GET', 'POST'])
def partnersFormValidate():
    username = str(request.form['username'])
    company_id = str(request.form['companyname']).replace(" ","-").lower()
    u = Star(c)
    if (u.checkIDExists('bio.company_id',company_id)):
        return 'company'
    elif (u.checkIDExists('username',username)):
        return 'username'
    else:
        return 'success'


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

app.secret_key = 'vngf8765ghuu767g'
salt = 'dSGSjghjEGFCugbEgbv'


if __name__ == '__main__':

    app.run(debug=True)
