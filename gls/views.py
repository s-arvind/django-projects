from django.shortcuts import render
from rest_framework.views import View
import json

class gls_view(View):
    def get(self, request):
        guide = open("static/guide.json")
        data1 = json.load(guide)
        data2 = json.dumps(data1)
        return render(request, 'index.html', {'guide':data2})