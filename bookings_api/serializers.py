from rest_framework import serializers
from .models import Address, User, Artist, Host

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist

class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Host


