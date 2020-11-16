from unittest.mock import patch
from app.events.event_service import event_service


@patch('app.events.event_repository.event_repository.get_earliest_datetime', return_value='2020-02-14 11:21:18')
def test_get_date(mock):
    rt = event_service.get_earliest_date()

    assert rt == '2020-02-14'


@patch('app.events.event_repository.event_repository.get_events', return_value=[['980782', '2020-02-14 11:21:18', '{"lat" : 123, "lng" : 77.8}']])
def test_transform_events_to_csv(mock):
    rt = event_service.transform_events_to_csv()
    assert rt == "Badge,Updated date and time,Lat,Lng\n980782,2020-02-14 11:21:18,123,77.8"


@patch('app.events.event_repository.event_repository.get_events', return_value=[['980782', '2020-02-14 11:21:18', None]])
def test_transform_events_to_csv_data_as_null(mock):
    rt = event_service.transform_events_to_csv()
    assert rt == "Badge,Updated date and time,Lat,Lng\n980782,2020-02-14 11:21:18,,"