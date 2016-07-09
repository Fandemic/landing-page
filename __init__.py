from flask import Flask, render_template, request, jsonify, redirect
from pymongo import MongoClient, GEO2D
from collections import Counter
from jinja2 import Template
import json
import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
from flask.ext.mobility import Mobility
from flask.ext.mobility.decorators import mobile_template
import stripe
import os

app = Flask(__name__)
Mobility(app)
db = MongoClient('45.79.159.210', 27017).fandemic

#================INDEX=====================
@app.route('/')
def home():
    return render_template('index.html')
#-------------------------------------------
@app.route('/blog')
def blogHome():
    posts = db.blog.find({})
    return render_template('blog.html', posts = posts)

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
    if star['active']:
        products = star['products'][:6]
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
                                     pricingjs=map(json.dumps, pricingjs))
#---------------------------------------------

#================PROCESS AN ORDER====================#
@app.route('/charge', methods=['GET', 'POST'])
def charge():

    #get the ajaxed info
    if request.method == "POST":

        info = request.get_json()

        if info['active'] == 'False':
            SECRET_KEY = 'sk_test_BSCdbwIufwN4xI0AKXBk3XNB'
            PUBLISHABLE_KEY = 'pk_test_z1mq9KQ3GyakW5OdduPIX94u'
        else:
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
        order['address']['street1'] = info['shipping_address_line1']
        order['address']['city'] = info['shipping_address_city']
        order['address']['state'] = info['shipping_address_state']
        order['address']['zip'] = info['shipping_address_zip']
        order['address']['country'] = info['shipping_address_country']
        order['stripe'] = {}
        order['stripe']['id'] = charge['id']
        order['stripe']['customer'] = charge['customer']
        order['cart'] = info['cart']
        order['total'] = charge['amount']
        order['ip'] = info['client_ip']
        order['star_id'] = info['star_id']
        order['active'] = True if info['active'] == 'True' else False

        db.orders.insert_one(order)

    return '';

#================PROCESS A STOCKING FEE====================#
@app.route('/charge-stocking-fee', methods=['GET', 'POST'])
def chargeStockingFee():

    #get the ajaxed info
    if request.method == "POST":

        info = request.get_json()

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
            description= info['star'] + ' stocked their store!',
            metadata={'star_id': info['star_id'],
                      'quantity': str(info['quantity']),
                      'items': ', '.join(info['items'])},
            receipt_email=info['email']
        )

        #build the string to be saved
        order = {}
        order['name'] = info['star']
        order['email'] = info['email']
        order['address'] = {}
        order['stripe'] = {}
        order['stripe']['id'] = charge['id']
        order['stripe']['customer'] = charge['customer']
        order['total'] = charge['amount']
        order['ip'] = info['client_ip']
        order['star_id'] = info['star_id']
        order['active'] = True if info['active'] == 'True' else False

        #check for male and female
        gender = ''
        if info['male'] == True and info['female'] == False:
            gender = 'male only'
        elif info['male'] == False and info['female'] == True:
            gender = 'female only'
        else: gender = 'both'

        #send the emaul
        toaddr = ['ethan@fandemic.co', 'brandon@fandemic.co']
        fromaddr = 'fandemicstore@gmail.com'

        msg = MIMEMultipart()
        msg['From'] = fromaddr
        msg['To'] = ", ".join(toaddr)
        msg['Subject'] = "Stocking Order - " +  info['star']
        html = """
                <html>
                  <head></head>
                  <body>
                    <div>
                        <h2>Congrats, Fandemic received a stocking order!</h2>
                        <h3>Star Info</h3>
                        Name: """ +  info['star_id'] + """<br>
                        Star ID: """ + info['star_id'] + """<br>
                        Email: """ + order['email'] + """<br>
                        <hr>
                        <h3>Order Details</h3>
                        Item - Box <br>
                        Quantity - """ + info['quantity'] + """<br>
                        Box Items - """ + ', '.join(info['items']) + """<br>
                        Gender - """ + gender + """<br>
                        Charge ID - """ + charge['id'] + """
                    </div>
                  </body>
                </html>
                """
        msg.attach(MIMEText(html, 'html'))

        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(fromaddr, "Fandemic123")
        text = msg.as_string()
        server.sendmail(fromaddr, toaddr, text)
        server.quit()

    return '';

#================ACTIVATE_STORE_MODAL==================
@app.route('/activateStore', methods=['GET', 'POST'])
def activate():
    firstname = request.form['firstname']
    email = request.form['email']
    phone = request.form['phone']
    youtube = request.form['youtube']
    instagram = request.form['instagram']
    facebook = request.form['facebook']
    current_ip = request.environ['REMOTE_ADDR']

    toaddr = ['ethan@fandemic.co', 'brandon@fandemic.co']
    fromaddr = 'fandemicstore@gmail.com'

    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = ", ".join(toaddr)
    msg['Subject'] = "New Store Activation Request"
    html = """
            <html>
              <head></head>
              <body>
                <p>
                    Firstname: """ + firstname + """<br>
                    Email: """ + email + """<br>
                    Phone: """ + phone + """<br>
                    Youtube: """ + youtube + """<br>
                    Instagram: """ + instagram + """<br>
                    Facebook: """ + facebook + """<br>
                    IP Address: """ + current_ip + """
                </p>
              </body>
            </html>
            """
    msg.attach(MIMEText(html, 'html'))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(fromaddr, "Fandemic123")
    text = msg.as_string()
    server.sendmail(fromaddr, toaddr, text)
    server.quit()

    return ''
#----------------------------------------------

#================CONTACT_FORM_MODAL==================
@app.route('/supportContactForm', methods=['GET', 'POST'])
def support():
    firstname = request.form['name']
    email = request.form['email']
    message = request.form['message']
    current_ip = request.environ['REMOTE_ADDR']

    toaddr = ['ethan@fandemic.co', 'brandon@fandemic.co']
    fromaddr = 'fandemicstore@gmail.com'

    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = ", ".join(toaddr)
    msg['Subject'] = "Support Email"
    html = """
         <html>
           <head></head>
           <body>
             <p>
                 Firstname: """ + firstname + """<br>
                 Email: """ + email + """<br>
                 Message: """ + message + """<br>
                 IP Address: """ + current_ip + """
             </p>
           </body>
         </html>
         """
    msg.attach(MIMEText(html, 'html'))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(fromaddr, "Fandemic123")
    text = msg.as_string()
    server.sendmail(fromaddr, toaddr, text)
    server.quit()

    return ''
#----------------------------------------------

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)
