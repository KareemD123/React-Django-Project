from django.urls import path
from django.views.generic import TemplateView
from django.urls import path
from .views import BookingCreateApi

app_name = 'bookings'

urlpatterns = [
    path('api/create',BookingCreateApi.as_view()),
]