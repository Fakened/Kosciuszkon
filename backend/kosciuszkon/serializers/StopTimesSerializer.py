from rest_framework import serializers
from kosciuszkon.models import StopTimes

class StopTimesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StopTimes
        fields = '__all__'