# Bank.py
class Bank:
    def __init__(self, name):
        self.name = name
        self.clients = []

    def add_client(self, client):
        self.clients.append(client)