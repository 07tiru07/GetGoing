import json
import responses
from unittest.mock import patch
import uuid
from jwt import encode
from freezegun import freeze_time
from app.config import AppConfig

config = AppConfig()


@freeze_time("2020-02-05")
@patch('app.events.event_service.event_service.get_earliest_date', return_value='2020-02-01')
@patch('app.login.employee_repository.employee_repository.get_employee_detail_by_username', return_value={'employee_id': 123, 'employee_name': 'Deepti', 'facility_id': 1})
@patch('app.events.event_repository.event_repository.save')
@patch('app.database._upgrade_db')
def test_get_events(mock_upgrade_db, mock_event_repository, mock_employee_detail, mock_get_date, flask_app):
    with flask_app.test_client() as client:
        token = encode(
            {'sub': 'deepti',
             'badge': 123,
             'name': 'Deepti',
             'facility_id': 1,
             'employee_roles': ['admin']},
            AppConfig().JWT_KEY,
            'RS256'
        ).decode('UTF-8')

        client.set_cookie(
            'localhost',
            'auth_token',
            token)

        resp = client.get('/audit')
        assert resp.mimetype == 'text/csv'
        assert resp.headers[0][1] == 'attachment; filename=Audit_fromdate(2020-02-01)_todate(2020-02-05).csv'
