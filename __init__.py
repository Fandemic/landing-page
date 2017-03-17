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
from slack import Slack
from trello import Trello
from utils import Utils
from werkzeug.utils import secure_filename
from mailer import Mailer
from shipping import Shipping
from cdn import CDN
import braintree
from flask_compress import Compress
from password import hash_password, verify_password
from config import Config

c = Config()
db = c.dbConfig()
MODE = c.configMode()

email = Mailer();

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
@mobile_template('{mobile/}builder.html')
def catalog(template,cat=None,cat2=None,cat3=None):

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
            items = db.staging_items.find({"category":cat}) #find the star

        else:

            if cat3 is None:
                items = db.staging_items.find({"category":cat,"sub-category":cat2}) #find the star

            else:
                items = db.staging_items.find({"category":cat,"sub-category":cat2,"sub-sub-category":cat3}) #find the star

    items = list(items);
    for item in items:
        item['price'] = int(math.ceil(math.ceil( float(item['retail_price'])) ))

    return render_template(template, items=list(items), box_items=list(box_items),styles=styles,packaging=list(packaging),cat=cat,cat2=cat2,cat3=cat3,stars=stars)



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
@mobile_template('{mobile/}shop.html')
def store(template,starID):

    star = db.stars.find_one({'id':starID.lower()}) #find the star
    #print star

    if star == None: return render_template("404.html")

    currentTime = int(time.time())

    #pull default descriptions for products
    c = 0
    for product in star['campaigns'][0]['products']:

        #match the product info to the users products
        product_info = db.items.find_one({'name':product['name']})
        star['campaigns'][0]['products'][c]['description'] = product_info['description'].replace("'","\\'") #find the star
        star['campaigns'][0]['products'][c]['company_id'] = product_info['company_id']

        #match the company info to the users products
        company = db.staging_items.find_one({'name':product['name']})
        star['campaigns'][0]['products'][c]['company'] = company

        c += 1


    return render_template(template, star = star,
                                     braintree=braintree.ClientToken.generate())


#================PROCESS AN ORDER====================#
@app.route('/charge', methods=['GET', 'POST'])
def charge():

    email = Mailer()
    sarah = Slack()

    #get the ajaxed info
    if request.method == "POST":

        #get the post data
        data = request.get_json()

        customer = data['customer'];
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


        #The transaction was a success, keep processing the data
        if result.is_success:

            #generate shipping labels
            company = {}
            company['name'] = "Brandons Cosmetics"
            company['street'] = "11823 Maren Ct."
            company['city'] = "Reisterstown"
            company['state'] = "Maryland"
            company['zip'] = "21136"
            company['country'] = "US"
            shipping = Shipping()
            data['shipping_info'] = shipping.purchase_shipping_label(company=company,customer=customer)

            #additional data parsing
            data['type'] = 'ORDER' #can also be SAMPLE
            #data['braintree_id'] = result.transaction.id
            #data['order_date'] = int(time.time())
            data['shipped'] = False
            data['received'] = False

            #submit transaction to orders collection
            db.orders.insert_one(data);

            #send the email confirmation to customer
            email.sendOrderConfirmation(customer,data)

            #send order alert to the team
            sarah.sendOrderConfirmation(customer,data)

            return 'OK';


#================PROCESS A STOCKING FEE====================#
@app.route('/sample-charge', methods=['GET', 'POST'])
def sampleCharge():

    #get the ajaxed info
    if request.method == "POST":

        info = request.get_json()


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

        #send the email
        toaddr = ['brandon@fandemic.co','ethan@fandemic.co']
        subject = "New Sample Order!"

        string = ''
        for k, v in info.iteritems():
            string += '<strong>'+k+'</strong>: ' + str(v) + '<br>'

        html = """
                <html>
                  <head></head>
                  <body>
                    <div>
                        <h3>Fandemic received a sample order!</h3>
                        """+string+"""
                    </div>
                  </body>
                </html>
                """
        email.send(toaddr,subject,html)

    return '';


#================Launch a Store====================#
@app.route('/launch-store-request', methods=['GET', 'POST'])
def launchStoreRequest():

    #get the ajaxed info
    if request.method == "POST":

        trello = Trello()

        info = request.get_json()

        #create the star ID using the instagram
        info['star']['id'] = info['star']['instagram']

        #check if the name exists
        exist = True
        c = 1
        while exist:
            if (db.stars.find({'id':info['star']['id']}).count() <= 0):
                exist = False
            else:
                info['star']['id'] = info['star']['instagram'] + str(c)
                c = c + 1

        #Get img url from instagram
        u = Utils()
        profile_img_url = u.getInstagramImageFromUsername(info['star']['instagram'])

        client = {}
        client['id'] = info['star']['id']
        client['name'] = info['star']['name']
        client['email'] = [info['star']['email']]
        client['phone'] = info['star']['phone']
        client['password'] = info['star']['password']
        client['img'] = {}
        client['img']['profile'] = profile_img_url
        client['url'] = {}
        client['url']['instagram'] = 'https://instagram.com/'+info['social_media']['instagram']
        client['url']['twitter'] = 'https://twitter.com/'+info['social_media']['twitter']
        client['url']['facebook'] = info['social_media']['facebook']
        client['url']['youtube'] = info['social_media']['youtube']
        client['campaigns'] = [{}]
        client['campaigns'][0]['id'] = info['box_name'].replace(' ', '-').lower()
        client['campaigns'][0]['status'] = 'pending'
        client['campaigns'][0]['index'] = 1
        client['campaigns'][0]['end_time'] = 1477267200
        client['campaigns'][0]['cost'] = info['cost']
        client['campaigns'][0]['price'] = info['price']
        client['campaigns'][0]['profit'] = info['profit']
        client['campaigns'][0]['description'] = info['desc']
        client['campaigns'][0]['campaign_video'] = '0'
        client['campaigns'][0]['products'] = info['products']
        client['campaigns'][0]['charity'] = {}
        client['campaigns'][0]['charity']['amount'] = info['charity']
        client['campaigns'][0]['charity']['name'] = 'No Charity Setup'
        client['campaigns'][0]['charity']['URL'] = '#'

        db.stars.insert_one(client)

        #send the email to fandemic team
        toaddr = ['brandon@fandemic.co','ethan@fandemic.co']
        subject = "New Launch Store Request - "+info['star']['name']

        #build the trello string
        trello_string = ''
        trello_string += '**Store URL:** ' + 'https://fandemic.co/' + info['star']['id'] + '\n'
        trello_string += '**Confirmation Code:** ' + info['confirmation_code'] + '\n'
        trello_string += 'STAR\n'
        trello_string += '-----------------------------\n'
        trello_string += '**Name:** ' + info['star']['name'] + '\n'
        trello_string += '**ID:** ' + info['star']['id'] + '\n'
        trello_string += '**Email:** ' + info['star']['email'] + '\n'
        trello_string += '**Phone:** ' + info['star']['phone'] + '\n'
        trello_string += '**Exists:** ' + str(info['star']['exists']) + '\n'
        trello_string += 'BOX\n'
        trello_string += '-----------------------------\n'
        trello_string += '**Goal:** ' + str(info['goal']) + '\n'
        trello_string += '**Cost:** ' + str(info['cost']) + '\n'
        trello_string += '**Price:** ' + str(info['price']) + '\n'

        trello_string += '**Profit:** ' + str(info['profit']) + '\n'
        trello_string += '**Charity:** ' + str(info['charity']) + '\n'

        trello_string += '**Profit:** ' + str(float(info['price']) - float(info['cost']))  + '\n'
        trello_string += '**Box Name:** ' + info['box_name'] + '\n'
        trello_string += '**Brand Name:** ' + info['brand_name'] + '\n'
        trello_string += 'PRODUCTS\n'
        trello_string += '-----------------------------\n'
        for p in info['products']:
            trello_string += p['item_num'] + ' | ' + p['name'] + ' | ' + p['cost']
            if 'variation' in p:
                trello_string += ' | ' + p['variation']
            trello_string += '\n~~~~~~~~~~~~~~~~~~~~\n'

        #build the trello string
        email_string = ''
        email_string += '<strong>Store URL:</strong> ' + 'https://fandemic.co/' + info['star']['id'] + '<br>'
        email_string += '<strong>Confirmation Code:</strong> ' + info['confirmation_code'] + '<br>'
        email_string += '<br><h3>STAR</h3>'
        email_string += '<hr>'
        email_string += '<strong>Name:</strong> ' + info['star']['name'] + '<br>'
        email_string += '<strong>ID:</strong> ' + info['star']['id'] + '<br>'
        email_string += '<strong>Email:</strong> ' + info['star']['email'] + '<br>'
        email_string += '<strong>Phone:</strong> ' + info['star']['phone'] + '<br>'
        email_string += '<strong>Exists:</strong> ' + str(info['star']['exists']) + '<br>'
        email_string += '<br><h3>BOX</h3>'
        email_string += '<hr>'
        email_string += '<strong>Goal:</strong> ' + str(info['goal']) + '<br>'
        email_string += '<strong>Cost:</strong> ' + str(info['cost']) + '<br>'

        email_string += '<strong>Profit:</strong> ' + str(info['profit']) + '<br>'
        email_string += '<strong>Charity:</strong> ' + str(info['charity']) + '<br>'

        email_string += '<strong>Price:</strong> ' + str(info['price']) + '<br>'

        email_string += '<br><h3>PRODUCTS</h3>'
        email_string += '<hr>'
        for p in info['products']:
            email_string += p['item_num'] + ' | ' + p['name'] + ' | ' + p['cost']
            if 'variation' in p:
                email_string += ' | ' + p['variation']
            email_string += '<br>'


        html = """
                <html>
                  <head></head>
                  <body>
                    <div>
                        <h3>New store request from """+info['star']['name']+"""!</h3>
                        """+email_string+"""
                    </div>
                  </body>
                </html>
                """
        email.send(toaddr,subject,html)

        #add a email card with the store request
        trello.addCard_CR(info['star']['name'],trello_string)


        #send an activate store email to the user
        toaddr = [info['star']['email']]
        #email.sendActivate(toaddr,info['star']['id'],info['box_name'])

        if info['logo'] != '':
            #submit logo to cloudinary_url
            cdn = CDN();
            cdn.uploadLogo(info['logo'],info['star']['id']);

        if info['box_img'] != '':
            #submit box to cloudinary_url
            cdn = CDN();
            cdn.uploadBox(info['box_img'],info['star']['id']);

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

    toaddr_comp = [companyemail]
    subject_comp = "Thank you for letting us work with " + companyname + "!"
    html_comp =  """
            Hey There!
            <br>
            My name is Sarah and I'll be your advisor while you experience our partners platform for """+companyname+"""!
            <br>
            When you get a chance, please sign in using the username and password you provided, begin filling out your profile, and upload all your best products/variations.
            <br>
            Please, let me know if you have ANY questions at all (there are no silly questions)!
            """

    if MODE == 'live':

        email = Mailer()
        email.send(toaddr,subject,html)

        sarah = Slack()

        slack_msg = '*Company Name:* ' + companyname
        slack_msg += '\n Company Website:* ' + companywebsite
        slack_msg += '\n Company ID:* ' + companyname.replace(" ","-").lower()
        slack_msg += '\n Username:* ' + username
        slack_msg += '\n Email:* ' + companyemail


        sarah.notify(slack_msg)

    return redirect("/partners", code=302)


@app.route('/instagram-validate', methods=['GET', 'POST'])
def instagramValidate():
    username = request.args.get('username')
    u = Utils()
    exists = u.instagramUsernameExists(username)
    if exists == True:
        return 'success'
    else:
        return 'failed'

@app.route('/partners-form-validate', methods=['GET', 'POST'])
def partnersFormValidate():
    username = str(request.form['username'])
    company_id = str(request.form['companyname']).replace(" ","-").lower()
    u = Utils()
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
