import urllib2
import json


class Star:

    def __init__(self,config):
        self.db = config.dbConfig()


    #send a basic message
    def getInstagramImageFromUsername(self,username):

        response = urllib2.urlopen('https://www.instagram.com/'+username+'/?__a=1')
        data = json.load(response)
        return data['user']['profile_pic_url_hd']


    def instagramUsernameExists(self,username):

        try:
            resp = urllib2.urlopen('https://www.instagram.com/'+username+'/?__a=1')
        except urllib2.HTTPError as e:
            if e.code == 404:
                return False
            else:
                return False
        except urllib2.URLError as e:
            # Not an HTTP-specific error (e.g. connection refused)
            return False
        else:
            # 200
            return True


    #return a useable store ID
    def getID(self,instagram):

        #check if the name exists
        exist = True
        ID = instagram
        c = 1
        while exist:
            if (self.db.stars.find({'id':ID}).count() <= 0):
                exist = False
            else:
                ID = instagram + str(c)
                c = c + 1
        return ID


    #create a profile for the star
    def createProfile(self,info):
        profile = {}
        profile['username'] = info['star']['id']
        profile['password'] = info['star']['password']
        profile['system'] = 'influencers'
        profile['bio'] = {}
        profile['bio']['star_id'] = info['star']['id']
        profile['bio']['star_name'] = info['star']['name']
        profile['bio']['contact_name'] = ''
        profile['bio']['website'] = ''
        profile['bio']['logo_url'] = ''
        profile['bio']['email'] = info['star']['email']
        profile['bio']['phone'] = ''
        profile['bio']['short_story'] = ''
        profile['bio']['address'] = {}
        profile['bio']['address']['street'] = ''
        profile['bio']['address']['city'] = ''
        profile['bio']['address']['state'] = ''
        profile['bio']['address']['zip'] = ''
        profile['bio']['address']['country'] = 'US'
        self.db.profiles.insert_one(profile)


    #creates a store for a star given the proper info variable
    def createStore(self,info):
        #Get img url from instagram
        profile_img_url = self.getInstagramImageFromUsername(info['star']['instagram'])
        star = {}
        star['id'] = info['star']['id']
        star['name'] = info['star']['name']
        star['email'] = [info['star']['email']]
        star['password'] = info['star']['password']
        star['img'] = {}
        star['img']['profile'] = profile_img_url
        star['url'] = {}
        star['url']['instagram'] = 'https://instagram.com/'+info['social_media']['instagram']
        star['url']['twitter'] = 'https://twitter.com/'+info['social_media']['twitter']
        star['url']['facebook'] = info['social_media']['facebook']
        star['url']['youtube'] = info['social_media']['youtube']
        star['campaigns'] = [{}]
        star['campaigns'][0]['id'] = info['box_name'].replace(' ', '-').lower()
        star['campaigns'][0]['end_time'] = 1477267200
        star['campaigns'][0]['profit'] = info['profit']
        star['campaigns'][0]['charity'] = info['charity']
        star['campaigns'][0]['products'] = info['products']
        self.db.stars.insert_one(star)

    #this is for partners
    def checkIDExists(self,key,id):
        if (self.db.profiles.find({key:id}).count() == 0):
            return False
        else:
            return True
