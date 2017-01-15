import os, sys

import cloudinary
from cloudinary.uploader import upload
#from cloudinary.utils import cloudinary_url


class CDN:

    def __init__(self):

        cloudinary.config(
          cloud_name = 'fandemic',
          api_key = '994433149748285',
          api_secret = 'd1PkimpR_UZP5kQEKKfderGv1JA'
        )

    def uploadBox(self,tempPath,starID):
        path = 'stars' + '/' + starID + '/' + 'box'
        upload(tempPath, public_id = path, format="png")

    def uploadLogo(self,tempPath,starID):
        path = 'stars' + '/' + starID + '/' + 'logo'
        upload(tempPath, public_id = path, format="png")


#cdn = CDN()

#cdn.uploadLogo('https://i.vimeocdn.com/portrait/58832_300x300','brandonwalsh')
