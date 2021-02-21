from rest_framework.serializers import ModelSerializer
from .models import Credit


class CreditSerializer(ModelSerializer):
    class Meta:
        model = Credit
        fields = '__all__'
