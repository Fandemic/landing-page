from pymongo import MongoClient, GEO2D
import braintree
import socket
#get server name
server = socket.gethostname()

if server == 'livloo':
    MODE = 'live'
else:
    MODE = 'test'

class Config:

    def __init__(self):
        pass

    def dbConfig(self):

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

        return db

    def notifConfig(self):

        if MODE == 'test':
            return False

        if MODE == 'live':
            return True

    def configMode(self):
        if MODE == 'test':
            return 'test'

        if MODE == 'live':
            return 'live'
