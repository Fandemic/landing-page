import urllib2
import json
import time
from pymongo import MongoClient, GEO2D
from mailer import Mailer
from shipping import Shipping
from slack import Slack


class Partner:

    def __init__(self,config):
        self.db = config.dbConfig()


    #process the order for brands
    def process_order(self,data,braintree_result):

        shipping = Shipping()
        slack = Slack()
        customer = data['customer'];
        cart = data['cart'];

        #get the stars profit per item
        influencer_profit = self.db.stars.find_one({"id":data['star_id']})['campaigns'][0]['profit']

        #group the cart into separate brand orders
        #pull the data via profiles section
        brands = {}
        for item in cart:
            ID = str(item['company_id'])
            if ID in brands:
                brands[ID]['products'].append(item)
            else:
                brands[ID] = {}
                brands[ID]['company'] = self.db.profiles.find_one({'system':'partners','bio.company_id':ID})
                brands[ID]['products'] = []
                brands[ID]['products'].append(item)


        orders = []
        #create shipping labels
        for company_id, value in brands.iteritems():
            company = {}
            company['name'] = company_id
            company['street'] = "11823 Maren Ct."
            company['city'] = "Reisterstown"
            company['state'] = "Maryland"
            company['zip'] = "21136"
            company['country'] = "US"

            shipping_info = shipping.purchase_shipping_label(company=company,customer=customer)

            #build order and submit to the database
            order = {
            	"order_id": data['order_id'],
            	"star_id": data['star_id'],
            	"company_id": company_id,
            	"braintree_id": braintree_result.transaction.id,
            	"type": "order",
            	"customer": {
            		"name": customer['name'],
            		"email": customer['email'],
            		"addr": {
            			"street": customer['street'],
            			"city": customer['city'],
            			"state": customer['state'],
            			"zip": customer['zip'],
            			"country": customer['country']
            		}
            	},
            	"order_date": int(time.time()),
            	"expected_delivery_date": int(time.time()) + 432000,
            	"shipped": False,
            	"received": False,
            	"label_url": shipping_info['label_url'],
            	"total_price": data['total_price'],
            	"sub_price": data['total_price']
            }


            order['products'] = []
            for product in brands[company_id]['products']:

                order['products'].append({
                    "sku": "",
                    "item_num": product['item_num'],
                    "product_name": product['name'],
                    "variation": product['variation'],
                    "price": product['price'],
                    "influencer_profit": influencer_profit,
                    "qty": 1
                })

            #create orders array
            orders.append(order)

        #insert all orders at once
        self.db.orders.insert_many(orders);

        #send slack alert to Fandemic team
        slack.sendOrderConfirmation(orders,customer,data)

        #return success
        return 'success'
