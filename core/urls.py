from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('bookings.urls', namespace='bookings')),
    path('admin/', admin.site.urls),
    path('api/v1/users/', include('users.urls')),
]