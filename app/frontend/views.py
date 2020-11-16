# -*- coding: utf-8 -*-
'''Frontend blueprint views. Contains routes regarding serving static html/css/js files'''
from flask import Blueprint, Response, request, render_template
import app.database as db
from app.config import AppConfig

config = AppConfig()

frontend_bp = Blueprint('frontend', __name__, url_prefix='',
                        static_url_path='/', static_folder='./static', template_folder='./static')



@frontend_bp.route('/health', methods=['GET'])
def health_check():
    db.Base().session.execute('select 1 badge from employee_tblm')
    return '', 200


@frontend_bp.route('/')
@frontend_bp.route('/index.html')
def index():
    return render_template('index.html')


@frontend_bp.errorhandler(404)
def handle_angular_routes(_):
    '''Required to send Index.html so Angular can find its routes'''
    return index()
