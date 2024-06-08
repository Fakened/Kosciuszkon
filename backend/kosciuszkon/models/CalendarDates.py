from django.db import models
from .Calendar import Calendar

class ExceptionType(models.TextChoices):
    SERVICE_ADDED = 1, 'Service added'
    SERVICE_REMOVED = 2, 'Service removed'

class CalendarDates(models.Model):
    service_id = models.ForeignKey(Calendar, blank=False, null=False)
    date = models.DateField(blank=False, null=False)
    exception_type = models.TextField(blank=False, null=False, choices=ExceptionType.choices)