import slackweb
import time

class Slack:

    def __init__(self):
        self.slack = slackweb.Slack(url="https://hooks.slack.com/services/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")

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
             "actions": [
                {
                    "name": "status",
                    "text": "Order Shipped",
                    "style": "success",
                    "type": "button",
                    "value": "true",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "Are you sure this item has been shipped?",
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ],
            "mrkdwn": True,
            "mrkdwn_in": ["text", "pretext"],
            "ts": int(time.time())
        }
        attachments.append(attachment)

        self.slack.notify(attachments=attachments)
