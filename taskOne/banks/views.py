from django.shortcuts import render
from .models import Bank, Account, Person, Client

def create_bank(request):
    if request.method == "POST":
        name = request.POST.get("name")
        bank = Bank.objects.create(name=name)
        return render(request, "bank_created.html", {"bank": bank})
    return render(request, "create_bank.html")

def create_client(request):
    if request.method == "POST":
        name = request.POST.get("name")
        age = request.POST.get("age")
        account_number = request.POST.get("account_number")
        balance = request.POST.get("balance")
        account = Account.objects.create(
            account_number=account_number, balance=balance
        )
        client = Client.objects.create(name=name, age=age, account=account)
        bank_id = request.POST.get("bank_id")
        bank = Bank.objects.get(id=bank_id)
        bank.clients.add(client)
        return render(request, "client_created.html", {"client": client})
    banks = Bank.objects.all()
    return render(request, "create_client.html", {"banks": banks})

def client_list(request):
    clients = Client.objects.all()
    return render(request, "client_list.html", {"clients": clients})