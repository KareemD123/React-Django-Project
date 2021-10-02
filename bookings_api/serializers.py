from rest_framework import serializers
from users.models import Address, User, Artist, Host

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


