from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    user_post = models.ForeignKey(User, on_delete=models.CASCADE)
    post_image_url = models.URLField(default="")
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_post} created a post at {self.created_at}"

class Project(models.Model):
    title = models.CharField(max_length=100)
    image_url = models.URLField(default="")
    description = models.TextField()
    github_url = models.URLField(default="")

    def __str__(self):
        return f"{self.title} created"




