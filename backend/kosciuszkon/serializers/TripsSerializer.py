from django_rest_framework import serializers
from kosciuszkon.models import Trips

class TripsTimesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trips
        fields = '__all__'