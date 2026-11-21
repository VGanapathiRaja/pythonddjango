# from rest_framework import serializers
# from .models import Signin

# # class SigninSerializer(serializers.ModelSerializer):

# #     class Meta:
# #         model = Signin
# #         fields = '__all__'


# from rest_framework import serializers
# from django.contrib.auth.models import User
# from .models import Signin

# class SigninSerializer(serializers.ModelSerializer):

#     name = serializers.CharField(max_length=100)
#     email = serializers.EmailField(max_length=100)
#     password = serializers.CharField(write_only=True)
#     confirmPassword = serializers.CharField(write_only=True)
#     profilefiles = serializers.ImageField(
#         required=False,
#         allow_null=True
#     )

#     class Meta:
#         model = User
#         fields = [
#             'name',
#             'email',
#             'password',
#             'confirmPassword',
#             'profilefiles'
#         ]

#     def validate(self, data):

#         if data['password'] != data['confirmPassword']:
#             raise serializers.ValidationError({
#                 'confirmPassword': 'Passwords do not match'
#             })

#         if User.objects.filter(email=data['email']).exists():
#             raise serializers.ValidationError({
#                 'email': 'Email already exists'
#             })

#         return data

#     def create(self, validated_data):

#         name = validated_data.pop('name')
#         password = validated_data.pop('password')
#         validated_data.pop('confirmPassword')

#         profilefiles = validated_data.pop(
#             'profilefiles', None
#         )

#         email = validated_data.pop('email')

#         user = User.objects.create_user(
#             username=email,
#             email=email,
#             password=password
#         )

#         Signin.objects.create(
#             user=user,
#             name=name,
#             profilefiles=profilefiles
#         )

#         return user


from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Signin


class SigninSerializer(serializers.ModelSerializer):

    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    confirmPassword = serializers.CharField(write_only=True)

    profilefiles = serializers.ImageField(
        required=False,
        allow_null=True
    )

    class Meta:
        model = User
        fields = [
            "name",
            "email",
            "password",
            "confirmPassword",
            "profilefiles"
        ]

    def validate(self, data):

        if data["password"] != data["confirmPassword"]:
            raise serializers.ValidationError({
                "confirmPassword": "Passwords do not match"
            })

        if User.objects.filter(email=data["email"]).exists():
            raise serializers.ValidationError({
                "email": "Email already exists"
            })

        return data

    def create(self, validated_data):

        name = validated_data.pop("name")
        password = validated_data.pop("password")
        validated_data.pop("confirmPassword")

        profilefiles = validated_data.pop("profilefiles", None)
        email = validated_data.pop("email")

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password
        )

        Signin.objects.create(
            user=user,
            name=name,
            profilefiles=profilefiles
        )

        return user





from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile


class RegisterSerializer(serializers.Serializer):

    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    mobile = serializers.CharField(max_length=15)
    password = serializers.CharField(write_only=True)

    def validate_email(self, value):

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "Email already exists"
            )

        return value

    def validate_mobile(self, value):

        if UserProfile.objects.filter(mobile=value).exists():
            raise serializers.ValidationError(
                "Mobile number already exists"
            )

        return value

    def create(self, validated_data):

        name = validated_data["name"]
        email = validated_data["email"]
        mobile = validated_data["mobile"]
        password = validated_data["password"]

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password
        )

        UserProfile.objects.create(
            user=user,
            name=name,
            mobile=mobile
        )

        return user


from .models import Simpledata

class Simpledatserialize(serializers.Serializer):
      uname = serializers.CharField(max_length=50)
      uemail = serializers.EmailField(max_length=50)

      def create(self, validated_data):
          uname = validated_data['uname']
          uemail = validated_data['uemail']

          user = User.objects.create(
                uname = uname,
                uemail = uemail
           )

          Simpledata.objects.create(
                uname = uname,
                uemail = uemail
          )
          print(Simpledatserialize)
          return user