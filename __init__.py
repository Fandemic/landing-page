from flask import Flask, render_template, request, jsonify, redirect
from pymongo import MongoClient, GEO2D
from collections import Counter
from jinja2 import Template
import json
import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText


app = Flask(__name__)
db = MongoClient('localhost', 27017).fandemic

#================INDEX=====================
@app.route('/')
def home():
    return render_template('index.html')
#-------------------------------------------

#=================MOCK STORES=====================
@app.route('/<star>')
def store(star):

    result = db.stars.find_one({'id':star})

    return render_template('shop.html', star = result)
#---------------------------------------------

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

    return 'sent'
#----------------------------------------------

#================STATIC_PAGES==================
@app.route('/faq')
def faq():
    return render_template('faq.html')
#----------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)
