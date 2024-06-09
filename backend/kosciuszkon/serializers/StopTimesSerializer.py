from rest_framework import serializers
from kosciuszkon.models import StopTimes
from kosciuszkon.serializers import StopsSerializer, TripsSerializer

class StopTimesSerializer(serializers.ModelSerializer):
    trip = TripsSerializer()
    stop = StopsSerializer()
    class Meta:
        model = StopTimes
        fields = '__all__'