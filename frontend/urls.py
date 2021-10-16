from django.contrib import admin
from django.urls import path,  re_path
from . import views 


urlpatterns = [
    path('', views.index),  # for the empty url
    re_path(r'^.*/$', views.index)  # for all other urls
]