from django.urls import path
from django.views.generic import TemplateView

app_name = 'bookings'

urlpatterns = [
    path('', TemplateView.as_view(template_name='blog/index.html'))
]