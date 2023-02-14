from django.urls import path
from .views import create_bank, create_client, client_list

urlpatterns = [    path("create_bank/", create_bank, name="create_bank"),    path("create_client/", create_client, name="create_client"),    path("client_list/", client_list, name="client_list"),]