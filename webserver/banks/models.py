from django.db import models
from django.contrib.auth import get_user_model
from issuers.models import Document
from datetime import date


def logo_upload_path(instance, filename):
    return f'banks/logo/{instance.name}_{filename}'


AuthUser = get_user_model()


class Bank(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to=logo_upload_path)

    def __str__(self):
        return f'{self.name}'


class BankBranch(models.Model):
    bank = models.ForeignKey(to=Bank, related_name='branch_set', on_delete=models.PROTECT)
    branch_name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.bank} - {self.branch_name}'


class Credit(models.Model):
    branch = models.ForeignKey(to=BankBranch, related_name='credit_set', on_delete=models.PROTECT)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    payback_amount = models.DecimalField(max_digits=8, decimal_places=2)
    amount_paid = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    borrower = models.ForeignKey(to=AuthUser, related_name='credit_set', on_delete=models.PROTECT)
    asset = models.ForeignKey(to=Document, related_name='credit_set', on_delete=models.PROTECT)
    payment_deadline = models.DateField(default=date.today)

    def __str__(self):
        return f'BDT {self.amount} to {self.borrower.username} by {self.branch}'
