from rest_framework import serializers
from project_info.models import Project_info,Project_info

class Project_infoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project_info
        fields = "__all__"