import requests


class Trello:

    def __init__(self):

        self.key = 'd4d88f7ac9133a1edaa241828d3d007f'
        self.token = '7f185024f8c7e72506877a3594a8e4e7e7112d651a1f0c85a7bea1667ed9455c'

    #add a campaign requested card
    def addCard_CR(self,name,desc):

        data={
            'key':self.key,
            'token':self.token,
            'idList':'57fd0f97b6b029c90070893b',
            'name':name,
            'desc':desc,
            'due':'null'
        }

        r= requests.post("https://api.trello.com/1/cards",data)
        print(r.status_code, r.reason)
