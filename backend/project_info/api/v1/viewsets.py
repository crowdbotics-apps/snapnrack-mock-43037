from rest_framework import authentication
from project_info.models import Project_info,Project_info,Project_info
from .serializers import Project_infoSerializer,Project_infoSerializer,Project_infoSerializer
from rest_framework import viewsets

class Project_infoViewSet(viewsets.ModelViewSet):
    serializer_class = Project_infoSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Project_info.objects.all()