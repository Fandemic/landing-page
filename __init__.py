#!/usr/bin/python

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

braintree.Configuration.configure(braintree.Environment.Sandbox,
                                  merchant_id="2hf4g4nnyr988sbq",
                                  public_key="k7kxgfrgmwq95qrr",
                                  private_key="c33bb5198238ee8c544f5e2ff894a63b")

email = Mailer();

#================INDEX=====================
@app.route('/', methods=['GET', 'POST'])
def home():
    storeCount = db.stars.count()
    stars = db.stars.find({'stage': 'custom'}) #find stars with custom and pull just name and id
    categories = db.stars.distinct("category")

    return render_template('index.html', categories = categories, stars=stars, storeCount = storeCount)
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
        item['price'] = int(round( item['price'] + (item['price'] * .3) ))

    return render_template(template, items=list(items), box_items=list(box_items),styles=styles,packaging=packaging,cat=cat,cat2=cat2,cat3=cat3)


@app.route('/builder/add/<sku>')
def catalogAdd(sku):

    items = []

    if request.cookies.get('box') is not None:
        items = toList(request.cookies.get('box'))
        items.append(sku)
    items = toString(items)

    cat = db.items.find_one({"sku":sku})['category']

    resp = make_response(redirect('/builder/'+cat))

    resp.set_cookie('box', items)

    return resp


@app.route('/builder/remove/<sku>')
def catalogRemove(sku):

    items = toList(request.cookies.get('box'))
    items.remove(sku)

    items = toString(items)

    cat = db.items.find_one({"sku":sku})['category']

    resp = make_response(redirect('/builder/'+cat))
    resp.set_cookie('box', items)

    return resp

@app.route("/shipping-rates", methods=['GET'])
def getShippingRates():

    customer = request.args.get('customer');

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

    return json.dumps({'name':star['name'],'img_url':star['image']['profile']})

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
    return render_template('terms.html')
#-------------------------------------------

@app.route('/faq')
def faq():
    return render_template('faq.html')
#-------------------------------------------
@app.route('/store')
def new_store():
    return render_template('store.html')
#-------------------------------------------

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')



#=================MOCK STORES=====================
@app.route('/<starID>')
@mobile_template('{mobile/}shop.html')
def store(template,starID):

    star = db.stars.find_one({'id':starID.lower()}) #find the star
    print star

    if star == None: return render_template("404.html")

    #get the stars products
    if star['stage'] == 'live':
        products = star['products']
    else:
        products = db.sample_products.find({'category': star['category']}).sort("sort",-1).limit(6)

    #extract pricing for the wizard
    pricing = db.product_pricing.find({'category': star['category']},{'_id': False})
    pricingjs = db.product_pricing.find({'category': star['category']},{'_id': False})

    #loop products and index the categories on the fly
    catIndex = {}
    productsFiltered = []
    counter = 1
    for p in products:
        p["subcatID"] = [] #list of ID's for each product
        for c in p["subcat"]:

            if c in catIndex:
                p["subcatID"].append(catIndex[c])

            else:
                catIndex[c] = counter
                counter += 1
                p["subcatID"].append(catIndex[c])


        productsFiltered.append(p)

    return render_template(template, star = star,products = productsFiltered,
                                     cat=catIndex, pricing = pricing,
                                     braintree=braintree.ClientToken.generate(),
                                     pricingjs=map(json.dumps, pricingjs))
#---------------------------------------------

#================PROCESS AN ORDER====================#
@app.route('/charge', methods=['GET', 'POST'])
def charge():

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
        cart = order['cart'] = info['cart']
        order['total'] = charge['amount']
        order['ip'] = info['client_ip']
        order['star_id'] = info['star_id']
        order['active'] = True if info['active'] == 'True' else False

        #insert into database
        db.orders.insert_one(order)

        #Get sarah to send a notification
        msg = '*Name:* ' + order['name'] + '\n*Email:* ' + order['email']
        msg += '\n*Address*\n' + street1
        msg += '\n' + city + ' ' + state + ', ' + zipcode
        msg += '\n' + country
        msg += '\n*Cart*\n'
        for sku, v in cart.iteritems():
            msg += '`' + sku + '` '
            for v2, qty in v.iteritems():
                msg += v2
                for qty2, value in qty.iteritems():
                    msg += '(' + str(value) + ') '
            msg += '\n'
        sarah.send("order placed","Order #1234",msg)

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

        info = request.get_json()

        #send the email
        toaddr = [info['star']['email']]
        subject = "Your Beauty Box Campaign is Almost Ready!"
        html = """
                Hey """+ info['star']['name'] +"""!<br><br>
                I am so excited that you are ready to pre-sell your customized beauty box!<br><br>
                I just wanted to tell you that our web designers are making a unique store for you now!<br><br>
                Please be on the lookout for an email containing a custom link to your store!<br><br>
                With this link you will be able to direct fans to the store and have them pre-order your boxes.<br><br>
                If you have any questions at all, feel free to reply to this email. <br><br>

                Excited to watch you launch your own product line!<br>
                - Sarah :)
                """
        email.send(toaddr,subject,html)



        #send the email to fandemic team
        toaddr = ['brandon@fandemic.co','ethan@fandemic.co']
        subject = "New Launch Store Request - "+info['star']['name']
        string = ''
        for k, v in info.iteritems():
            string += '<strong>'+k+'</strong>: ' + str(v) + '<br>'

        html = """
                <html>
                  <head></head>
                  <body>
                    <div>
                        <h3>New launch store request from """+info['star']['name']+"""!</h3>
                        """+string+"""
                    </div>
                  </body>
                </html>
                """
        email.send(toaddr,subject,html)

    return '';


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':

    app.run(debug=True)
