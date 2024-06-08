from django.db import models

class Agency(models.Model):
    agency_id = models.AutoField(primary_key=True)
    agency_name = models.TextField(blank=False, null=False)
    agency_url = models.URLField(blank=False, null=False)
    agency_timezone = models.DateField(blank=False, null=False)
    agency_lang = models.TextField(blank=True, null=True)
    agency_phone = models.TextField(blank=True, null=True)
    agency_fare_url = models.URLField(blank=True, null=True)
    agency_email = models.TextField(blank=True, null=True)