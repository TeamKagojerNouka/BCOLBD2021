from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from .models import Document
from .serializers import DocumentSerializer


class DocumentListAPIView(ListAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = (AllowAny, )
