from django.urls import path
from .views import DocumentAPIView, DocumentDetailsAPIView, DocumentVerificationAPIView

urlpatterns = [
    path('document/', DocumentAPIView.as_view(), name='document_list_create'),
    path('document/<pk>/', DocumentDetailsAPIView.as_view(), name='document_details'),
    path('verify/<hash>/', DocumentVerificationAPIView.as_view(), name='verify_document')
]
