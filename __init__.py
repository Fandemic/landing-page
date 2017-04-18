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
from objects.util import Util
from objects.shipping import Shipping
from objects.slack import Slack
from objects.trello import Trello
from objects.star import Star
from objects.partner import Partner
from objects.cdn import CDN

from password import hash_password, verify_password
from config import Config

import datetime

import sys

reload(sys)
sys.setdefaultencoding('utf8')

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

#autoreload templates
app.config['TEMPLATES_AUTO_RELOAD'] = True

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
def builder(cat=None):
    return redirect("/get-started", code=302)


#Store Builder
@app.route('/get-started')
def getStarted(cat='beauty'):

    unixTimestamp = int(time.time())

    #Get the current stars store info
    storeCountPending = db.stars.count({"$or":[ {"campaigns.0.status":"pending"}, {"campaigns.0.status":"live"}]})
    #stars = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(6)

    #redirect if the category does not exist
    if cat is None:
        return redirect("/builder/beauty", code=302)


    approved_brands = []


    brands = list(db.profiles.find({"system":"partners",
                                    "bio": { "$exists": True },
                                    "bio.approved":True}))

    for brand in brands:
        approved_brands.append(brand['bio']['company_id'])


    #Get Categories
    items = list(db.staging_items.find({"category":"beauty",
                                             "sub_category": { "$exists": True },
                                             "company_id":{ "$in": approved_brands }
                                             },
                                             {'_id': False}))

    cats = {item['sub_category'] for item in items}


    return render_template('builder.html', brands=brands,cat=cat,cats=cats, unixTimestamp = unixTimestamp)


#Product search for the builder
@app.route("/product-search", methods=['GET', 'POST'])
def productSearch():

    filters = request.get_json()

    items = []
    approved_brands = []

    #filter based on approved brands
    if filters['brand']['id'] == 'All Brands':
        brands = list(db.profiles.find({"system":"partners",
                                        "bio": { "$exists": True },
                                        "bio.approved":True}))
        for brand in brands:
            approved_brands.append(brand['bio']['company_id'])


    if filters['category'] == 'All Products' and filters['brand']['id'] == 'All Brands':

        items = list(db.staging_items.find({"category":"beauty",
                                            "company_id":{ "$in": approved_brands }
                                            },
                                            {'_id': False}))

    elif filters['category'] == 'All Products':
        items = list(db.staging_items.find({"category":"beauty",
                                            "company_id":filters['brand']['id']
                                            },
                                            {'_id': False}))

    elif filters['brand']['id'] == 'All Brands':
        items = list(db.staging_items.find({"category":"beauty",
                                            "sub_category":filters['category'],
                                            "company_id":{ "$in": approved_brands }
                                            },
                                            {'_id': False}))

    else:
        items = list(db.staging_items.find({"category":"beauty",
                                            "sub_category":filters['category'],
                                            "company_id":filters['brand']['id']
                                            },
                                            {'_id': False}))


    return json.dumps(items)


@app.route("/shipping-rates", methods=['GET', 'POST'])
def getShippingRates():

    customer = request.get_json()
    print customer

    shipment = Shipping(c)

    return json.dumps(shipment.get_rates(customer))

#-------------------------------------------

@app.route('/terms')
def terms():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('terms.html', star_names=star_names)
#-------------------------------------------

@app.route('/blog')
def blogHome():
    posts = db.blog.find()
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('blog.html', star_names=star_names, posts = posts)
#-------------------------------------------


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

@app.route('/how-it-works')
def how_it_works():
    return render_template('how-it-works.html')

@app.route('/faq')
def faq():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('faq.html', star_names=star_names)
#-------------------------------------------
@app.route('/about')
def about():
    return redirect("/influencers", code=302)

@app.route('/influencers')
def influencers():
    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('about.html', star_names=star_names)
#-------------------------------------------

@app.route('/partners')
def partners():
    return redirect("/brands", code=302)

@app.route('/brands')
def brands():
    unixTimestamp = int(time.time())
    companies = db.profiles.find({"system":"partners", "bio.approved":True})

    star_names = db.stars.find({"campaigns.0.status":"live"}).sort('campaigns.0.status', 1).limit(5)
    return render_template('partners.html', star_names=star_names, unixTimestamp=unixTimestamp,companies=companies)
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

@app.template_filter('ctime')
def timectime(s):
    return datetime.datetime.fromtimestamp(
        int(s)
    ).strftime('%B %d, %Y')

#=================MOCK STORES=====================
@app.route('/<starID>')
def store(starID):

    unixTimestamp = int(time.time())

    star = db.stars.find_one({'id':starID.lower()}) #find the star
    #print star

    if star == None: return render_template("404.html")

    currentTime = int(time.time())

    #get blog posts
    blogs = db.blog.find({'username':starID.lower()})

    #pull default descriptions for products
    c = 0
    for product in star['campaigns'][0]['products']:

        #Get the item num and variation num
        item = product['item_num'].rsplit('-', 1)


        try:
            star['campaigns'][0]['products'][c]['item_base_num'] = item[0]
            #star['campaigns'][0]['products'][c]['variation_num'] = item[1]

            #match the product info to the users products
            product_info = db.staging_items.find_one({'item_num':item[0]})

            star['campaigns'][0]['products'][c]['description'] = product_info['description'].replace("'","\\'") #find the star
        except:
            #lady burd exception...
            star['campaigns'][0]['products'][c]['item_base_num'] = product['item_num']
            product_info = db.staging_items.find_one({'item_num':product['item_num']})

            star['campaigns'][0]['products'][c]['description'] = product_info['description'].replace("'","\\'") #find the star



        try:
            star['campaigns'][0]['products'][c]['ingredients'] = product_info['ingredients']
        except KeyError:
            star['campaigns'][0]['products'][c]['ingredients'] = 'not listed'

        star['campaigns'][0]['products'][c]['company_id'] = product_info['company_id']
        star['campaigns'][0]['products'][c]['retail_price'] = product_info['retail_price']
        star['campaigns'][0]['products'][c]['price'] = str(float(product_info['partner_price']) + float(3)) #ADD FANDEMIC FEE

        #match the company info to the users products
        company = db.staging_items.find_one({'name':product['name']})
        star['campaigns'][0]['products'][c]['company'] = company

        c += 1

    util = Util()
    promotionalUrl = util.getPromotionalUrl(star['id'])['id']

    return render_template('shop.html', promotionalUrl=promotionalUrl, star = star, blogs = list(blogs),
                                     braintree=braintree.ClientToken.generate(), unixTimestamp = unixTimestamp)


#================PROCESS AN ORDER====================#
@app.route('/charge', methods=['GET', 'POST'])
def charge():

    #get the ajaxed info
    if request.method == "POST":

        #parter object
        partner = Partner(c)
        email = Mailer()

        #get the post data
        data = request.get_json()

        try:
            shipping_rate = float(data['shipping_method']['rate'])
        except:
            shipping_rate =  float(0.00)

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
            if partner.process_order(data,result):
                email.sendOrderConfirmation(data['customer'],data) #send confirmation to purchasee




            return 'OK';


#================FREE ORDER (customer used a coin)====================#
@app.route('/free-order', methods=['GET', 'POST'])
def freeOrder():

    #get the ajaxed info
    if request.method == "POST":

        partner = Partner(c)
        star = Star(c)
        email = Mailer()

        #get the post data
        data = request.get_json()

        #process order
        if partner.process_order(data):
            star.useCoin(data['coin']['code'])
            email.sendOrderConfirmation(data['customer'],data)

        return 'OK';


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
        info['star']['id'] = star.getID(info['star']['instagram'].lower())

        #hash the password
        info['star']['password'] = hash_password(info['star']['password'], salt)

        star.createProfile(info) #create a star profile
        star_info = star.createStore(info) #create a new store for the star
        #star.giftCoin(info['star']['email']) #gift a coin

        #send alert to Fandemic team via slack
        slack.sendStoreCreatedAlert(info)

        #send confirmation to star via email
        email.sendStoreConfirmation(info,star_info['img']['profile'])

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
    userProfile['username'] = username.lower()
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
            My name is Sarah and I'll be your advisor to help walk you through the Fandemic experience for """+companyname+"""!
            <br><br>
            When you get a chance, please <a href="http://admin.fandemic.co"> sign in here </a> using the username ("""+username+""") and password you provided, begin filling out your profile, and upload all your best products/variations.
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

    username = request.args.get('username').lower()
    u = Star(c)

    exists = u.instagramUsernameExists(username)
    available = u.instagramUsernameAvailable(username)

    if not exists:
        return 'failed-exist'
    if not available:
        return 'failed-available'
    else:
        return 'success'

@app.route('/influencer-email-exists', methods=['GET', 'POST'])
def emailValidate():

    email = request.args.get('email').lower()

    if (db.profiles.find({'bio.email':email,'system':'influencers'}).count() <= 0):
        return 'success'
    else:
        return 'failed'


@app.route('/coin-validate', methods=['GET', 'POST'])
def coinValidate():
    code = request.args.get('code').upper()
    star = Star(c)
    exists = star.coinCodeExists(code)
    if exists == True:
        return 'success'
    else:
        return 'failed'

@app.route('/partners-form-validate', methods=['GET', 'POST'])
def partnersFormValidate():
    username = str(request.form['username'])
    email = str(request.form['email'])
    company_id = str(request.form['companyname']).replace(" ","-").lower()
    u = Star(c)
    if (u.checkIDExists('bio.company_id',company_id)):
        return 'company'
    elif (u.checkIDExists('username',username)):
        return 'username'
    elif (u.checkIDExists('bio.email',email)):
        return 'email'
    else:
        return 'success'


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

app.secret_key = 'vngf8765ghuu767g'
salt = 'dSGSjghjEGFCugbEgbv'


if __name__ == '__main__':
    app.run(debug=True)
