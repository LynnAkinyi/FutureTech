from django.urls import path
from .views import RegisterView, LoginView, home
from django.views.generic import TemplateView

urlpatterns = [
    path('', home, name='home'),
    path('', TemplateView.as_view(template_name='index.html')),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]