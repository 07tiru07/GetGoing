# -*- coding: utf-8 -*-
'''Add utility functions here'''
import base64


def encode(value):
    '''Generate a base64 encoded string for obsfuscation purposes'''
    return_value = base64.b64encode(value.encode())
    return_value = return_value[2:len(return_value) - 1] + \
                   return_value[0:2] + return_value[len(return_value) - 1:]
    return return_value


def decode(value):
    '''Decode a base64 encoded string'''
    try:
        encoded = value.encode()
    except:
        encoded = value
    return_value = encoded[len(encoded) - 3:len(encoded) - 1] + \
                   encoded[0:len(encoded) - 3] + encoded[len(encoded) - 1:]
    return_value = base64.b64decode(return_value)
    return return_value.decode()


class AttrDict(dict):
    def __init__(self, *args, **kwargs):
        super(AttrDict, self).__init__(*args, **kwargs)
        self.__dict__ = self
