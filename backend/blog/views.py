from django.shortcuts import render
from .models import *
from rest_framework import viewsets, permissions
from .serializer import PostSerializer, ProjectSerializer

# Create your views here.
class HomeView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny]

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    permission_classes = [permissions.AllowAny]


