# Create your views here.
from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'main_skill_abc_admin.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        return context
