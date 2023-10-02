from django.db import models

# Create your models here.
class Team(models.Model):
    abbreviation = models.CharField(max_length=5)
    full_name = models.CharField(max_length=50)
