# Create your views here.
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from django.db import transaction
from django.http import JsonResponse
from django.views import View
from django.views.generic import TemplateView

from wow_skills.functions import func_get_blizzard_token, func_get_wow_skill_info


class IndexView(TemplateView):
    template_name = 'main_wow_skills.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        return context


class GetWowSkillInfoView(View):

    def get(self, request):
        skill_id = request.GET.get('skill_id')
        error_message = None
        access_token = func_get_blizzard_token()
        skill_info = {}
        if access_token['error_message'] is None:
            skill_info = func_get_wow_skill_info(skill_id, access_token['access_token'])
        else:
            error_message = access_token['error_message']

        return JsonResponse(skill_info, json_dumps_params={'ensure_ascii': True})


def add_wow_skill_info_logic(request):
    skill_id = request.POST.get('skill_id', '')
    error = None
    try:
        with transaction.atomic():
            print('test')
    except ValueError:
        error = '오류가 발생했습니다. [1]'
    except IntegrityError:
        error = '오류가 발생했습니다. [2]'
    except TypeError:
        error = '오류가 발생했습니다. [3]'
    except ValidationError:
        error = '오류가 발생했습니다. [4]'

    return JsonResponse({'skill_id': str(skill_id)}, json_dumps_params={'ensure_ascii': True})
