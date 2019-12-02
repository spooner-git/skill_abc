"""skill_abc URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    # db에서 wow 스킬 조회
    url(r'^get_wow_skill_info/$', views.GetWowSkillInfoView.as_view(),
        name='get_wow_skill_info'),

    url(r'^admin/$', views.AdminView.as_view(), name='admin'),
    # blizzard api를 이용해 wow 스킬 조회
    url(r'^get_wow_skill_info_from_blizzard/$', views.GetWowSkillInfoFromBlizzardView.as_view(),
        name='get_wow_skill_info_from_blizzard'),

    url(r'^add_wow_skill_info/$', views.add_wow_skill_info_logic, name='add_wow_skill_info'),
]
