from django.shortcuts import render
from django.http import HttpResponse,request
from . models import Signin
from .serializers import SigninSerializer
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User

# Create your views here.
  
def Home(request):
    return  HttpResponse('hello world')


@api_view(['GET'])
def student_list(request):

    students = [
        {
            "id": 1,
            "name": "Ganapathi",
            "course": "Python Django"
        },
        {
            "id": 2,
            "name": "Arun",
            "course": "MERN Stack"
        },
        {
            "id": 3,
            "name": "Arun kumar",
            "course": "MERN Stack"
        }
    ]

    return Response(students)




@api_view(["GET"])
def Menus(request):
    Menuitems =[
        {"mitem" : 1, "mname" : "Home" ,"navelink" : '/home'},
        {"mitem" : 2, "mname" : "Students","navelink" : '/students'},
        {"mitem" : 3, "mname" : "Contact","navelink" : '/home'},
        {"mitem" : 4, "mname" : "Signin","navelink" : '/signin'},
        {"mitem" : 5, "mname" : "Login","navelink" : '/login'},
        {"mitem" : 6, "mname" : "Simple","navelink" : '/simple'},
    ]
    return Response(Menuitems)

class Signin(viewsets.ModelViewSet):

    queryset = Signin.objects.all()

    serializer_class = SigninSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User

# @api_view(['POST'])
# def signin(request):

#     name = request.data.get('username')
#     email = request.data.get('email')
#     password = request.data.get('password')
#     confirmPassword =request.data.get('confirmPassword')
#     profilefiles = request.data.get('profilefiles')

#     print(name,email,password,confirmPassword,profilefiles,"data recived")

#     if not name or not email or not password or not confirmPassword or not profilefiles :
#         print(name,email,password,confirmPassword,profilefiles,"data recived") 
#         return Response(
#             {"message": "All fields are required"},
#             status=status.HTTP_400_BAD_REQUEST
#         )

#     else:
#         print("data NOT  recived") 
         

#     if User.objects.filter(username=name).exists():
#         return Response(
#             {"message": "Username already exists"},
#             status=status.HTTP_400_BAD_REQUEST
#         )

#     if User.objects.filter(email=email).exists():
#         return Response(
#             {"message": "Email already exists"},
#             status=status.HTTP_400_BAD_REQUEST
#         )

#     user = User.objects.create_user(
#         name=name,
#         email=email,
#         password=password,
#         confirmPassword=confirmPassword,
#         profilefiles=profilefiles
#     )

#     return Response(
#         {
#             "message": "Registration successful",
#             "user_id": user.id
#         },
#         status=status.HTTP_201_CREATED
#     )



from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import SigninSerializer


@api_view(["POST"])
def signin(request):

    serializer = SigninSerializer(data=request.data)

    if serializer.is_valid():

        user = serializer.save()

        return Response({
            "message": "Registration successful!",
            "user_id": user.id,
            "email": user.email
        }, status=status.HTTP_201_CREATED)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )




from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import RegisterSerializer


@api_view(["POST"])
def register(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():

        user = serializer.save()

        return Response({
            "message": "Registration successful!",
            "user_id": user.id
        }, status=status.HTTP_201_CREATED)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )



from .serializers import Simpledatserialize
@api_view(['POST'])
def simplData(request):
    myserializer = Simpledatserialize(data=request.data)
    if myserializer.is_valid():
        user = myserializer.save()

        return Response({
            "message" :"data inserted successfully",
            'user_id':user.id
        },status=status.HTTP_201_CREATED)
    return Response(
        myserializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )
    