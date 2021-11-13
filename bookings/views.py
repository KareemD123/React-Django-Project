from django.shortcuts import render
from rest_framework import generics 
from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework.serializers import Serializer 
from .serializers import BookingSerializer 
from .models import Booking

class BookingCreateApi(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer 
    


