from django_rest_framework import serializers
from kosciuszkon.models import FeedInfo

class FeedInfoDatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedInfo
        fields = '__all__'