from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from .managers import CustomUserManager

PRICE_CHOICES = [
    ('1', '$'),
    ('2', '$$'),
    ('3', '$$$'),
]


class Address(models.Model):
    address_line_1 = models.CharField(max_length=120)
    address_line_2 = models.CharField(max_length=120, null=True, blank=True)
    city = models.CharField(max_length=120)
    country = models.CharField(max_length=120, default='United States of America')
    state = models.CharField(max_length=120)
    zip_code = models.CharField(max_length=120)

    def get_address(self):
        return "{line1}\n{line2}\n{city}\n{state}, {postal}\n{country}".format(
            line1=self.address_line_1,
            line2=self.address_line_2 or "",
            city=self.city,
            state=self.state,
            postal=self.zip_code,
            country=self.country
        )


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    phone = PhoneNumberField(null=False, blank=False, unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_artist = models.BooleanField(default=False, null=False)
    is_host = models.BooleanField(default=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=False, null=False)
    activated_at = models.DateTimeField(blank=True, null=True)
    is_staff = models.BooleanField(default=False)

    def activate(self):
        self.activated_at = timezone.now()
        self.save()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

class Artist(models.Model):
    class ArtistObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(is_active=True)

    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    artist_name = models.CharField(max_length=30)
    instagram_handle = models.CharField(max_length=30)
    tiktok_handle = models.CharField(max_length=30)
    soundcloud_handle = models.CharField(max_length=30)
    address = models.ForeignKey(Address, related_name="+", null=True, blank=True, on_delete=models.CASCADE)
    artist_phone_number = PhoneNumberField(null=False, blank=False, unique=True)
    has_own_equipment = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    objects = models.Manager()
    artist_objects = ArtistObjects()

    class Meta:
        ordering = ('user_id',)

    def __str__(self):
        return self.artist_name

class Host(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    host_name = models.CharField(max_length=50)
    total_space = models.IntegerField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=False)
    date_activated = models.DateTimeField(auto_now_add=True)
    host_address = models.ForeignKey(Address, related_name="address", null=True, blank=True,
                                     on_delete=models.CASCADE)
    host_phone_number = PhoneNumberField(null=False, blank=False, unique=True)
    special_instructions = models.TextField(max_length=300)
    price_rating = models.CharField(
        max_length=1,
        choices=PRICE_CHOICES
    )
    has_own_equipment = models.BooleanField(default=False)

