from django.conf import settings
from django.db import models
class Project_info(models.Model):
    'Generated Model'
    company = models.CharField(max_length=255,)
    project_name = models.CharField(max_length=255,)

# Create your models here.
