
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Project_infoViewSet,Project_infoViewSet,Project_infoViewSet,Project_infoViewSet
router = DefaultRouter()
router.register('project_info', Project_infoViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
