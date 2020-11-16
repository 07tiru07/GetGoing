# -*- coding: utf-8 -*-
'''This module contains the singleton for your application configuration'''

import json
import os
import requests


class AppConfig():
    '''Loads configuration from PCF, or from app.dev.config when running outside PCF'''

    DB_SERVER = 'sqlite:///localdb.db'
    OAUTH_DOMAIN = None
    OAUTH_CLIENT_ID = None
    OAUTH_CLIENT_SECRET = None
    OAUTH_PUBLIC_KEY = None
    OAUTH_ALGS = ['RS256']

    SEND_FILE_MAX_AGE_DEFAULT = 31536000

    REDIS_HOST = None
    REDIS_PWD = None
    REDIS_PORT = None

    RMQ_HOST = None
    RMQ_VHOST = None
    RMQ_PORT = None
    RMQ_USER = None
    RMQ_PWD = None

    def __init__(self):
        # Check if we are running on PCF
        if os.environ.get('VCAP_SERVICES'):  # pragma: no cover

            # If we are running on PCF get the configuration from the User-Provided-Service
            env = json.loads(os.environ.get('VCAP_SERVICES'))
            # Load User-Provided env variables
            user_provided = env.get('user-provided')

            # Load REDIS configurations
            p_redis = env.get('p-redis')
            if p_redis:
                self.REDIS_HOST = p_redis[0].get('credentials').get('host')
                self.REDIS_PWD = p_redis[0].get('credentials').get('password')
                self.REDIS_PORT = p_redis[0].get('credentials').get('port')

            # Load RabbitMQ configurations
            p_rabbitmq = env.get('p-rabbitmq')
            if p_rabbitmq:
                self.RMQ_HOST = p_rabbitmq[0].get('credentials').get(
                    'protocols').get('amqp').get('host')
                self.RMQ_VHOST = p_rabbitmq[0].get('credentials').get(
                    'protocols').get('amqp').get('vhost')
                self.RMQ_PORT = p_rabbitmq[0].get('credentials').get(
                    'protocols').get('amqp').get('port')
                self.RMQ_USER = p_rabbitmq[0].get('credentials').get(
                    'protocols').get('amqp').get('username')
                self.RMQ_PWD = p_rabbitmq[0].get('credentials').get(
                    'protocols').get('amqp').get('password')


class AppTestConfig(AppConfig):
    '''Use this class to define variables used specifically when Unit Testing'''

    def __init__(self):
        super().__init__()
        self.DB_SERVER = 'sqlite:///:memory:'

class AppE2ETestConfig(AppConfig):
    '''Use this class to define variables used specifically when E2E Testing'''

    def __init__(self):
        super().__init__()
        self.GMAP_PROXY_URL = 'http://localhost:9000'

class AppOAuthTestConfig(AppConfig):
    CLIENT_ID = '8123228f-b9d2-43a7-9521-4b5f01e80869'
    OAUTH_DOMAIN = 'https://aoeu.com'
    OAUTH_CLIENT_ID = ''
    OAUTH_CLIENT_SECRET = ''

    def __init__(self):
        super().__init__()
        self.DB_SERVER = 'sqlite:///:memory:'