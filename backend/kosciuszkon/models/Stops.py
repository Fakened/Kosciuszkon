from django.db import models

class LocationType(models.TextChoices):
    STOP = 0,
    STATION = 1,
    ENTRANCE_EXIT = 2,
    GENERIC_NODE = 3, 
    BOARDING_AREA = 4 


class Stops(models.Model):
    stop_id = models.AutoField(primary_key=True)
    stop_code = models.TextField(blank=False, null=True)
    stop_name = models.TextField(blank=False, null=False)
    stop_desc = models.TextField(blank=False, null=True)
    stop_lat = models.TextField(blank=False, null=False)
    stop_lon = models.TextField(blank=False, null=False)
    stop_url = models.URLField(blank=False, null=True)
    location_type = models.TextChoices(blank=False, null=True, choices=LocationType.choices)
    parent_station = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)