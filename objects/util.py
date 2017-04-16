import requests
import json
import ast

class Util:
    def __init__(self):
        pass

    def getPromotionalUrl(self,id):
        key = 'AIzaSyC7r3ZpFHorEQ0--aXoHy9boAsonzkkXxw'
        post_url = 'https://www.googleapis.com/urlshortener/v1/url?key='+key

        payload = {'longUrl': 'https://fandemic.co/'+id}
        headers = {'content-type': 'application/json'}
        
        r = requests.post(post_url, data=json.dumps(payload), headers=headers)
        response = ast.literal_eval(r.text)
        return response
