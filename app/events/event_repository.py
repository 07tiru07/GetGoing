from app import database as db


class EventRepository():

    def __init__(self, session):
        self.session = session

    def save(self, badge, event_type, data, visit_id, datetime):
        sql_query = """INSERT INTO Ct_EventLog (badge_id, session_id, data, timestamp, action)
        VALUES
        (:badgeid, :sessionid, :data, :timestamp ,:action)"""

        self.execute_query(
            sql_query, {'badgeid': badge, 'sessionid': visit_id, 'data': data, 'timestamp': datetime, 'action': event_type})

        self.session.commit()

    def execute_query(self, sql_query, params=None):
        if params is None:
            return self.session.execute(sql_query)
        return self.session.execute(sql_query, params)

    def get_earliest_datetime(self):
        sql_query = """select top 1 [timestamp] from Ct_EventLog order by [timestamp] asc"""

        result = self.execute_query(sql_query)

        for row in result:
            return row[0]

    def get_events(self):
        sql_query = """select badge_id , timestamp , data from Ct_EventLog order by badge_id, [timestamp] desc"""

        result = self.execute_query(sql_query)

        return result


event_repository = EventRepository(db.Base().session)
