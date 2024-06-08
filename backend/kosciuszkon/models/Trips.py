from django.db import models
from .Routes import Routes
from .Calendar import Calendar
from .Shapes import Shapes

class DirectionType(models.IntegerChoices):
    OUTBOUND = 0, 'Outbound'
    INBOUND = 1, 'Inbound'

class WheelchairAccessibleType(models.IntegerChoices):
    NO_INFORMATION = 0, 'No information'
    ACCESSIBLE = 1, 'Accessible'
    NOT_ACCESSIBLE = 2, 'Not accessible'

class Trips(models.Model):
    route_id = models.ForeignKey(Routes, blank=False, null=False, on_delete=models.CASCADE)
    service_id = models.ForeignKey(Calendar, blank=False, null=False, on_delete=models.CASCADE)
    trip_id = models.IntegerField(primary_key=True)
    trip_headsign = models.TextField(blank=True, null=True)
    trip_short_name = models.TextField(blank=True, null=True)
    direction_id = models.IntegerField(blank=False, null=True, choices=DirectionType.choices)
    block_id = models.TextField(blank=False, null=True)
    shape_id = models.ForeignKey(Shapes, blank=False, null=False, on_delete=models.CASCADE)
    wheelchair_accessible = models.IntegerField(blank=False, null=True, choices=WheelchairAccessibleType.choices)