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

    def sendActivateStoreEmail(self,toaddr,ID,name):

        html = """
                <!-- saved from url=(0181)https://download.wunderlist.io/06af32c0-76b1-0134-9ad0-22000a5991b9-1476720148-238847?AWSAccessKeyId=AKIAJEN6W4AO3LJODOAA&Expires=1479398549&Signature=XmvP7l0NiMFcS1IRFtdnCI7LG48%3D -->
                <html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                	 <!-- utf-8 works for most cases -->
                	<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                	<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                	<title>Your 7 Day Campaign is Live!</title> <!-- The title tag shows in email notifications, like Android 4.4. -->

                	<!-- Web Font / @font-face : BEGIN -->
                	<!-- NOTE: If web fonts are not required, lines 9 - 26 can be safely removed. -->

                	<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
                	<!--[if mso]>
                		<style>
                			* {
                				font-family: sans-serif !important;
                			}
                		</style>
                	<![endif]-->

                	<!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
                	<!--[if !mso]><!-->
                		<!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->
                	<!--<![endif]-->

                	<!-- Web Font / @font-face : END -->

                	<!-- CSS Reset -->
                    <style>

                		/* What it does: Remove spaces around the email design added by some email clients. */
                		/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
                        html,
                        body {
                	        margin: 0 auto !important;
                            padding: 0 !important;
                            height: 100% !important;
                            width: 100% !important;
                        }

                        /* What it does: Stops email clients resizing small text. */
                        * {
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                        }

                        /* What is does: Centers email on Android 4.4 */
                        div[style*="margin: 16px 0"] {
                            margin:0 !important;
                        }

                        /* What it does: Stops Outlook from adding extra spacing to tables. */
                        table,
                        td {
                            mso-table-lspace: 0pt !important;
                            mso-table-rspace: 0pt !important;
                        }

                        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
                        table {
                            border-spacing: 0 !important;
                            border-collapse: collapse !important;
                            table-layout: fixed !important;
                            margin: 0 auto !important;
                        }
                        table table table {
                            table-layout: auto;
                        }

                        /* What it does: Uses a better rendering method when resizing images in IE. */
                        img {
                            -ms-interpolation-mode:bicubic;
                        }

                        /* What it does: A work-around for iOS meddling in triggered links. */
                        .mobile-link--footer a,
                        a[x-apple-data-detectors] {
                            color:inherit !important;
                            text-decoration: underline !important;
                        }
                				.stack-column-center{
                					vertical-align: top;
                				}

                    </style>

                    <!-- Progressive Enhancements -->
                    <style>

                        /* What it does: Hover styles for buttons */
                        .button-td,
                        .button-a {
                            transition: all 100ms ease-in;
                        }
                        .button-td:hover,
                        .button-a:hover {
                            background: #555555 !important;
                            border-color: #555555 !important;
                        }

                        /* Media Queries */
                        @media screen and (max-width: 600px) {

                            .email-container {
                                width: 100% !important;
                                margin: auto !important;
                            }

                            /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
                            .fluid {
                                max-width: 100% !important;
                                height: auto !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                            }

                            /* What it does: Forces table cells into full-width rows. */
                            .stack-column,
                            .stack-column-center {
                                display: block !important;
                                width: 100% !important;
                                max-width: 100% !important;
                                direction: ltr !important;
                            }
                            /* And center justify these ones. */
                            .stack-column-center {
                                text-align: center !important;
                            }

                            /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
                            .center-on-narrow {
                                text-align: center !important;
                                display: block !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                                float: none !important;
                            }
                            table.center-on-narrow {
                                display: inline-block !important;
                            }

                        }

                    </style>

                </head>
                <body bgcolor="#222222" width="100%" style="margin: 0;">
                    <center style="width: 100%; background: #222222;">

                        <!-- Visually Hidden Preheader Text : BEGIN -->
                        <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: sans-serif;">
                            Your 7 day beauty box campaign is ready!
                        </div>
                        <!-- Visually Hidden Preheader Text : END -->

                        <!-- Email Header : BEGIN -->

                        <!-- Email Header : END -->

                        <!-- Email Body : BEGIN -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="margin: auto;" class="email-container">

                            <!-- Hero Image, Flush : BEGIN -->
                            <tbody><tr>
                				<td bgcolor="#ffffff">
                					<img src="https://fandemic.co/static/img/live/""" + ID + """/box.png" alt="alt_text" border="0" align="center" class="fluid" style="margin-left:25%;width: 20em; max-width: 600px; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;">
                				</td>
                            </tr>
                            <!-- Hero Image, Flush : END -->

                            <!-- 1 Column Text : BEGIN -->
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px; text-align: center; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;">
                									<h1>Congratulations<h1><h2>""" + name + """</h2> <br>Your Beauty Store is ready to promote! You have 7 days to sell as many boxes as possible. Remember, you must sell at least 10 for the campaign to be successful. Below you will find some tips that other stars have found useful while promoting their campaign!
                								<br><br>

                                </td>
                            </tr>
                            <!-- 1 Column Text : BEGIN -->

                            <!-- Background Image with Text : BEGIN -->
                            <tr>
                                <!-- Bulletproof Background Images c/o https://backgrounds.cm -->
                                <td background="https://fandemic.co/static/img/social_media/666666" bgcolor="#222222" valign="middle" style="text-align: center; background-position: center center !important; background-size: cover !important;">

                                    <!--[if gte mso 9]>
                                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:175px; background-position: center center !important;">
                                    <v:fill type="tile" src="http://placehold.it/600x230/222222/666666" color="#222222" />
                                    <v:textbox inset="0,0,0,0">
                                    <![endif]-->
                                    <div>

                                        </div>
                                    <!--[if gte mso 9]>
                                    </v:textbox>
                                    </v:rect>
                                    <![endif]-->
                                </td>
                            </tr>
                            <!-- Background Image with Text : END -->

                            <!-- 2 Even Columns : BEGIN -->
                            <tr>

                            </tr>
                            <!-- 2 Even Columns : END -->

                            <!-- 3 Even Columns : BEGIN -->
                            <tr>
                                <td bgcolor="#ffffff" align="center" valign="top" style="padding: 10px;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tbody><tr>
                                            <!-- Column : BEGIN -->
                                            <td width="25%" class="stack-column-center">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody><tr>
                                                        <td style="padding: 10px; text-align: center">

                                                                <img src="https://fandemic.co/static/img/social_media/facebook.png" width="80" height="80" alt="alt_text" border="0" class="fluid" style="margin-left:-20%;background: #dddddd; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                                            <strong>Post with a picture</strong> of the beauty box and a link to the store! Stay engaged in the thread and answer all questions your fans have!
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                														<td width="25%" class="stack-column-center">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody><tr>
                                                        <td style="padding: 10px; text-align: center">

                                                                <img src="https://fandemic.co/static/img/social_media/twitter.png" width="80" height="80" alt="alt_text" border="0" class="fluid" style="margin-left:-20%;background: #dddddd; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                                            <strong>Post a link</strong> to the store, with a call to action such as "Only 3 days left to buy my beauty box!". Also, encourage retweets by telling your fans that the more people that buy it the more campaigns in the future!
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                            <!-- Column : END -->
                                            <!-- Column : BEGIN -->
                                            <td width="25%" class="stack-column-center">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody><tr>
                                                        <td style="padding: 10px; text-align: center">

                                                                <img src="https://fandemic.co/static/img/social_media/instagram.png" width="80" height="80" alt="alt_text" border="0" class="fluid" style="margin-left:-20%;background: #dddddd; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                                            Post a picture or short video of the box with some relevant hashtags!
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                            <!-- Column : END -->
                                            <!-- Column : BEGIN -->
                                            <td width="25%" class="stack-column-center">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody><tr>
                                                        <td style="padding: 10px; text-align: center">

                                                                <img src="https://fandemic.co/static/img/social_media/youtube.png" width="80" height="80" alt="alt_text" border="0" class="fluid" style="margin-left:-20%;background: #dddddd; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                																					An honest video review would be most suitable for YouTube, you are the star here you know best!
                																				</td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                            <!-- Column : END -->
                                        </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                            <!-- 3 Even Columns : END -->

                            <!-- Thumbnail Left, Text Right : BEGIN -->
                            <tr>

                            </tr>
                            <!-- Thumbnail Left, Text Right : END -->

                            <!-- Thumbnail Right, Text Left : BEGIN -->

                            <!-- Thumbnail Right, Text Left : END -->

                            <!-- Clear Spacer : BEGIN -->
                            <tr>
                                <td height="40" style="font-size: 0; line-height: 0;">
                                    &nbsp;
                                </td>
                            </tr>
                            <!-- Clear Spacer : END -->

                            <!-- 1 Column Text + Button : BEGIN -->

                            <!-- 1 Column Text + Button : BEGIN -->

                        </tbody></table>
                        <!-- Email Body : END -->

                        <!-- Email Footer : BEGIN -->

                        <!-- Email Footer : END -->

                    </center>
                <script type="text/javascript">( function(){ window.SIG_EXT = {}; } )()</script></body></html>
                """


        try:
            fromaddr = 'sarah@fandemic.co'
            msg = MIMEMultipart()
            msg['From'] = fromaddr
            msg['To'] = ", ".join(toaddr)
            msg['Subject'] = "Your 7 Day Campaign is Ready"
            msg.attach(MIMEText(html, 'html'))
            server = smtplib.SMTP('smtp-relay.gmail.com', 587)
            server.starttls()
            server.login(fromaddr, "fandemic123")
            text = msg.as_string()
            server.sendmail(fromaddr, toaddr, text)
            server.quit()
        except UnicodeEncodeError:
            pass
