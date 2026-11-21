# from django.db import models

# # Create your models here.

# class Signin(models.Model):

#     name = models.CharField(max_length=100)

#     email = models.EmailField(unique=True)

#     password = models.EmailField(unique=True)

#     confirmPassword = models.CharField(max_length=20)

#     profilefiles = models.ImageField(
#         upload_to='profile/',
#         null=True,
#         blank=True
#     )

#     def __str__(self):
#         return self.name



from django.db import models
from django.contrib.auth.models import User


class Signin(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )

    name = models.CharField(max_length=100)

    profilefiles = models.ImageField(
        upload_to="profile/",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.name





from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )

    name = models.CharField(max_length=100)

    mobile = models.CharField(
        max_length=15,
        unique=True
    )

    def __str__(self):
        return self.name




class Simpledata(models.Model):
      uname = models.CharField(max_length=50)
      uemail = models.EmailField(max_length=50)

      def __str__(self):
          return self.name