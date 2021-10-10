from rest_framework import serializers
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist

from users.models import Address, User, Artist, Host

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','phone','first_name','last_name','is_artist','is_host',)

