import slackweb
import time

class Slack:

    def __init__(self):
        self.slack = slackweb.Slack(url="https://hooks.slack.com/services/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")
        self.slack_partners = slackweb.Slack(url="https://hooks.slack.com/services/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")
        self.slack_orders = slackweb.Slack(url="https://hooks.slack.com/services/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")
        self.slack_stores = slackweb.Slack(url="https://hooks.slack.com/services/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")

    #send a basic message
    def notify(self,text,channel=''):
        slack2 = slackweb.Slack(url="https://hooks.slack.com/services/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")

        if channel == 'partners':
            self.slack_partners.notify(text=text)
        elif channel == 'orders':
            self.slack_orders.notify(text=text)
        elif channel == 'stores':
            self.slack_stores.notify(text=text)
        else:
            slack2.notify(text=text)


    def send(self,summary,title,text,channel=''):
        attachments = []
        attachment = {
            "fallback": summary,
            #"color": "#4E9CD4",
            #"author_name": "Bobby Tables",
            #"author_link": "http://flickr.com/bobby/",
            #"author_icon": "https://fandemic.co/#home",
            "title": title,
            "title_link": "https://fandemic.co/sale",
            "text": text,
            #"fields": [
            #    {
            #        "title": "Priority",
            #        "value": "High",
            #        "short": False
            #    }
            #],
            #"image_url": "http://my-website.com/path/to/image.jpg",
            #"thumb_url": "http://example.com/path/to/thumb.png",
            "footer": "Box Sale",
            "footer_icon": "https://fandemic.co",
            "mrkdwn": True,
            "mrkdwn_in": ["text", "pretext"],
            "ts": int(time.time())
        }
        attachments.append(attachment)

        if channel == 'partners':
            self.slack_partners.notify(attachments=attachments)
        elif channel == 'orders':
            self.slack_orders.notify(attachments=attachments)
        elif channel == 'stores':
            self.slack_stores.notify(attachments=attachments)
        else:
            self.slack.notify(attachments=attachments)


    def sendStoreCreatedAlert(self,info):
        string = ''
        string += 'Store URL: ' + 'https://fandemic.co/' + info['star']['id'] + '\n'
        string += 'Confirmation Code: ' + info['confirmation_code'] + '\n'
        string += '\nSTAR\n'
        string += 'Name: ' + info['star']['name'] + '\n'
        string += 'ID: ' + info['star']['id'] + '\n'
        string += 'Email: ' + info['star']['email'] + '\n'
        string += 'Profit: ' + str(info['profit']) + '\n'
        string += 'Charity: ' + str(info['charity']) + '\n'
        string += '\nPRODUCTS\n'
        for p in info['products']:
            string += str(p['item_num']) + ' | ' + p['name'] + ' | ' + str(p['price'])
            if 'variation' in p:
                string += ' | ' + p['variation']
            string += '\n'

        self.notify(string,channel='stores')


    def sendPartnerSignupAlert(self,partner):
        msg = '*Company Name:* ' + partner['bio']['company_name']
        msg += '\n *Company Website:* ' + partner['bio']['website']
        msg += '\n *Company ID:* ' + partner['bio']['company_id']
        msg += '\n *Username:* ' + partner['username']
        msg += '\n *Email:* ' + partner['bio']['email']
        self.notify(msg,channel='partners')


    def sendOrderConfirmation(self,orders,customer,data):
        #slack notification of transaction
        msg= ''
        msg += '\n*order ID:* ' + data['order_id']
        msg += '\n*star ID:* ' + data['star_id']
        msg += '\n*name:* ' + customer['name']
        msg += '\n*email:* ' + customer['email']
        msg += '\n*street:* ' + customer['street']
        msg += '\n*city:* ' + customer['city']
        msg += '\n*state:* ' + customer['state']
        msg += '\n*zip:* ' + customer['zip']
        msg += '\n*country:* ' + customer['country']

        try:
            msg += '\n*Shipping Service:* ' + data['shipping_method']['service']
            msg += '\n*Shipping Rate:* $' + str(data['shipping_method']['rate'])
        except:
            msg += '\n*Shipping Service: FREE SHIPPING*'


        #msg += '\n*Shipping Label:* ' + data['shipping_info']['label_url']
        msg += '\n*Price:* $' + str(data['total_price'])

        try:
            msg += '\n*Total Price:* $' + str(data['total_price']+float(data['shipping_method']['rate']))
        except:
            msg += '\n*Total Price:* $' + str(data['total_price'])

        msg += '\n*Cart:*'
        for order in orders:
            msg += '\n*Company ID:* ' + order['company_id']
            msg += '\n*Shipping Label:* ' + order['label_url']
            msg += '\n*Tracker URL:* ' + order['tracker_url']
            msg += '\n*Tracking Code:* ' + order['tracking_code']
            for product in order['products']:
                msg += '\n*Product Details:*' + str(product)

            msg += '\n-----------------'


        self.send("order from " + data['star_id'] + "'s store","Order ID: "+data['order_id'],msg,channel='orders')
