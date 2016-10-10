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


if debug == True:

    subj = 'This is a test'
    html = """
            <html>
              <head></head>
              <body>
                <div>
                    this is the second part of the thread
                </div>
              </body>
            </html>
            """
    inbox = Inbox()
    inbox.send(['brandon@fandemic.co'],subj,inbox.poll()[0])
