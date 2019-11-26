from django.shortcuts import redirect


# Create your views here.

def index(request):
    # login 완료시 main page 이동
    next_page = '/wow_skills/'
    return redirect(next_page)
