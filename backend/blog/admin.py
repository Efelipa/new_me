from django.contrib import admin
from .models import *

# Class admin models
class PostAdmin(admin.ModelAdmin):
    list_display = ('user_post', 'title', 'text','created_at')
    search_fields = ['title', 'user_post']


# Register your models here.
admin.site.register(Post, PostAdmin)
