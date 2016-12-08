#!/usr/bin/python

import math
import random
import time
from email.utils import parseaddr
from flask import Flask, render_template, request, jsonify, redirect, make_response
from pymongo import MongoClient, GEO2D
from collections import Counter
from jinja2 import Template
import json
from flask.ext.mobility import Mobility
from flask.ext.mobility.decorators import mobile_template
import stripe
import os
from slack import Slack
from trello import Trello
from werkzeug.utils import secure_filename
from mailer import Mailer
from shipping import Shipping
import braintree


UPLOAD_FOLDER = 'static/img/test/'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'ai', 'psd','svg'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
Mobility(app)
db = MongoClient('45.79.159.210', 27017).fandemic

mode = 'live';

#get the stars products
if mode == 'test':
    #BRAINTREE TEST MODE
    braintree.Configuration.configure(braintree.Environment.Sandbox,
                                      merchant_id="2hf4g4nnyr988sbq",
                                      public_key="k7kxgfrgmwq95qrr",
                                      private_key="c33bb5198238ee8c544f5e2ff894a63b")
elif mode == 'live':
    #BRAINTREE LIVE MODE
    braintree.Configuration.configure(braintree.Environment.Production,
                                      merchant_id="xhfrd2njsj3hpjqg",
                                      public_key="24hn86zpmj3kg6zd",
                                      private_key="bf70efac06af024e582747b76b9a621a")

email = Mailer();

#================INDEX=====================
@app.route('/', methods=['GET', 'POST'])
def home():
    storeCount = db.stars.count()

    storeCountPending = db.stars.count({"$or":[ {"campaigns.0.status":"pending"}, {"campaigns.0.status":"live"}]})
    stars = db.stars.find({"$or":[ {"campaigns.0.status":"pending"}, {"campaigns.0.status":"live"}]}).sort('campaigns.0.status', 1).limit(10)

    star_names = db.stars.find({"$or":[ {"campaigns.0.status":"pending"}, {"campaigns.0.status":"live"}]}).sort('campaigns.0.status', 1).limit(5)

    categories = db.stars.distinct("category")

    return render_template('index.html', categories = categories, stars=stars, star_names = star_names, storeCount = storeCount)
#-------------------------------------------

@app.route('/blog')
def blogHome():
    posts = db.blog.find({})
    return render_template('blog.html', posts = posts)



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
    stars = db.stars.find({"$or":[ {"campaigns.0.status":"pending"}, {"campaigns.0.status":"live"}]}).sort('campaigns.0.status', 1).limit(6)

    #get the box styles and packaging material
    styles = db.design.find({"category":"box"})
    packaging = db.design.find({"category":"packaging"})

    box_items = []

    if request.cookies.get('box') is not None:
        box = toList(request.cookies.get('box'))
        box_items = db.items.find({"sku":{ "$in": box }})

    if cat is None:

        #items = db.items.find() #find the
        return redirect("/builder/beauty", code=302)

    else:

        if cat2 is None:
            items = db.items.find({"category":cat}) #find the star

        else:

            if cat3 is None:
                items = db.items.find({"category":cat,"sub-category":cat2}) #find the star

            else:
                items = db.items.find({"category":cat,"sub-category":cat2,"sub-sub-category":cat3}) #find the star

    items = list(items);
    for item in items:
        item['price'] = int(math.ceil(math.ceil( item['price']) ))

    return render_template(template, items=list(items), box_items=list(box_items),styles=styles,packaging=packaging,cat=cat,cat2=cat2,cat3=cat3,stars=stars)



@app.route("/shipping-rates", methods=['GET', 'POST'])
def getShippingRates():

    customer = request.get_json()
    print customer

    shipment = Shipping()

    return json.dumps(shipment.get_rates(customer))




@app.route("/builder-alert", methods=['GET'])
def getData():

    ID = request.args.get('id')

    star = db.stars.find_one({"id":ID},{'_id': 0})
    star['_id'] = 0

    emails = 'not found in DB'
    if star is not None:
        emails = ', '.join([str(x) for x in star['email']])

    sarah = Slack()
    sarah.notify('*DESKTOP VISITED ALERT*\nHey guys, the user *'+str(ID)+'* just visited the beauty builder on desktop.\nTheir email address is [*'+str(emails)+'*]')

    return json.dumps({'name':star['name'],'img_url':star['image']['profile'],'id':star['id']})


@app.route("/builder-alert-mobile", methods=['GET'])
def getDataMobile():

    ID = request.args.get('id')

    star = db.stars.find_one({"id":ID})

    emails = 'not found in DB'
    if star is not None:
        emails = ', '.join([str(x) for x in star['email']])

    sarah = Slack()
    sarah.notify('*MOBILE VISITED ALERT*\nHey guys, the user *'+str(ID)+'* just visited the beauty builder on their mobile device.\nTheir email address is [*'+str(emails)+'*]')

    return json.dumps({'name':star['name'],'img_url':star['image']['profile']})


@app.route("/builder-remind-mobile", methods=['GET'])
def reminderMobile():

    ID = request.args.get('id')

    star = db.stars.find_one({"id":ID})

    emails = 'not found in DB'
    if star is not None:
        emails = ', '.join([str(x) for x in star['email']])

    sarah = Slack()
    sarah.notify('*REMINDER REQUESTED*\nHey guys, the user *'+str(ID)+'* wants to be reminded to visit the builder on desktop.\nTheir email address is [*'+str(emails)+'*]')

    return ''


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

    return render_template('blog-posts.html', content = content, title = title, author = author, date = date)
#-------------------------------------------

@app.route('/terms')
def terms():
    star_names = db.stars.find({'campaigns.0.status': 'pending'}).limit(5) #find stars with mock and pull just name and id
    return render_template('terms.html', star_names=star_names)
#-------------------------------------------

@app.route('/faq')
def faq():
    star_names = db.stars.find({'campaigns.0.status': 'pending'}).limit(5) #find stars with mock and pull just name and id
    return render_template('faq.html', star_names=star_names)
#-------------------------------------------

@app.route('/about')
def about():
    star_names = db.stars.find({'campaigns.0.status': 'pending'}).limit(5) #find stars with mock and pull just name and id
    return render_template('about.html', star_names=star_names)
#-------------------------------------------

@app.route('/partners')
def partners():
    star_names = db.stars.find({'campaigns.0.status': 'pending'}).limit(5) #find stars with mock and pull just name and id
    return render_template('partners.html', star_names=star_names)
#-------------------------------------------

@app.route('/benefits')
def benefits():
    star_names = db.stars.find({'campaigns.0.status': 'pending'}).limit(5) #find stars with mock and pull just name and id
    return render_template('benefits.html', star_names=star_names)

#-------------------------------------------

@app.route('/privacy')
def privacy():
    star_names = db.stars.find({'campaigns.0.status': 'pending'}).limit(5) #find stars with mock and pull just name and id
    return render_template('privacy.html', star_names=star_names)



#=================MOCK STORES=====================
@app.route('/<starID>')
@mobile_template('{mobile/}shop.html')
def store(template,starID):

    star = db.stars.find_one({'id':starID.lower()}) #find the star
    #print star

    if star == None: return render_template("404.html")

    currentTime = int(time.time())

    #auto-set the timer to 7 days for mock campaigns
    if star['campaigns'][0]['status'] == 'mock':
        star['campaigns'][0]['end_time'] = ( currentTime + (7 * 86400) )
        star['campaigns'][0]['num_orders'] = random.randint(40,1000)
        star['campaigns'][0]['price'] = random.randint(30,50)

    if star['campaigns'][0]['status'] == 'live':
        if star['campaigns'][0]['end_time'] < currentTime:
            if star['campaigns'][0]['num_orders'] < 10:
                star['campaigns'][0]['status'] = 'failed'
            elif star['campaigns'][0]['num_orders'] > 10:
                star['campaigns'][0]['status'] = 'success'

    #if !star['campaigns'][0]['charity']:

    if star['campaigns'][0].has_key('charity'):
        donations = format(star['campaigns'][0]['charity'][0]['amount'] * star['campaigns'][0]['num_orders'], ",d")
    else:
        donations = '0'

    return render_template(template, donations = donations, star = star,
                                     braintree=braintree.ClientToken.generate())

#================= MOCK STORES ========================
@app.route('/<starID>/activate/<key>')
def activate_store(starID,key):

    star = db.stars.find_one({'id':starID.lower()})

    if star == None: return render_template("404.html")

    currentTime = int(time.time())
    end_time = currentTime + 604800;

    if star['campaigns'][0]['status'] != 'live':

        #set up the star's store in the database
        db.stars.update_one({
            'id':starID.lower()
        },
        {
        '$set': {
            'campaigns.0.status': 'live',
            'campaigns.0.num_orders': 0,
            'campaigns.0.end_time':end_time
        }
        }, upsert=False)

        #send an email to brandon and ethan
        toaddr = ['brandon@fandemic.co','ethan@fandemic.co']
        subject = star['name'] + " Has Activated Their Store!"
        html =  """
                """+star['name']+""" has activated their store!
                The star's ID is """ + star['id'] + """
                """
        email.send(toaddr,subject,html)


        #send an email to the star
        toaddr = [star['email'][0]]
        email.sendActivateStoreEmail(toaddr,star['id'],star['name'])

    else:
        return render_template("404.html")


    return redirect("http://fandemic.co/"+starID, code=302)
#----------------------------------------------------

#================PROCESS AN ORDER====================#
@app.route('/charge', methods=['GET', 'POST'])
def charge():

    sarah = Slack()

    #get the ajaxed info
    if request.method == "POST":

        data = request.get_json()

        customer = data['customer'];
        shipping_rate = float(data['shipping_method']['rate'])


        #process the transaction
        result = braintree.Transaction.sale({
            "amount": str(data['price']+shipping_rate),
            "payment_method_nonce": data['nonce'],
            "order_id": data['order_id'],
            "options": {
              "submit_for_settlement": True
            }

        });


        print data

        print '-------------------------------------------'

        #print result for testing
        print result

        if result.is_success:


            #submit transaction to orders collection
            result = db.orders.insert_one(data);

            #increment star's order qty by 1
            db.stars.update_one({
                  'id': data['star_id'],
                  'campaigns.0.id': data['campaign_id']
                },{
                  '$inc': { 'campaigns.0.num_orders': 1 }
                })

            #send an email to the person who ordered
            toaddr = [customer['email']]
            subject = "Order Confirmation - Fandemic"
            html =  """
                    Hey """+ customer['name'] +""",<br><br>
                    Your order has been processed successfully!<br><br>

                    <h3>Order Details</h3>
                    <p>Total Price: $"""+ str(data['price']+shipping_rate) +"""($"""+ str(data['price']) +""" box + $"""+ data['shipping_method']['rate'] +""" shipping)</p>
                    <p>Order ID: """+ data['order_id'] +"""</p>
                    <p>Star ID: """+ data['star_id'] +"""</p>
                    <p>Campaign ID: """+ data['campaign_id'] +"""</p>
                    <hr>
                    <h3>Shipping Information</h3>
                    <p>"""+ customer['name'] +"""</p>
                    <p>"""+ customer['addr'] +"""</p>
                    <p>"""+ customer['city'] +""" """+ customer['state'] +""", """+ customer['zip'] +"""</p>
                    <p>"""+ customer['country'] +"""</p>
                    """
            email.send(toaddr,subject,html)



            #slack notification of transaction
            msg= ''
            msg += '\n*star ID:* ' + data['star_id']
            msg += '\n*campaign ID:* ' + data['campaign_id']
            msg += '\n*name:* ' + customer['name']
            msg += '\n*email:* ' + customer['email']
            msg += '\n*addr:* ' + customer['addr']
            msg += '\n*city:* ' + customer['city']
            msg += '\n*state:* ' + customer['state']
            msg += '\n*zip:* ' + customer['zip']
            msg += '\n*shipping service:* ' + data['shipping_method']['service']
            msg += '\n*shipping rate:* $' + str(data['shipping_method']['rate'])
            msg += '\n*box price:* $' + str(data['price'])
            msg += '\n*total price:* $' + str(data['price']+shipping_rate)



            sarah.send("order from " + data['star_id'] + "'s store","Order ID: "+data['order_id'],msg)


            return '';

@app.route('/request-sample/<starID>', methods=['GET', 'POST'])
def sampleRequest(starID):

    star = db.stars.find_one({'id':starID.lower()}) #find the star

    return render_template('sample-request.html',star=star)

@app.route('/charge-sample-request', methods=['GET', 'POST'])
def chargeSampleRequest():

    sarah = Slack()

    #get the ajaxed info
    if request.method == "POST":

        info = request.get_json()

        #if info['active'] == 'False':
        #SECRET_KEY = 'sk_test_BSCdbwIufwN4xI0AKXBk3XNB'
        #PUBLISHABLE_KEY = 'pk_test_z1mq9KQ3GyakW5OdduPIX94u'
        #else:
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
            description= info['billing_name'] + ' ordered products from ' + info['star'],
            receipt_email=info['email']
        )

        #build the string to be saved
        order = {}
        order['name'] = info['billing_name']
        order['email'] = info['email']
        order['address'] = {}
        street1 = order['address']['street1'] = info['shipping_address_line1']
        city = order['address']['city'] = info['shipping_address_city']
        state = order['address']['state'] = info['shipping_address_state']
        zipcode = order['address']['zip'] = info['shipping_address_zip']
        country = order['address']['country'] = info['shipping_address_country']
        order['stripe'] = {}
        order['stripe']['id'] = charge['id']
        order['stripe']['customer'] = charge['customer']
        order['total'] = charge['amount']
        order['ip'] = info['client_ip']
        order['star_id'] = info['star_id']

        #insert into database
        #db.orders.insert_one(order)

        #Get sarah to send a notification
        msg = '*Name:* ' + order['name'] + '\n*Email:* ' + order['email']
        msg += '\n' + str(order['total'])
        msg += '\n*Address*\n' + street1
        msg += '\n' + city + ' ' + state + ', ' + zipcode
        msg += '\n' + country
        msg += '\n'
        sarah.send("sample request","SAMPLE REQUEST",msg)

    return '';

#================PROCESS A STOCKING FEE====================#
@app.route('/sample-charge', methods=['GET', 'POST'])
def sampleCharge():

    #get the ajaxed info
    if request.method == "POST":

        info = request.get_json()

        #SECRET_KEY = 'sk_test_BSCdbwIufwN4xI0AKXBk3XNB'
        #PUBLISHABLE_KEY = 'pk_test_z1mq9KQ3GyakW5OdduPIX94u'
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
            description= 'Someone ordered a sample',
            metadata={},
            receipt_email=info['email']
        )

        #send the confirmation email to client
        toaddr = [info['email']]
        subject = "Sample Order Confirmation"
        html =  """
                Hey """+ info['star']['name'] +""",<br><br>
                I saw you customized your <strong>"""+ info['box_name'] +"""</strong> box and
                that you want to sample it for yourself before you start selling it!<br><br>
                I am reaching out just to tell you that your sample will be shipped within 24 hours
                and should be at your doorstep in 5 business days or less.<br><br>
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

#================PROCESS A STOCKING FEE====================#
@app.route('/launch-store-request', methods=['GET', 'POST'])
def launchStoreRequest():

    #get the ajaxed info
    if request.method == "POST":

        trello = Trello();

        info = request.get_json()

        #create a campaign if the user exists
        if info['star']['exists']:
            ID = info['star']['id']
            star = db.stars.find_one({'id':ID.lower()})
            campaign = {}
            campaign['id'] = info['box_name'].replace(' ', '-').lower()
            campaign['status'] = 'pending'
            campaign['index'] = 1
            campaign['box_name'] = info['box_name']
            campaign['brand_name'] = info['brand_name']
            campaign['end_time'] = 1477267200
            campaign['cost'] = info['cost']
            campaign['price'] = info['price']
            campaign['description'] = 'your box description goes here, please email it to sarah@fandemic.co'
            campaign['num_orders'] = 500
            campaign['style'] = {}
            campaign['style']['color_primary'] = '#fff'
            campaign['style']['color_secondary'] = '#fff'
            campaign['style']['btn_color'] = '#28a237'
            campaign['products'] = info['products']
            db.stars.update_one({'id':ID.lower()}, {'$push': {'campaigns': campaign}})

        #if star does not exist, create them
        else:

            info['star']['id'] = info['star']['name'].replace(' ', '-').lower()
            ID = info['star']['id']

            #make sure ID does not exist
            if (db.stars.find({'id':ID}).count() <= 0):
                client = {}
                client['id'] = info['star']['id']
                client['name'] = info['star']['name']
                client['email'] = [info['star']['email']]
                client['phone'] = info['star']['phone']
                client['campaigns'] = [{}]
                client['campaigns'][0]['id'] = info['box_name'].replace(' ', '-').lower()
                client['campaigns'][0]['status'] = 'pending'
                client['campaigns'][0]['index'] = 1
                client['campaigns'][0]['box_name'] = info['box_name']
                client['campaigns'][0]['brand_name'] = info['brand_name']
                client['campaigns'][0]['end_time'] = 1477267200
                client['campaigns'][0]['goal'] = info['goal']
                client['campaigns'][0]['cost'] = info['cost']
                client['campaigns'][0]['price'] = info['price']
                client['campaigns'][0]['description'] = 'your box description goes here, please email it to sarah@fandemic.co'
                client['campaigns'][0]['num_orders'] = 500
                client['campaigns'][0]['style'] = {}
                client['campaigns'][0]['style']['color_primary'] = '#9d9d9d'
                client['campaigns'][0]['style']['color_secondary'] = '#9d9d9d'
                client['campaigns'][0]['style']['btn_color'] = '#28a237'
                client['campaigns'][0]['products'] = info['products']
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
        trello_string += '**Profit:** ' + str(float(info['price']) - float(info['cost']))  + '\n'
        trello_string += '**Box Name:** ' + info['box_name'] + '\n'
        trello_string += '**Brand Name:** ' + info['brand_name'] + '\n'
        trello_string += '**Color:** ' + info['style']['name'] + '\n'
        trello_string += '**Material:** ' +info['material']['name'] + '\n'
        trello_string += '**Primary Font:** ' + info['font1'] + '\n'
        trello_string += '**Secondary Font:** ' + info['font2'] + '\n'
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
        email_string += '<strong>Price:</strong> ' + str(info['price']) + '<br>'
        email_string += '<strong>Profit:</strong> ' + str(float(info['price']) - float(info['cost']))  + '<br>'
        email_string += '<strong>Box Name:</strong> ' + info['box_name'] + '<br>'
        email_string += '<strong>Brand Name:</strong> ' + info['brand_name'] + '<br>'
        email_string += '<strong>Color:</strong> ' + info['style']['name'] + '<br>'
        email_string += '<strong>Material:</strong> ' +info['material']['name'] + '<br>'
        email_string += '<strong>Primary Font:</strong> ' + info['font1'] + '<br>'
        email_string += '<strong>Secondary Font:</strong> ' + info['font2'] + '<br>'
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
                        <h3>New launch store request from """+info['star']['name']+"""!</h3>
                        """+email_string+"""
                    </div>
                  </body>
                </html>
                """
        email.send(toaddr,subject,html)

        #add a email card with the store request
        trello.addCard_CR(info['star']['name'],trello_string)


        #send the email
        toaddr = [info['star']['email']]
        subject = "Your Beauty Box Campaign is Almost Ready!"
        html = """
                Hi """+ info['star']['name'] +""",<br><br>

                Woohoo! One step closer to launching your beauty line!<br><br>
                I just need some important things before we launch :)<br><br>

                <div style="font-size:16px">
                <strong>Please send me the following:</strong><br>
                1. Your Social Media URL's<br>
                2. Short description of your box<br>
                3. Logo if you have one<br>
                4. Profile photo for the store
                </div>

                <br><br>
                Once I get this information I can send over an activation link.
                Your store will be found here, https://fandemic.co/""" + info['star']['id'] + """
                <br><br>
                You will have 7 days to sell as many boxes as possible!
                <br><br>
                If you want a <strong>sample</strong> before launching you can order one at the end of the <a "https://fandemic.co/builder">Beauty Box Builder</a>.


                <br><br>
                Excited to watch you launch!<br><br>
                Sarah :)
                """
        email.send(toaddr,subject,html)

    return '';


#=============EMAIL UPDATER=============
@app.route("/email-batch-updater/admin")
def emailBatchUpdater():

    count = db.stars.find({'email':{'$size': 0},'category':'beauty'}).count()

    stars = db.stars.find({'email':{'$size': 0},'category':'beauty'}).limit(30).skip( int(round( random.random() * count )) ) #find the star

    return render_template('email-batch-updater.html', stars = stars, count = count)


@app.route('/batchUpdateEmail', methods=['GET', 'POST'])
def update():

    if request.method == 'POST':
        name = request.form
        for v in request.form:
            email = request.form[v]
            email = parseaddr(email)[1]
            if email != '':
                db.stars.update_one({'id':v},{"$set":{"email.0":email}})

    return redirect('/email-batch-updater/admin')



@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':

    app.run(debug=True)
