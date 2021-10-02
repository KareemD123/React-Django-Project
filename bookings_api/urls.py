from django.urls import path
from .views import users_detail, users_list
app_name = 'bookings_api'

urlpatterns = [
    path('users/', users_list),
    path('users/<int:pk>', users_detail),
]