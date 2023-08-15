from django.urls import path
from .views import AddTrackView, UserRegistrationView, UserLoginView, UserLogoutView

urlpatterns = [
    path('api/track/add/', AddTrackView.as_view(), name='add_track'),
    path('api/register/', UserRegistrationView.as_view(), name='register-user'),
    path('api/login/', UserLoginView.as_view(), name='login-user'),
    path('api/logout/', UserLogoutView.as_view(), name='logout-user'),
]