from django_rest_framework import serializers
from kosciuszkon.models import CalendarDates

class CalendarDatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarDates
        fields = '__all__'