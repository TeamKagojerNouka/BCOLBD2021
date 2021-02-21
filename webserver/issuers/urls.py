from django.urls import path
from .views import DocumentListAPIView

urlpatterns = [
    path('', DocumentListAPIView.as_view(), name='document_list'),
]
