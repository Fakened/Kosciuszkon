from django.db import models

class LocationType(models.IntegerChoices):
    STOP = 0, 'Stop'
    STATION = 1, 'Station'
    ENTRANCE_EXIT = 2, 'Entrance/Exit'
    GENERIC_NODE = 3, 'Generic node'
    BOARDING_AREA = 4, 'Boarding area'


class Stops(models.Model):
    stop_id = models.IntegerField(primary_key=True)
    stop_code = models.TextField(blank=False, null=True)
    stop_name = models.TextField(blank=False, null=False)
    stop_desc = models.TextField(blank=False, null=True)
    stop_lat = models.TextField(blank=False, null=False)
    stop_lon = models.TextField(blank=False, null=False)
    stop_url = models.TextField(blank=True, null=True)
    location_type = models.IntegerField(blank=False, null=True, choices=LocationType.choices)
    parent_station = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)