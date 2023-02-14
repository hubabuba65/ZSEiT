from django.db import models

class Bank(models.Model):
    name = models.CharField(max_length=100)
    clients = models.ManyToManyField("Client")

class Account(models.Model):
    account_number = models.CharField(max_length=100)
    balance = models.DecimalField(max_digits=10, decimal_places=2)

class Person(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveSmallIntegerField()

class Client(Person):
    account = models.OneToOneField(Account, on_delete=models.CASCADE)