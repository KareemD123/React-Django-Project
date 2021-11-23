from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, Host, Address

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['is_artist'] = user.is_artist
        token['is_host'] = user.is_host
        token['is_active'] = user.is_active
        return token

class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(
        required=True
    )
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = (
                'email', 
                'password', 
                'first_name',
                'last_name',
                'is_artist',
                'is_host',
                )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class CustomAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = (
            'address_line_1',
            'address_line_2',
            'city',
            'country',
            'state',
            'zip_code',
                )

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)  
        instance.save()
        return instance

class CustomHostSerializer(serializers.ModelSerializer):
    host_address = CustomAddressSerializer()

    class Meta:
        model = Host
        fields = (
            'user_id',
            'host_name',
            'total_space',
            'date_joined',
            'is_active',
            'date_activated',
            'host_address',
            'host_phone_number',
            'special_instructions',
            'price_rating',
            'has_own_equipment'
                )

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
        instance.save()
        return instance
    

