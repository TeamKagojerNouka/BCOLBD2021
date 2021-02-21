from django.contrib import admin
from .models import Bank, BankBranch, Credit

admin.site.register(Bank)
admin.site.register(BankBranch)
admin.site.register(Credit)
