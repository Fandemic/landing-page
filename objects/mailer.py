import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

debug = False

class Mailer:

    def send(self,toaddr,subj,html):

        try:
            fromaddr = 'sarah@fandemic.co'
            msg = MIMEMultipart()
            msg['From'] = fromaddr
            msg['To'] = ", ".join(toaddr)
            msg['Subject'] = subj
            msg.attach(MIMEText(html, 'html'))
            server = smtplib.SMTP('smtp-relay.gmail.com', 587)
            server.starttls()
            server.login(fromaddr, "fandemic123")
            text = msg.as_string()
            server.sendmail(fromaddr, toaddr, text)
            server.quit()
        except UnicodeEncodeError:
            pass

    def sendStoreConfirmation(self,info):
        #send an email to the person who ordered
        toaddr = [info['star']['email']]
        subject = "Store Created Confirmation: " + info['star']['id']
        html =  """
                Hey """+ info['star']['name'] +""",<br><br>
                <p>Your store has been created successfully!
                <br>You can start selling your products right away :)<br><br>
                <p><strong>Your Store URL:</strong>
                <a href="https://fandemic.co/"""+ info['star']['id'] +"""">https://fandemic.co/"""+ info['star']['id'] +"""</a></p>
                <br><br>
                <a href="http://admin.fandemic.co">Login Here</a><br>
                Using the username: """ + info['star']['id'] + """
                """
        self.send(toaddr,subject,html)


    def sendOrderConfirmation(self,customer,data):
        #send an email to the person who ordered
        toaddr = [customer['email']]
        subject = "Fandemic Order Confirmation - " + data['star_id']
        html =  """
                Hey """+ customer['name'] +""",<br><br>
                Your order has been processed successfully!<br><br>
                <h3>Order Details</h3>
                <p>Total Price: $"""+ str(data['total_price']+float(data['shipping_method']['rate'])) +"""($"""+ str(data['total_price']) +""" sub-total + $"""+ data['shipping_method']['rate'] +""" shipping)</p>
                <p>Order ID: """+ data['order_id'] +"""</p>
                <p>Star ID: """+ data['star_id'] +"""</p>
                <hr>
                <h3>Your Shipping Information</h3>
                <p>"""+ customer['name'] +"""</p>
                <p>"""+ customer['street'] +"""</p>
                <p>"""+ customer['city'] +""" """+ customer['state'] +""", """+ customer['zip'] +"""</p>
                <p>"""+ customer['country'] +"""</p>
                """
        self.send(toaddr,subject,html)
