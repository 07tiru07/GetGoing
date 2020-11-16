# -*- coding: utf-8 -*-
'''Login blueprint views. Contains routes regarding authentication'''

import json
import os
from datetime import datetime, date
from time import time

import requests
from flask import Blueprint, Response, current_app, jsonify, request
from jwt import decode, encode

from app.decorators import authorize
from app.events.event_service import event_service

events_bp = Blueprint('events', __name__,)


@events_bp.route('/audit', methods=["GET"])
@authorize(roles=['admin'])
def get_events_detail():
    from_date = event_service.get_earliest_date()
    filename = 'Audit_fromdate('+str(from_date)+')_todate('+str(date.today())+').csv'
    csv = event_service.transform_events_to_csv()

    return Response(
        csv,
        mimetype="text/csv",
        headers={"Content-disposition":
                 "attachment; filename="+filename})
