from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import CustomUserCreate, ObtainTokenPairWithColorView, CustomUserCreate, HelloWorldView

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name='user_create'),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),  
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
]