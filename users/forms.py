from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('email','date_joined','first_name','last_name','phone','is_artist','is_host','is_active',)


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('email','date_joined','first_name','last_name','phone','is_artist','is_host','is_active',)