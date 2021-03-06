from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from import_export import resources
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User, Address, Host

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ('email','first_name','last_name','phone',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email','is_artist','is_host','first_name','last_name','phone',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','date_joined','is_artist','is_host','is_active','is_staff','first_name','last_name','phone','password1', 'password2', )}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


@admin.register(Host)
class HostAdmin(admin.ModelAdmin):
    list_display = ('host_name', 'date_joined', 'host_phone_number')
    
@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('address_line_1', 'city', 'country')


admin.site.register(User, CustomUserAdmin)