from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('bookings.urls', namespace='bookings')),
    path('admin/', admin.site.urls),
    path('api/', include(('core.routers', 'core'), namespace='core-api')),
]