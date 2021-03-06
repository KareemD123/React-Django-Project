from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('bookings/', include('bookings.urls')),
    path('', include('frontend.urls')),
]