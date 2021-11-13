from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import CustomUserCreate, ObtainTokenPairWithColorView, CustomUserCreate, LogoutAndBlacklistRefreshTokenForUserView, ListUsers, CustomHostCreate

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name='user_create'),
    path('user/list/', ListUsers.as_view(), name='ListUsers'),
    path('users/host/create', CustomHostCreate.as_view(), name='CustomHostCreate'),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),  
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist')
]