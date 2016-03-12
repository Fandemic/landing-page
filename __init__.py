from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient, GEO2D
from collections import Counter
from jinja2 import Template
import json
app = Flask(__name__)
db = MongoClient('localhost', 27017).shopclock

#================INDEX=====================
@app.route('/')
def home():
    return render_template('index.html')
#-------------------------------------------

#=================OBJECTS=====================
@app.route('/<creator>')
def shop(creator):

    #doctor = db.doctors.find_one({'url':doctorsID})
    doctor = 1

    return render_template('shop.html', doctor = doctor)
#---------------------------------------------

#================STATIC_PAGES==================
@app.route('/faq')
def faq():
    return render_template('faq.html')
#----------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)
