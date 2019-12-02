from django.contrib import admin

# Register your models here.
from wow_skills.models import WowJobTb, WowProTypeTb, WowProSkillTb


@admin.register(WowJobTb)
class WowJobTbAdmin(admin.ModelAdmin):
    fields = ['job_cd', 'name', 'description', 'upper_job_cd', 'order']
    list_display = ('id', 'job_cd', 'name', 'description', 'upper_job_cd', 'order', 'mod_dt', 'reg_dt', 'use')
    search_fields = ['job_cd', 'name']


@admin.register(WowProTypeTb)
class WowProTypeTbAdmin(admin.ModelAdmin):
    fields = ['wow_job_tb', 'pro_type_cd', 'name', 'description', 'upper_job_cd', 'order']
    list_display = ('id', 'wow_job_tb', 'pro_type_cd', 'name', 'description', 'upper_job_cd', 'order',
                    'mod_dt', 'reg_dt', 'use')
    search_fields = ['pro_type_cd', 'name']


@admin.register(WowProSkillTb)
class WowProSkillTbAdmin(admin.ModelAdmin):
    fields = ['wow_job_tb', 'wow_pro_type_tb', 'skill_id', 'name', 'description', 'range', 'power_cost', 'cast_time',
              'cool_down', 'condition', 'main_img_url', 'sub_img_url', 'description_url', 'upper_wow_pro_skill_id',
              'order']
    list_display = ('id', 'wow_job_tb', 'wow_pro_type_tb', 'skill_id', 'name', 'description', 'range', 'power_cost',
                    'cast_time', 'cool_down', 'condition', 'main_img_url', 'sub_img_url', 'description_url',
                    'upper_wow_pro_skill_id', 'order', 'mod_dt', 'reg_dt', 'use')
    search_fields = ['skill_id', 'name']
