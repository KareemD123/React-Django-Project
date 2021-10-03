from rest_framework import serializers
from users.models import Address, User, Artist, Host

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','phone','first_name','last_name','is_artist','is_host',)