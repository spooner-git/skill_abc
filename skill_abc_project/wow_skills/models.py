from django.db import models

from configs.models import TimeStampedModel


class WowJobTb(TimeStampedModel):
    id = models.BigAutoField(db_column='id', primary_key=True, max_length=20, null=False)
    job_cd = models.CharField(db_column='job_cd', max_length=20, blank=True, default='')
    name = models.CharField(db_column='name', max_length=255, blank=True, default='')
    description = models.CharField(db_column='description', max_length=255, blank=True, default='')
    upper_job_cd = models.CharField(db_column='upper_job_cd', max_length=20, blank=True, default='')
    order = models.IntegerField(db_column='order', blank=True, null=True, default=0)

    class Meta:
        db_table = 'wow_job_tb'

    def __str__(self):
        return self.name


class WowProTypeTb(TimeStampedModel):
    id = models.BigAutoField(db_column='id', primary_key=True, max_length=20, null=False)
    wow_job_tb = models.ForeignKey(WowJobTb, on_delete=models.CASCADE, default='')
    pro_type_cd = models.CharField(db_column='pro_type_cd', max_length=20, blank=True, default='')
    name = models.CharField(db_column='name', max_length=255, blank=True, default='')
    description = models.CharField(db_column='description', max_length=255, blank=True, default='')
    upper_job_cd = models.CharField(db_column='upper_job_cd', max_length=20, blank=True, default='')
    order = models.IntegerField(db_column='order', blank=True, null=True, default=0)

    class Meta:
        db_table = 'wow_pro_type_tb'

    def __str__(self):
        return self.name


class WowProSkillTb(TimeStampedModel):
    id = models.BigAutoField(db_column='id', primary_key=True, max_length=20, null=False)
    wow_job_tb = models.ForeignKey(WowJobTb, on_delete=models.CASCADE, default='')
    wow_pro_type_tb = models.ForeignKey(WowProTypeTb, on_delete=models.CASCADE, default='')
    skill_id = models.CharField(db_column='skill_id', max_length=20, blank=True, default='')
    name = models.CharField(db_column='name', max_length=255, blank=True, default='')
    description = models.CharField(db_column='description', max_length=3000, blank=True, default='')
    range = models.CharField(db_column='range', max_length=255, blank=True, default='')
    power_cost = models.CharField(db_column='power_cost', max_length=255, blank=True, default='')
    cast_time = models.CharField(db_column='cast_time', max_length=255, blank=True, default='')
    cool_down = models.CharField(db_column='cool_down', max_length=255, blank=True, default='')
    condition = models.CharField(db_column='condition', max_length=255, blank=True, default='')
    main_img_url = models.CharField(db_column='main_img_url', max_length=255, blank=True, default='')
    sub_img_url = models.CharField(db_column='sub_img_url', max_length=255, blank=True, default='')
    description_url = models.CharField(db_column='description_url', max_length=255, blank=True, default='')
    upper_wow_pro_skill_id = models.CharField(db_column='upper_wow_pro_skill_id', max_length=20, blank=True, default='')
    order = models.IntegerField(db_column='order', blank=True, null=True, default=0)

    class Meta:
        db_table = 'wow_pro_skill_tb'

    def __str__(self):
        return self.name
