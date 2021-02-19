from rest_framework.serializers import ModelSerializer
from .models import Document


class DocumentSerializer(ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'url', 'preview', 'name', 'created_at']
