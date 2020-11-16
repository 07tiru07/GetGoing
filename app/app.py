# -*- coding: utf-8 -*-
'''Application factory. Add all required app setup in this module'''

from flask import Flask
from flask.testing import FlaskClient

import app.database as db
from app.config import AppConfig
from app.logging import pcf_logger


def _register_blueprints(application):
    '''Register blueprints with our application'''
    from app.frontend import frontend_bp
    from app.events import events_bp

    application.register_blueprint(frontend_bp)
    application.register_blueprint(events_bp)


def create_app(app_name='App', config=AppConfig()):
    '''Creates the Flask application and registers blueprints'''

    application = Flask(app_name, static_url_path='/frontend/static', static_folder='/frontend/static/static')
    application.config.from_object(config)
    application.url_map.strict_slashes = False
    application.test_client_class = FlaskSSOClient
    application.logger = pcf_logger

    if config.DB_SERVER is not None:
        _register_db(application)
        db.init(config.DB_SERVER)

    _register_blueprints(application)

    return application


def _register_db(application):
    # Initialize Database
    # pylint: disable=unused-argument
    # pylint: disable=unused-variable
    @application.teardown_appcontext
    def shutdown_session(exception=None):
        '''Clears any pending sessions after every execution'''
        db.Base.session.remove()
    # pylint: enable=unused-argument
    # pylint: enable=unused-variable


class FlaskSSOClient(FlaskClient):
    ''' Subclasses default Flask client with SSO enabled one'''

    def __init__(self, *args, **kwargs):
        ''' As soon as this client is created we'll call OAuth SSO '''
        super(FlaskSSOClient, self).__init__(*args, **kwargs)
        self.get('/api/login/oauth')
