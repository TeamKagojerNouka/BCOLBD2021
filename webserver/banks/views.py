from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import AllowAny
from .models import Credit
from .serializers import CreditSerializer


class CreditListCreateAPIView(ListCreateAPIView):
    queryset = Credit.objects.all()
    permission_classes = (AllowAny, )
    serializer_class = CreditSerializer

    def filter_queryset(self, queryset):
        borrower = self.request.query_params.get('borrower')
        if borrower is not None:
            queryset = queryset.filter(borrower=borrower)

        return queryset