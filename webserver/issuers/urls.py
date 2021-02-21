from django.urls import path
from .views import DocumentListAPIView

urlpatterns = [
    path('document/', DocumentListAPIView.as_view(), name='document_list'),
]
