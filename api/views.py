from django.shortcuts import render
from rest_framework import generics
from .serializers import TeamSerializer
from .models import Team

# Create your views here.
def main(req):
    print('Hello World')
    return render()

class TeamView(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer