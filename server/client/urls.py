from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home, name='home'),
     path('api/students/', views.student_list, name="students"),
     path('api/menus/', views.Menus, name="menus"),
     path("register/", views.register, name="register"),
     path("simpledatasss/", views.simplData, name="simpledatasss"),
]