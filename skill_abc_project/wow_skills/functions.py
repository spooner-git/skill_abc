import base64
import json

import httplib2

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
