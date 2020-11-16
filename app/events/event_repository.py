from app import database as db


class EventRepository():

    def __init__(self, session):
        self.session = session

    def add_user(self, email, password, name, country, city, age):
        sql_query = """INSERT INTO Users (email, password, name, country, city, age)
        VALUES
        (:email, :password, :name, :country, :city, :age)"""

        self.execute_query(
            sql_query, {'email': email, 'password': password, 'name': name, 'country': country, 'city': city, 'age': age})

        self.session.commit()

    def truncate(self):
        sql_query = """DELETE FROM alembic_version"""

        self.execute_query(sql_query)

        self.session.commit()

    def execute_query(self, sql_query, params=None):
        if params is None:
            return self.session.execute(sql_query)
        return self.session.execute(sql_query, params)

    def get_user(self, email, password):
        sql_query = """select * from Users where email = :email and password = :password"""

        result = self.execute_query(sql_query, {'email': email, 'password': password})
        res = {}
        for row in result:
            res['email'] = row[0]
            res['name'] = row[2]
            res['country'] = row[2]
        return res


    def get_events(self):
        sql_query = """select badge_id , timestamp , data from Ct_EventLog order by badge_id, [timestamp] desc"""

        result = self.execute_query(sql_query)

        return result


event_repository = EventRepository(db.Base().session)
