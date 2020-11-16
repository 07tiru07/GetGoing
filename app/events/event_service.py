

import json
import urllib.parse
from datetime import datetime

import requests

from app.config import AppConfig
from app.events.event_repository import event_repository
config = AppConfig()


class EventService:

    def add_user(self, email, password, name, country, city, age):
        event_repository.add_user(email, password, name, country, city, age)

    def get_user(self, email, password):
        return event_repository.get_user(email, password)


event_service = EventService()
