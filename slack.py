import slackweb
import time

class Slack:

    def __init__(self):
        self.slack = slackweb.Slack(url="https://hooks.slack.com/services/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")

    #send a basic message
    def notify(self,text):
        slack2 = slackweb.Slack(url="https://hooks.slack.com/services/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")
        slack2.notify(text=text)

    def send(self,summary,title,text):
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

        self.slack.notify(attachments=attachments)


    def sendOrderConfirmation(self,customer,data):
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
        msg += '\n*Shipping Service:* ' + data['shipping_method']['service']
        msg += '\n*Shipping Rate:* $' + str(data['shipping_method']['rate'])
        msg += '\n*Shipping Label:* ' + data['shipping_info']['label_url']
        msg += '\n*Price:* $' + str(data['price'])
        msg += '\n*Total Price:* $' + str(data['price']+float(data['shipping_method']['rate']))

        msg += '\n*Cart:*'
        for item in data['cart']:
            msg += '\n  ' + str(item)

        self.send("order from " + data['star_id'] + "'s store","Order ID: "+data['order_id'],msg)
