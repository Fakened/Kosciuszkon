from django.db import models
from .Agency import Agency

class TransportTypes(models.IntegerChoices):
    TRAM_STREETCAR_LIGHT_RAIL = 0, 'Tram, Streetcar, Light rail'
    SUBWAY_METRO = 1, 'Subway, Metro'
    RAIL = 2, 'Rail'
    BUS = 3, 'Bus'
    FERRY = 4, 'Ferry'
    CABLE_TRAM = 5, 'Cable tram'
    AERIAL_LIFT = 6, 'Aerial lift'
    FUNICULAR = 7, 'Funicular'
    TROLLEYBUS = 11, 'Trolleybus'
    MONORAIL = 12, 'Monorail'

class Routes(models.Model):
    route_id = models.Field(primary_key=True, blank=False, null=False)
    agency_id = models.ForeignKey(Agency, on_delete=models.CASCADE, blank=True, null=True)
    route_short_name = models.TextField(blank=True, null=True)
    route_long_name = models.TextField(blank=True, null=True)
    route_desc = models.TextField(blank=False, null=True)
    route_type = models.IntegerField(blank=False, null=False, choices=TransportTypes.choices)
    route_url = models.TextField(blank=True, null=True)
    route_color = models.TextField(blank=False, null=False)
    route_text_color = models.TextField(blank=False, null=False)