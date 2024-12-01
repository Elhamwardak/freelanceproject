from django.urls import path
from . import views




urlpatterns = [
    path('', views.home, name="index"),
    path('thank-you/', views.thank_you, name='thank_you'),
    path('design-and-graphic/', views.design_and_graphic, name='design-and-graphic'),
    path('programming-and-development/', views.programing_and_development, name='programming-and-development'),
    path('writing-and-translation/', views.writing_and_translation, name='writing-and-translation'),
    path('digital-marketers/', views.digital_marketers, name='digital-marketers'),
    path('image-and-vedio/', views.image_and_vedio, name='image-and-vedio'),
]