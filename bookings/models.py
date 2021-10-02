from django.db import models
from users.models import Host, Artist


STAR_CHOICES = [
    ('1', '⭐'),
    ('2', '⭐⭐'),
    ('3', '⭐⭐⭐'),
    ('4', '⭐⭐⭐⭐'),
    ('5', '⭐⭐⭐⭐⭐'),
]


class Booking(models.Model):
    host_id = models.ForeignKey(Host, on_delete=models.CASCADE)
    artist_id = models.ForeignKey(Artist, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    total_cost = models.DecimalField(max_digits=7, decimal_places=2)
    setup_fee = models.DecimalField(max_digits=7, decimal_places=2)
    insurance_fee = models.DecimalField(max_digits=7, decimal_places=2)


class Reviews(models.Model):
    author = models.ForeignKey(Artist, on_delete=models.CASCADE)
    host = models.ForeignKey(Host, on_delete=models.CASCADE)
    comment = models.CharField(max_length=250)
    stars = models.IntegerField(choices=STAR_CHOICES, null=False, default=3)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
