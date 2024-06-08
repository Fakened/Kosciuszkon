from rest_framework import serializers
from kosciuszkon.models import Transfers

class TransfersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transfers
        fields = '__all__'