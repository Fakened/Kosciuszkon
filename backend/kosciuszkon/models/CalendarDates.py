from django.db import models
from .Calendar import Calendar

class ExceptionType(models.IntegerChoices):
    SERVICE_ADDED = 1, 'Service added'
    SERVICE_REMOVED = 2, 'Service removed'

class CalendarDates(models.Model):
    service_id = models.ForeignKey(Calendar, blank=False, null=False, on_delete=models.CASCADE)
    date = models.DateField(blank=False, null=False)
    exception_type = models.IntegerField(blank=False, null=False, choices=ExceptionType.choices)