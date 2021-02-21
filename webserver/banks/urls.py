from django.urls import path
from .views import CreditListCreateAPIView, CreditRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('credit/', CreditListCreateAPIView.as_view(), name='credit_list_create'),
    path('credit/<pk>/', CreditRetrieveUpdateDestroyAPIView.as_view(), name='credit_details'),
]
