from rest_framework import serializers
from kosciuszkon.models import Trips
from kosciuszkon.serializers import RoutesSerializer, CalendarSerializer, ShapesSerializer

class TripsSerializer(serializers.ModelSerializer):
    route = RoutesSerializer()
    service = CalendarSerializer()
    shape_id = ShapesSerializer()
    class Meta:
        model = Trips
        fields = '__all__'