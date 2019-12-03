from django.contrib import admin

# Register your models here.
from wow_skills.models import WowClassTb, WowSpecializeTypeTb, WowSpecializeSkillTb


@admin.register(WowClassTb)
class WowJobTbAdmin(admin.ModelAdmin):
    fields = ['class_cd', 'name', 'description', 'upper_job_cd', 'order']
    list_display = ('id', 'class_cd', 'name', 'description', 'upper_job_cd', 'order', 'mod_dt', 'reg_dt', 'use')
    search_fields = ['job_cd', 'name']


@admin.register(WowSpecializeTypeTb)
class WowSpecializeTbAdmin(admin.ModelAdmin):
    fields = ['wow_class_tb', 'specialize_type_cd', 'name', 'description', 'upper_job_cd', 'order']
    list_display = ('id', 'wow_class_tb', 'specialize_type_cd', 'name', 'description', 'upper_job_cd', 'order',
                    'mod_dt', 'reg_dt', 'use')
    search_fields = ['pro_type_cd', 'name']


@admin.register(WowSpecializeSkillTb)
class WowProSkillTbAdmin(admin.ModelAdmin):
    fields = ['wow_class_tb', 'wow_specialize_type_cd_tb', 'skill_id', 'name', 'icon', 'description', 'range',
              'power_cost', 'cast_time', 'cool_down', 'condition', 'large_img_url', 'medium_img_url', 'small_img_url',
              'description_img_url', 'upper_wow_pro_skill_id', 'order']
    list_display = ('id', 'wow_class_tb', 'wow_specialize_type_tb', 'skill_id', 'name', 'icon', 'description', 'range',
                    'power_cost', 'cast_time', 'cool_down', 'condition', 'large_img_url', 'medium_img_url',
                    'small_img_url', 'description_img_url', 'upper_wow_specialize_skill_id', 'order', 'mod_dt',
                    'reg_dt', 'use')
    search_fields = ['skill_id', 'name']
