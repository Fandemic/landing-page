# encoding=utf8


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
            msg.attach(MIMEText(html.encode('utf-8'), 'html','utf-8'))
            server = smtplib.SMTP('smtp-relay.gmail.com', 587)
            server.starttls()
            server.login(fromaddr, "fandemic123")
            text = msg.as_string()
            server.sendmail(fromaddr, toaddr, text)
            server.quit()
        except:
            pass


    def sendOrderConfirmation(self,customer,data):

        try:
            shipping_rate = data['shipping_method']['rate']
        except:
            shipping_rate = 0

        #send an email to the person who ordered
        toaddr = [customer['email']]
        subject = "Fandemic Order Confirmation - " + data['star_id']
        html =  """
                Hey """+ customer['name'] +""",<br><br>
                Your order has been processed successfully!<br><br>
                <h3>Order Details</h3>
                <p>Total Price: $"""+ str(data['total_price']+float(shipping_rate)) +"""($"""+ str(data['total_price']) +""" sub-total + $"""+ str(shipping_rate) +""" shipping)</p>
                <p>Order ID: """+ data['order_id'] +"""</p>
                <p>Star ID: """+ data['star_id'] +"""</p>
                <hr>
                <h3>Your Shipping Information</h3>
                <p>"""+ customer['name'] +"""</p>
                <p>"""+ customer['street'] +"""</p>
                <p>"""+ customer['city'] +""" """+ customer['state'] +""", """+ customer['zip'] +"""</p>
                <p>United States</p>
                """
        self.send(toaddr,subject,html)


    def sendCoinEmail(self,email,coin_id):
        #send an email to the person who ordered
        toaddr = [email]
        subject = "You have been gifted a Fandemic Coin!"
        html =  """
                <div style="text-align:center;font-family: 'MS Serif', 'New York', sans-serif;font-weight:600;">
                    <p style="color:#000;">Our #1 goal is to make our influencers happy and help spread the love.
                       This coin will get you started on your Fandemic journey. Use it to get a free product on any Fandemic store, including your own!
                    </p>
                    <br><br>
                    <img width="60px" src="https://fandemic.co/static/img/builder/coin.png">
                    <br>

                    <div style="background-color:#e8e8e8;padding:15px 30px;border-radius:20px;font-size:20px;width:250px;margin: 0 auto;"><strong>"""+coin_id+"""</strong></div>

                    <br><br>

                    <p style="font-size:10px;color:#9d9d9d;">This coin code can only be used once. If you review a product using your Fandemic account you can get another coin
                                                             sent to your email!
                    </p>
                </div>
                """
        self.send(toaddr,subject,html)


    def sendStoreConfirmation(self,info,profile_img):
        #send an email to the person who ordered
        toaddr = [info['star']['email']]
        subject = "Store Created Confirmation: " + info['star']['id']
        html =  """
                <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--[if IE]><html xmlns="http://www.w3.org/1999/xhtml" class="ie-browser" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><![endif]--><!--[if !IE]><!--><html style="margin: 0;padding: 0;" xmlns="http://www.w3.org/1999/xhtml"><!--<![endif]--><head>
                    <!--[if gte mso 9]><xml>
                     <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                     </o:OfficeDocumentSettings>
                    </xml><![endif]-->
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <meta name="viewport" content="width=device-width">
                    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
                    <title>Template Base</title>


                    <style type="text/css" id="media-query">
                      body {
                  margin: 0;
                  padding: 0; }

                table, tr, td {
                  vertical-align: top;
                  border-collapse: collapse; }

                .ie-browser table, .mso-container table {
                  table-layout: fixed; }

                * {
                  line-height: inherit; }

                a[x-apple-data-detectors=true] {
                  color: inherit !important;
                  text-decoration: none !important; }

                [owa] .img-container div, [owa] .img-container button {
                  display: block !important; }

                [owa] .fullwidth button {
                  width: 100% !important; }

                .ie-browser .col, [owa] .block-grid .col {
                  display: table-cell;
                  float: none !important;
                  vertical-align: top; }

                .ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {
                  width: 500px !important; }

                .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
                  line-height: 100%; }

                .ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {
                  width: 164px !important; }

                .ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {
                  width: 328px !important; }

                .ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {
                  width: 250px !important; }

                .ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {
                  width: 166px !important; }

                .ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {
                  width: 125px !important; }

                .ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {
                  width: 100px !important; }

                .ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {
                  width: 83px !important; }

                .ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {
                  width: 71px !important; }

                .ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {
                  width: 62px !important; }

                .ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {
                  width: 55px !important; }

                .ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {
                  width: 50px !important; }

                .ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {
                  width: 45px !important; }

                .ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {
                  width: 41px !important; }

                @media only screen and (min-width: 520px) {
                  .block-grid {
                    width: 500px !important; }
                  .block-grid .col {
                    display: table-cell;
                    Float: none !important;
                    vertical-align: top; }
                    .block-grid .col.num12 {
                      width: 500px !important; }
                  .block-grid.mixed-two-up .col.num4 {
                    width: 164px !important; }
                  .block-grid.mixed-two-up .col.num8 {
                    width: 328px !important; }
                  .block-grid.two-up .col {
                    width: 250px !important; }
                  .block-grid.three-up .col {
                    width: 166px !important; }
                  .block-grid.four-up .col {
                    width: 125px !important; }
                  .block-grid.five-up .col {
                    width: 100px !important; }
                  .block-grid.six-up .col {
                    width: 83px !important; }
                  .block-grid.seven-up .col {
                    width: 71px !important; }
                  .block-grid.eight-up .col {
                    width: 62px !important; }
                  .block-grid.nine-up .col {
                    width: 55px !important; }
                  .block-grid.ten-up .col {
                    width: 50px !important; }
                  .block-grid.eleven-up .col {
                    width: 45px !important; }
                  .block-grid.twelve-up .col {
                    width: 41px !important; } }

                @media (max-width: 520px) {
                  .block-grid, .col {
                    min-width: 320px !important;
                    max-width: 100% !important; }
                  .block-grid {
                    width: calc(100% - 40px) !important; }
                  .col {
                    width: 100% !important; }
                    .col > div {
                      margin: 0 auto; }
                  img.fullwidth {
                    max-width: 100% !important; } }

                    </style>
                </head>
                <!--[if mso]>
                <body class="mso-container" style="background-color:#FFFFFF;">
                <![endif]-->
                <!--[if !mso]><!-->
                <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF">
                <!--<![endif]-->
                  <div class="nl-container" style="min-width: 320px;Margin: 0 auto;background-color: #FFFFFF">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]-->

                    <div style="background-color:transparent;">
                      <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;width: 500px;width: calc(19000% - 98300px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                        <div style="border-collapse: collapse;display: table;width: 100%;">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                              <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 1px solid #6E6F7A; border-right: 0px solid transparent;" valign="top"><![endif]-->
                            <div class="col num12" style="min-width: 320px;max-width: 500px;width: 500px;width: calc(18000% - 89500px);background-color: transparent;">
                              <div style="background-color: transparent; width: 100% !important;">
                              <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 1px solid #6E6F7A; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->


                                    <div style="font-size: 16px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; text-align: center;"><img width="160px" src="https://fandemic.co/static/img/fandemic_logo_pink.png"></div>



                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 20px;"><![endif]-->
            <div style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 20px;">
            	<div style="font-size:12px;line-height:18px;font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;color:#6E6F7A;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 18px;text-align: center"><span style="font-size: 14px; line-height: 21px;"><em><span style="color: rgb(128, 128, 128); line-height: 21px; font-size: 14px;">Review &amp; Sell Products You Love</span></em></span></p></div>
            </div>
            <!--[if mso]></td></tr></table><![endif]-->


                          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                          </div>
                        </div>
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>    <div style="background-color:transparent;">
                  <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;width: 500px;width: calc(19000% - 98300px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid two-up">
                    <div style="border-collapse: collapse;display: table;width: 100%;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                          <!--[if (mso)|(IE)]><td align="center" width="250" style=" width:250px; padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num6" style="Float: left;max-width: 320px;min-width: 250px;width: 250px;width: calc(35250px - 7000%);background-color: transparent;">
                          <div style="background-color: transparent; width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->


                                <div align="center" class="img-container center fullwidth" style="padding-right: 0px;  padding-left: 0px;">
            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
              <img class="center fullwidth" align="center" border="0" src=" """+profile_img+""" " alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;float: none;width: 100%;max-width: 250px;width: 140px;border-radius: 50%;" width="250">
            <!--[if mso]></td></tr></table><![endif]-->
            </div>


                          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                          </div>
                        </div>
                          <!--[if (mso)|(IE)]></td><td align="center" width="250" style=" width:250px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num6" style="Float: left;max-width: 320px;min-width: 250px;width: 250px;width: calc(35250px - 7000%);background-color: transparent;">
                          <div style="background-color: transparent; width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->


                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 30px; padding-bottom: 10px;"><![endif]-->
            <div style="padding-right: 0px; padding-left: 0px; padding-top: 30px; padding-bottom: 10px;">
            	<div style="font-size:12px;line-height:14px;font-family:&quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, &quot;Lucida Sans&quot;, Geneva, Verdana, sans-serif;text-align:center;color:#555555;"><span style="font-size:22px; line-height:26px;">Hi, """+info['star']['name']+"""!&nbsp;</span><br></div>
            </div>
            <!--[if mso]></td></tr></table><![endif]-->



                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
            <div style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
            	<div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px;text-align: center"><span style="font-size: 13px; line-height: 14px;">Checkout your fresh new beauty store</span></p></div>
            </div>
            <!--[if mso]></td></tr></table><![endif]-->




            <div align="center" class="button-container center" style="Margin-right: 10px;Margin-left: 10px;">
                <div style="line-height:25px;font-size:1px">&nbsp;</div>
              <a href="https://fandemic.co/"""+info['star']['id']+"""" target="_blank" style="color: #ffffff; text-decoration: none;">
                <!--[if mso]>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:42px; v-text-anchor:middle; width:176px;" arcsize="5%" strokecolor="#E72D9E" fillcolor="#E72D9E" >
                  <w:anchorlock/><center style="color:#ffffff; font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size:16px;">
                <![endif]-->
                <!--[if !mso]><!-->
                <div style="color: #ffffff; background-color: #E72D9E; border-radius: 2px; -webkit-border-radius: 2px; -moz-border-radius: 2px; max-width: 156px; width: 65%; border-top: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-left: 0px solid transparent; padding-top: 5px; padding-right: 20px; padding-bottom: 5px; padding-left: 20px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; text-align: center;">
                <!--<![endif]-->
                  <span style="font-size:16px;line-height:32px;"><span style="font-size: 14px; line-height: 28px;" data-mce-style="font-size: 14px; line-height: 24px;"><strong><span style="line-height: 28px; font-size: 14px;" data-mce-style="line-height: 24px;">View My Store</span></strong></span></span>
                <!--[if !mso]><!-->
                </div>
            	<br>
                <!--<![endif]-->
                <!--[if mso]>
                      </center>
                  </v:roundrect>
                <![endif]-->
              </a>
                <div style="line-height:10px;font-size:1px">&nbsp;</div>
            </div>


                          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                          </div>
                        </div>
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>    <div style="background-color:#61626F;">
                  <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;width: 500px;width: calc(19000% - 98300px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#61626F;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                          <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 500px;width: 500px;width: calc(18000% - 89500px);background-color: transparent;">
                          <div style="background-color: transparent; width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->


                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 25px; padding-bottom: 10px;"><![endif]-->
            <div style="padding-right: 10px; padding-left: 10px; padding-top: 25px; padding-bottom: 10px;">
            	<div style="font-size:12px;line-height:14px;font-family:&quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, &quot;Lucida Sans&quot;, Geneva, Verdana, sans-serif;color:#ffffff;text-align:left;"><p style="margin: 0;font-size: 18px;line-height: 22px;text-align: center"><span style="font-size: 20px; line-height: 28px;">Claim Your First <strong>Free Product</strong>!</span></p></div>
            </div>
            <!--[if mso]></td></tr></table><![endif]-->



                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px;"><![endif]-->
            <div style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px;">
            	<div style="font-size:12px;line-height:18px;color:#B8B8C0;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">Use your <strong>instagram handle</strong> and <strong>password</strong> to log in. After logging in, <span style="font-size: 14px; line-height: 21px;">follow the steps to claim your first free product.</span></p></div>
            </div>
            <!--[if mso]></td></tr></table><![endif]-->




            <div align="center" class="button-container center" style="Margin-right: 10px;Margin-left: 10px;">
                <div style="line-height:15px;font-size:1px">&nbsp;</div>
              <a href="https://admin.fandemic.co/?username="""+info['star']['id']+"""" target="_blank" style="color: #ffffff; text-decoration: none;">
                <!--[if mso]>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:42px; v-text-anchor:middle; width:194px;" arcsize="5%" strokecolor="#E72D9E" fillcolor="#E72D9E" >
                  <w:anchorlock/><center style="color:#ffffff; font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size:16px;">
                <![endif]-->
                <!--[if !mso]><!-->
                <div style="color: #ffffff; background-color: #E72D9E; border-radius: 2px; -webkit-border-radius: 2px; -moz-border-radius: 2px; max-width: 174px; width: 35%; border-top: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-left: 0px solid transparent; padding-top: 5px; padding-right: 20px; padding-bottom: 5px; padding-left: 20px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; text-align: center;">
                <!--<![endif]-->
                  <span style="font-size:16px;line-height:32px;"><strong><span style="font-size: 14px; line-height: 28px;" data-mce-style="font-size: 14px; line-height: 28px;">Login</span></strong></span>
                <!--[if !mso]><!-->
                </div>
                <!--<![endif]-->
                <!--[if mso]>
                      </center>
                  </v:roundrect>
                <![endif]-->
              </a>
                <div style="line-height:10px;font-size:1px">&nbsp;</div>
            </div>



                                <div style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
              <!--[if (mso)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px;padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
              <div align="center"><div style="border-top: 0px solid transparent; width:100%;">&nbsp;</div></div>
              <!--[if (mso)]></td></tr></table></td></tr></table><![endif]-->
            </div>


                          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                          </div>
                        </div>
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>    <div style="background-color:#ffffff;">
                  <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;width: 500px;width: calc(19000% - 98300px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                          <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 500px;width: 500px;width: calc(18000% - 89500px);background-color: transparent;">
                          <div style="background-color: transparent; width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->



            <div align="center" style="Margin-right: 10px; Margin-left: 10px; Margin-bottom: 10px;">
              <div style="line-height:10px;font-size:1px">&nbsp;</div>
              <div style="display: table; max-width:168px;">
              <!--[if (mso)|(IE)]><table width="168" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:168px;"><tr><td width="37" style="width:37px;" valign="top"><![endif]-->
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
                  <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <a href="https://twitter.com/The_Fandemic" title="Twitter" target="_blank">
                      <img src="https://fandemic.co/static/img/emails/twitter.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                    </a>
                  <div style="line-height:5px;font-size:1px">&nbsp;</div>
                  </td></tr>
                </tbody></table>
                  <!--[if (mso)|(IE)]></td><td width="37" style="width:37px;" valign="top"><![endif]-->
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
                  <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <a href="https://instagram.com/Fandemic" title="Instagram" target="_blank">
                      <img src="https://fandemic.co/static/img/emails/instagram@2x.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                    </a>
                  <div style="line-height:5px;font-size:1px">&nbsp;</div>
                  </td></tr>
                </tbody></table>
                  <!--[if (mso)|(IE)]></td><td width="37" style="width:37px;" valign="top"><![endif]-->
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
                  <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <a href="https://www.linkedin.com/company/10566554" title="LinkedIn" target="_blank">
                      <img src="https://fandemic.co/static/img/emails/linkedin@2x.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                    </a>
                  <div style="line-height:5px;font-size:1px">&nbsp;</div>
                  </td></tr>
                </tbody></table>
                  <!--[if (mso)|(IE)]></td><td width="37" style="width:37px;" valign="top"><![endif]-->
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 0">
                  <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <a href="https://www.facebook.com/thefandemic/" title="Facebook" target="_blank">
                      <img src="https://fandemic.co/static/img/emails/facebook.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                    </a>
                  <div style="line-height:5px;font-size:1px">&nbsp;</div>
                  </td></tr>
                </tbody></table>
                <!--[if (mso)|(IE)]></td></tr></table><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td>&nbsp;</td></tr></table><![endif]-->
              </div>
            </div>



                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 15px; padding-bottom: 10px;"><![endif]-->
            <div style="padding-right: 10px; padding-left: 10px; padding-top: 15px; padding-bottom: 10px;">
            	<div style="font-size:12px;line-height:18px;color:#959595;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center"><a style="color:#E72D9E;text-decoration: underline;" href="https://fandemic.co/faq" target="_blank" rel="noopener noreferrer">How It Works</a> | <a style="color:#E72D9E;text-decoration: underline;" href="https://fandemic.co/influencers" target="_blank" rel="noopener noreferrer">Influencers</a> | <a style="color:#E72D9E;text-decoration: underline;" href="https://fandemic.co/brands" target="_blank" rel="noopener noreferrer">Brands</a><br></p><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">© 2017 Fandemic Inc.</p></div>
            </div>
            <!--[if mso]></td></tr></table><![endif]-->


                          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                          </div>
                        </div>
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>   <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </div>
            </body></html>
            """
        self.send(toaddr,subject,html)
