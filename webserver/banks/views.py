from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny
from .models import Credit
from .serializers import CreditSerializer
from webserver.utils import run_script


class CreditListCreateAPIView(ListCreateAPIView):
    queryset = Credit.objects.all()
    permission_classes = (AllowAny, )
    serializer_class = CreditSerializer

    def filter_queryset(self, queryset):
        borrower = self.request.query_params.get('borrower')
        if borrower is not None:
            queryset = queryset.filter(borrower=borrower)

        document = self.request.query_params.get('document')
        if document is not None:
            queryset = queryset.filter(asset__hash=document)

        return queryset


class CreditRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Credit.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = CreditSerializer
