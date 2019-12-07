from django.db import models

from configs.models import TimeStampedModel


class WowClassTb(TimeStampedModel):
    id = models.BigAutoField(db_column='id', primary_key=True, max_length=20, null=False)
    class_cd = models.CharField(db_column='class_cd', max_length=20, blank=True, default='')
    name = models.CharField(db_column='name', max_length=255, blank=True, default='')
    description = models.CharField(db_column='description', max_length=255, blank=True, default='')
    upper_job_cd = models.CharField(db_column='upper_job_cd', max_length=20, blank=True, default='')
    order = models.IntegerField(db_column='order', blank=True, null=True, default=0)

    class Meta:
        db_table = 'wow_class_tb'

    def __str__(self):
        return self.name


class WowSpecializeTypeTb(TimeStampedModel):
    id = models.BigAutoField(db_column='id', primary_key=True, max_length=20, null=False)
    wow_class_tb = models.ForeignKey(WowClassTb, on_delete=models.CASCADE, default='')
    specialize_type_cd = models.CharField(db_column='specialize_type_cd', max_length=20, blank=True, default='')
    name = models.CharField(db_column='name', max_length=255, blank=True, default='')
    description = models.CharField(db_column='description', max_length=255, blank=True, default='')
    upper_job_cd = models.CharField(db_column='upper_job_cd', max_length=20, blank=True, default='')
    order = models.IntegerField(db_column='order', blank=True, null=True, default=0)

    class Meta:
        db_table = 'wow_specialize_type_tb'

    def __str__(self):
        return self.name


class WowSpecializeSkillTb(TimeStampedModel):
    id = models.BigAutoField(db_column='id', primary_key=True, max_length=20, null=False)
    wow_class_tb = models.ForeignKey(WowClassTb, on_delete=models.CASCADE,
                                     blank=True, null=True, default='')
    wow_specialize_type_tb = models.ForeignKey(WowSpecializeTypeTb, on_delete=models.CASCADE,
                                               blank=True, null=True, default='')
    skill_id = models.CharField(db_column='skill_id', max_length=20, blank=True, default='')
    name = models.CharField(db_column='name', max_length=255, blank=True, default='')
    icon = models.CharField(db_column='icon', max_length=255, blank=True, default='')
    description = models.CharField(db_column='description', max_length=3000, blank=True, default='')
    range = models.CharField(db_column='range', max_length=255, blank=True, default='')
    power_cost = models.CharField(db_column='power_cost', max_length=255, blank=True, default='')
    cast_time = models.CharField(db_column='cast_time', max_length=255, blank=True, default='')
    cool_down = models.CharField(db_column='cool_down', max_length=255, blank=True, default='')
    condition = models.CharField(db_column='condition', max_length=255, blank=True, default='')
    large_img_url = models.CharField(db_column='large_img_url', max_length=255, blank=True, default='')
    medium_img_url = models.CharField(db_column='medium_img_url', max_length=255, blank=True, default='')
    small_img_url = models.CharField(db_column='small_img_url', max_length=255, blank=True, default='')
    description_img_url = models.CharField(db_column='description_img_url', max_length=255, blank=True, default='')
    upper_wow_specialize_skill_id = models.CharField(db_column='upper_wow_specialize_skill_id', max_length=20,
                                                     blank=True, default='')
    order = models.IntegerField(db_column='order', blank=True, null=True, default=0)

    class Meta:
        db_table = 'wow_specialize_skill_tb'

    def __str__(self):
        return self.name
