# Create your views here.
import collections
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from django.db import transaction
from django.http import JsonResponse
from django.views import View
from django.views.generic import TemplateView

from configs.const import USE
from wow_skills.functions import func_get_blizzard_token, func_get_wow_skill_info
from wow_skills.models import WowClassTb, WowSpecializeTypeTb, WowSpecializeSkillTb


class IndexView(TemplateView):
    template_name = 'main_wow_skills.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        return context


class GetWowSkillInfoView(View):

    def get(self, request):
        search_type = request.GET.get('search_type', 'name')
        search_val = request.GET.get('search_val', '')
        skill_data = None
        skill_list = []
        if search_type == 'name':
            skill_data = WowSpecializeSkillTb.objects.select_related(
                'wow_class_tb', 'wow_specialize_type_tb').filter(name__contains=search_val)

        for skill_info in skill_data:
            skill_dict = {'wow_class_id': skill_info.wow_class_tb.id,
                          'wow_class_name': skill_info.wow_class_tb.name,
                          'wow_specialize_name': skill_info.wow_specialize_type_tb.name,
                          'wow_skill_id': skill_info.skill_id,
                          'wow_name': skill_info.name,
                          'wow_description': skill_info.description,
                          'wow_range': skill_info.range,
                          'wow_power_cost': skill_info.power_cost,
                          'wow_cast_time': skill_info.cast_time,
                          'wow_cool_down': skill_info.cool_down,
                          'wow_condition': skill_info.condition,
                          'wow_large_img_url': skill_info.large_img_url,
                          'wow_medium_img_url': skill_info.medium_img_url,
                          'wow_small_img_url': skill_info.small_img_url,
                          'wow_description_img_url': skill_info.description_url,
                          }
            skill_list.append(skill_dict)

        return JsonResponse({skill_list}, json_dumps_params={'ensure_ascii': True})


class GetWowClassSpecializeDataView(View):

    def get(self, request):
        ordered_class_specialize_dict = collections.OrderedDict()
        wow_class_specialize_data = WowSpecializeTypeTb.objects.select_related('wow_class_tb').filter(use=USE)
        for wow_class_specialize_info in wow_class_specialize_data:
            try:
                ordered_class_specialize_dict[wow_class_specialize_info.wow_class_tb.id]
            except KeyError:
                ordered_class_specialize_dict[wow_class_specialize_info.wow_class_tb.id] =\
                    {'wow_class_name': wow_class_specialize_info.wow_class_tb.name,
                     'wow_specialize_type_id': [],
                     'wow_specialize_type_cd': [],
                     'wow_specialize_type_name': []
                     }
            ordered_class_specialize_dict[wow_class_specialize_info.wow_class_tb.id]['wow_pecialize_type_id'].append(wow_class_specialize_info.id)
            ordered_class_specialize_dict[wow_class_specialize_info.wow_class_tb.id]['wow_specialize_type_cd'].append(wow_class_specialize_info.specialize_type_cd)
            ordered_class_specialize_dict[wow_class_specialize_info.wow_class_tb.id]['wow_specialize_type_name'].append(wow_class_specialize_info.name)

        return JsonResponse(ordered_class_specialize_dict, json_dumps_params={'ensure_ascii': True})


class AdminView(TemplateView):
    template_name = 'main_wow_skills_admin.html'

    def get_context_data(self, **kwargs):
        context = super(AdminView, self).get_context_data(**kwargs)
        # job_data = WowJobTb.objects.filter(use=USE).order_by('order')
        return context


class GetWowSkillInfoFromBlizzardView(View):

    def get(self, request):
        skill_id = request.GET.get('skill_id')
        access_token = func_get_blizzard_token()
        skill_info = {}
        if access_token['error_message'] is None:
            skill_info = func_get_wow_skill_info(skill_id, access_token['access_token'])
        # else:
        #     skill_info['error'] = access_token['error_message']

        return JsonResponse(skill_info, json_dumps_params={'ensure_ascii': True})


def add_wow_skill_info_logic(request):
    wow_class_id = request.POST.get('wow_class_id', '')
    specialize_type_id = request.POST.get('wow_specialize_type_id', '')
    skill_id = request.POST.get('wow_skill_id', '')
    skill_name = request.POST.get('wow_skill_name', '')
    skill_icon = request.POST.get('wow_skill_icon', '')
    skill_description = request.POST.get('wow_skill_description', '')
    skill_cast_time = request.POST.get('wow_skill_cast_time', '')
    skill_power_cost = request.POST.get('wow_skill_power_cost', '')
    skill_range = request.POST.get('wow_skill_range', '')
    skill_cool_down = request.POST.get('wow_skill_cool_down', '')

    context = {}

    error = None
    try:
        with transaction.atomic():
            wow_specialize_skill_info = WowSpecializeSkillTb(wow_class_tb_id=wow_class_id,
                                                             wow_specialize_type_tb=specialize_type_id,
                                                             skill_id=skill_id, name=skill_name, icon=skill_icon,
                                                             description=skill_description, range=skill_range,
                                                             power_cost=skill_power_cost, cast_time=skill_cast_time,
                                                             cool_down=skill_cool_down, main_img_url='', sub_img_url='')
            wow_specialize_skill_info.save()
    except ValueError:
        error = '오류가 발생했습니다. [1]'
    except IntegrityError:
        error = '오류가 발생했습니다. [2]'
    except TypeError:
        error = '오류가 발생했습니다. [3]'
    except ValidationError:
        error = '오류가 발생했습니다. [4]'
    if error is not None:
        context['error'] = str(error)

    return JsonResponse(context, json_dumps_params={'ensure_ascii': True})
