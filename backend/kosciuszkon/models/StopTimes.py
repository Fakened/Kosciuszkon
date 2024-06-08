from django.db import models
from .Trips import Trips
from .Stops import Stops

class PickupType(models.TextChoices):
    REGULARLY_SCHEDULED = 0, 'Regularly scheduled'
    NO_PICKUP_AVAILABLE = 1, 'No pickup available'
    MUST_PHONE_AGENCY = 2, 'Must phone agency'
    MUST_COORDINATE_WITH_DRIVER = 3, 'Must coordinate with driver'
    
class DropOffType(models.TextChoices):
    REGULARLY_SCHEDULED = 0, 'Regularly scheduled'
    NO_DROP_OFF_AVAILABLE = 1, 'No drop off available'
    MUST_PHONE_AGENCY = 2, 'Must phone agency'
    MUST_COORDINATE_WITH_DRIVER = 3, 'Must coordinate with driver'

class StopTimes(models.Model):
    trip_id = models.ForeignKey(Trips, blank=False, null=False)
    arrival_time = models.TimeField(blank=False, null=False)
    departure_time = models.TimeField(blank=False, null=False)
    stop_id = models.ForeignKey(Stops, blank=False, null=False)
    stop_sequence = models.PositiveIntegerField(blank=False, null=False)
    stop_headsign = models.TextField(blank=False, null=True)
    pickup_type = models.TextField(blank=False, null=False, choices=PickupType.choices)
    drop_off_type = models.TextField(blank=False, null=False, choices=DropOffType.choices)
    shape_dist_traveled = models.FloatField(blank=False, null=True)