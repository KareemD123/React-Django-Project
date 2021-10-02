from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('bookings.urls', namespace='bookings')),
    path('api/', include('bookings_api.urls', namespace='bookings')),
]
