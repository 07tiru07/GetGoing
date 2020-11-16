from unittest.mock import patch

from app.events.event_repository import event_repository


@patch('app.database.Base.session.execute', return_value=[], autospec=True)
@patch('app.database._upgrade_db')
def test_save_event_successfully(mock_upgrade_db, mock_db):
    event_repository.save('980782', 'LOGIN', None, 'some uuid', '2019-01-01 12:00:00')

    mock_db.assert_called_with("""INSERT INTO Ct_EventLog (badge_id, session_id, data, timestamp, action)
        VALUES
        (:badgeid, :sessionid, :data, :timestamp ,:action)""",
                               {'badgeid': '980782', 'sessionid': 'some uuid', 'data': None, 'timestamp': '2019-01-01 12:00:00', 'action': 'LOGIN'})


@patch('app.database.Base.session.execute', return_value=[['2020-02-14 11:21:18']], autospec=True)
@patch('app.database._upgrade_db')
def test_get_minimal_date_from_event_log(mock_upgrade_db, mock_db):
    ret = event_repository.get_earliest_datetime()
    mock_db.assert_called_with(
        """select top 1 [timestamp] from Ct_EventLog order by [timestamp] asc""")
    assert ret == '2020-02-14 11:21:18'


@patch('app.database.Base.session.execute', return_value=[['980782', '2020-02-14 11:21:18', '{"lat" : 123, "lng" : 77.8}']], autospec=True)
@patch('app.database._upgrade_db')
def test_get_events(mock_upgrade_db, mock_db):
    data = event_repository.get_events()
    assert data == [['980782', '2020-02-14 11:21:18', '{"lat" : 123, "lng" : 77.8}']]
    mock_db.assert_called_with(
        """select badge_id , timestamp , data from Ct_EventLog order by badge_id, [timestamp] desc""")
