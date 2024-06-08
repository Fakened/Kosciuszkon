from django.db import models
from .Stops import Stops

class TransferType(models.IntegerChoices):
    RECOMMENDED_TRANSFER_POINT = 0, 'Recommended transfer point'
    TIMED_TRANSFER_POINT = 1, 'Timed transfer point'
    MINIMUM_TIME_TRANSFER = 2, 'Minimum time transfer'
    NO_TRANSFER = 3, 'No transfer'
    IN_SEAT_TRANSFER_ALLOWED = 4, 'In-seat transfer allowed'
    IN_SEAT_TRANSFER_NOT_ALLOWED = 5, 'In-seat transfer not allowed'
    

class Transfers(models.Model):
    from_stop_id = models.ForeignKey(Stops, blank=False, null=False, on_delete=models.CASCADE, related_name='transfers_from')
    to_stop_id = models.ForeignKey(Stops, blank=False, null=False, on_delete=models.CASCADE, related_name='transfers_to')
    transfer_type = models.IntegerField(blank=False, null=False, choices=TransferType.choices)
    min_transfer_time = models.PositiveIntegerField(blank=False, null=True)