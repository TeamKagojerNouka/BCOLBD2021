from django.urls import path
from .views import CreditListCreateAPIView

urlpatterns = [
    path('credit/', CreditListCreateAPIView.as_view(), name='credit_list_create'),
]
