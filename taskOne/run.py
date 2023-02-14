from Bank import Bank
from Account import Account
from Person import Person
from Client import Client

# run.py
def main():
    bank = Bank("Sample Bank")

    account = Account("123456", 0)
    client = Client("John Doe", 30, account)

    bank.add_client(client)

    print(bank.clients[0].name)

if __name__ == "__main__":
    main()
