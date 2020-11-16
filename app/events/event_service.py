

import json
import urllib.parse
from datetime import datetime

import requests

from app.config import AppConfig
from app.events.event_repository import event_repository
config = AppConfig()


class EventService:
    def get_earliest_date(self):
        min_datetime = event_repository.get_earliest_datetime()
        start_date = datetime.strptime(str(min_datetime), '%Y-%m-%d %H:%M:%S')
        dt = start_date.strftime('%Y-%m-%d')
        return dt

    def transform_events_to_csv(self):
        events = event_repository.get_events()
        csv_data = 'Badge,Updated date and time,Lat,Lng'
        for row in events:
            csv_data = csv_data + '\n'
            for index, val in enumerate(row):
                if index != 2:
                    csv_data = csv_data + str(val) + ','
                else:
                    if val is not None:
                        latlng = json.loads(val)
                        lat = latlng['lat']
                        lng = latlng['lng']
                    else:
                        lat = ''
                        lng = ''
                    csv_data = csv_data + str(lat) + ','
                    csv_data = csv_data + str(lng) + ','

            csv_data = csv_data[:-1]

        return csv_data


event_service = EventService()
