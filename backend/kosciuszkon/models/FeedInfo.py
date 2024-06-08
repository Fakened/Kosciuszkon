from django.db import models

class FeedInfo(models.Model):
    feed_publisher_name = models.TextField(blank=False, null=False)
    feed_publisher_url = models.URLField(blank=False, null=False)
    feed_lang = models.TextField(blank=False, null=False)
    feed_start_date = models.DateField(blank=False, null=True)
    feed_end_date = models.DateField(blank=False, null=True)