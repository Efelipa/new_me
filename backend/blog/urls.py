from django.urls import path, include
from rest_framework import routers
from blog import views

router = routers.DefaultRouter()
router.register(r'posts', views.HomeView)
router.register(r'projects', views.ProjectView)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
