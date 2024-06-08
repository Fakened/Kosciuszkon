from django_rest_framework import serializers
from kosciuszkon.models import Transfers

class TransferstopTimesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transfers
        fields = '__all__'