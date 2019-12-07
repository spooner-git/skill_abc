import base64
import json

import boto3
import httplib2
from awscli.errorhandler import ClientError
from django.core.files.base import ContentFile

from configs import settings


def func_get_blizzard_token():

    access_token = None
    error_message = None

    h = httplib2.Http()
    client_id = getattr(settings, "SKILL_ABC_BLIZZARD_CLIENT_ID", '')
    client_secret = getattr(settings, "SKILL_ABC_BLIZZARD_CLIENT_SECRET", '')
    base64_str = base64.encodebytes(('%s:%s' % (client_id, client_secret)).encode()).decode().replace('\n', '')

    resp, content = h.request("https://kr.battle.net/oauth/token?grant_type=client_credentials",
                              method="POST",
                              # body=body,
                              headers={'Content-type': 'application/x-www-form-urlencoded',
                                       "Authorization": "Basic " + base64_str})

    json_data = content.decode('utf-8')
    json_loading_data = None

    try:
        json_loading_data = json.loads(json_data)
    except ValueError:
        error_message = '오류가 발생했습니다.'
    except TypeError:
        error_message = '오류가 발생했습니다.'

    if error_message is None:
        if resp['status'] == '200':
            access_token = json_loading_data['access_token']

    return {'access_token': access_token, 'error_message': error_message}


# skill_id 를 통해 wow skill 정보 가져오기
def func_get_wow_skill_info(skill_id, access_token):

    error_message = None
    skill_info = {}

    h = httplib2.Http()

    resp, content = h.request("https://kr.api.blizzard.com/wow/spell/"
                              + str(skill_id)+"?locale=ko_KR&access_token="+access_token,
                              method="GET",
                              headers={'Accept': 'application/json'})

    json_data = content.decode('utf-8')
    json_loading_data = None

    try:
        json_loading_data = json.loads(json_data)
    except ValueError:
        error_message = '오류가 발생했습니다.'
    except TypeError:
        error_message = '오류가 발생했습니다.'

    if error_message is None:
        if resp['status'] == '200':
            skill_info = json_loading_data

    return skill_info


def func_upload_wow_skill_image_logic(file, skill_size, skill_id):

    # project_id = request.POST.get('project_id', '')
    # image = request.POST.get('upload_file', '')
    # context = {'error': None}
    bucket_name = getattr(settings, "SKILL_ABC_AWS_S3_BUCKET_NAME", '')

    s3 = boto3.resource('s3', aws_access_key_id=getattr(settings, "SKILL_ABC_AWS_ACCESS_KEY_ID", ''),
                        aws_secret_access_key=getattr(settings, "SKILL_ABC_AWS_SECRET_ACCESS_KEY", ''))
    bucket = s3.Bucket(bucket_name)
    exists = True
    img_url = None

    try:
        s3.meta.client.head_bucket(Bucket=getattr(settings, "SKILL_ABC_AWS_S3_BUCKET_NAME", ''))
    except ClientError as e:
        # If a client error is thrown, then check that it was a 404 error.
        # If it was a 404 error, then the bucket does not exist.
        error_code = int(e.response['Error']['Code'])
        if error_code == 404:
            exists = False
    if exists is True:
        s3_img_url = 'wow-skill/'+str(skill_id)+'/'+skill_size+'.png'
        bucket.put_object(Key=s3_img_url, Body=file, ContentType='image/png', ACL='public-read')
        img_url = 'https://s3.ap-northeast-2.amazonaws.com/skill-abc/'+s3_img_url

    return img_url


def func_delete_wow_skill_image_logic(file_name):

    # project_id = request.POST.get('project_id', '')
    # image = request.POST.get('upload_file', '')
    # context = {'error': None}
    bucket_name = getattr(settings, "SKILL_ABC_AWS_S3_BUCKET_NAME", '')
    s3 = boto3.resource('s3', aws_access_key_id=getattr(settings, "SKILL_ABC_AWS_ACCESS_KEY_ID", ''),
                        aws_secret_access_key=getattr(settings, "SKILL_ABC_AWS_SECRET_ACCESS_KEY", ''))
    bucket = s3.Bucket(bucket_name)
    exists = True
    error_code = None

    try:
        s3.meta.client.head_bucket(Bucket=getattr(settings, "SKILL_ABC_AWS_S3_BUCKET_NAME", ''))
    except ClientError as e:
        # If a client error is thrown, then check that it was a 404 error.
        # If it was a 404 error, then the bucket does not exist.
        error_code = int(e.response['Error']['Code'])
        if error_code == 404:
            exists = False

    if exists is True:
        # image_format, image_str = content.split(';base64,')
        # ext = image_format.split('/')[-1]
        # data = ContentFile(base64.b64decode(image_str), name='temp.' + ext)
        file_name_split = file_name.split('https://s3.ap-northeast-2.amazonaws.com/skill-abc/')
        if len(file_name_split) >= 2:
            s3_img_url = file_name.split('https://s3.ap-northeast-2.amazonaws.com/skill-abc/')[1]
            objects_to_delete = [{'Key': s3_img_url}]
            try:
                bucket.delete_objects(
                    Delete={
                        'Objects': objects_to_delete
                    })
            except ClientError:
                error_code = '이미 변경중 오류가 발생했습니다.'
        else:
            error_code = None
    return error_code
