from django.db import models

class WeekDayAvailability(models.TextChoices):
    AVAILABLE = 0, 'Available'
    NOT_AVAILABLE = 1, 'Not available'

class Calendar(models.Model):
    service_id = models.AutoField(primary_key=True, blank=False, null=False)
    monday = models.TextField(blank=False, null=False, choices=WeekDayAvailability.choices)
    tuesday = models.TextField(blank=False, null=False, choices=WeekDayAvailability.choices)
    wednesday = models.TextField(blank=False, null=False, choices=WeekDayAvailability.choices)
    thursday = models.TextField(blank=False, null=False, choices=WeekDayAvailability.choices)
    friday = models.TextField(blank=False, null=False, choices=WeekDayAvailability.choices)
    saturday = models.TextField(blank=False, null=False, choices=WeekDayAvailability.choices)
    sunday = models.TextField(blank=False, null=False, choices=WeekDayAvailability.choices)
    start_date = models.DateField(blank=False, null=False)
    end_date = models.DateField(blank=False, null=False)