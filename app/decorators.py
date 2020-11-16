# -*- coding: utf-8 -*-
'''Add decorators that belong to the application here'''

from functools import partial, wraps

from flask import Response, current_app, request
from jwt import decode
from jwt.exceptions import (DecodeError, ExpiredSignatureError,
                            InvalidSignatureError)


def authorize(func=None, roles=None):
    if func is None:
        return partial(authorize, roles=roles)
    @wraps(func)
    def check_authorization(*args, **kwargs):
        '''Validates the incoming JWT token. Extracts username and adds it to environ'''
        try:
            if request.cookies.get('auth_token') is None:
                return Response(status=302, headers={'Location': '/'})
            token = decode(
                request.cookies.get('auth_token'),
                key=current_app.config['JWT_PK'],
                algorithms=current_app.config['OAUTH_ALGS'],
                verify=True
            )

            request.environ['username'] = token['sub'].lower()
            request.environ['badge'] = token['badge']
            request.environ['name'] = token['name']
            request.environ['facility_id'] = token['facility_id']
            request.environ['employee_roles'] = token['employee_roles']
            request.environ['jti'] = token['jti'] if 'jti' in token else ''

        except (InvalidSignatureError, DecodeError):
            return Response(
                response='{ "error": "token_invalid"}',
                status=401,
                headers={'WWW-Authenticate': 'Bearer'})
        except ExpiredSignatureError:
            return Response(
                response='{ "error": "token_expired"}',
                status=401,
                headers={'WWW-Authenticate': 'Bearer'})

        if roles is not None:
            if 'employee_roles' in token:
                for role in token['employee_roles']:
                    if role in roles:
                        return func(*args, **kwargs)
            return Response(status=403)
        else:
            return func(*args, **kwargs)

    return check_authorization
