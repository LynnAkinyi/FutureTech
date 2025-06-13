from django.urls import path
from .views import RegisterView, LoginView, home
from django.views.generic import TemplateView

urlpatterns = [
    path('', home, name='home'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]