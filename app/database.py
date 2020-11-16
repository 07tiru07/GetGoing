# -*- coding: utf-8 -*-
'''This module contains the database singleton.'''

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import as_declarative
from sqlalchemy.orm import scoped_session, sessionmaker

from app.serializer import setup_serializer


def init(db_connection_str: str):
    ''' Runs all necessary database setup operations '''
    _connect(db_connection_str)

    _upgrade_db()

    setup_serializer(Base)


def _connect(db_connection_str: str):
    ''' Connects to the database '''
    global engine
    if engine is not None:
        engine.dispose()
    engine = create_engine(db_connection_str, pool_pre_ping=True, pool_recycle=3600)
    Base.session.remove()
    Base.session.configure(bind=engine)


def get_metadata():
    '''Import all modules that define models here!
      Otherwise alembic won't be able to detect database changes automatically'''
    # from app.user.models import Role
    return Base.metadata


def _upgrade_db():
    '''Invokes alembic to bring the database to the latest version'''
    from alembic.config import Config
    from alembic import command
    alembic_cfg = Config("alembic.ini")
    alembic_cfg.attributes['configure_logger'] = False
    alembic_cfg.attributes['connection'] = engine
    command.upgrade(alembic_cfg, "head")


engine = None


@as_declarative()
class Base():
    ''' Class to Augment SQL Alchemy Base with utility functions '''

    session: scoped_session = scoped_session(
        sessionmaker(
            autocommit=False,
            autoflush=False,
            bind=None
        )
    )
    query: scoped_session.query_property = session.query_property()

    @classmethod
    def list_dumps(cls, data: list, *args, **kwargs):
        ''' Dump this list of obj as a string in JSON format '''
        return cls.__marshmallow__(many=True).dumps(data, *args, **kwargs).data

    @classmethod
    def list_dump(cls, data: list, *args, **kwargs):
        ''' Dump this list of obj as a dict '''
        return cls.__marshmallow__(many=True).dump(data, *args, **kwargs).data

    def dumps(self, *args, **kwargs):
        ''' Dump this object as a JSON string '''
        return self.__marshmallow__().dumps(self, *args, **kwargs).data

    def dump(self, *args, **kwargs):
        ''' Dump this object as a dict '''
        return self.__marshmallow__().dump(self, *args, **kwargs).data

    @classmethod
    def load(cls, data, *args, **kwargs):
        ''' Load dict into object(s) '''
        if isinstance(data, str):
            return cls.__marshmallow__(many=kwargs.pop('many', False)).loads(data, *args, **kwargs).data
        return cls.__marshmallow__(many=kwargs.pop('many', False)).load(data, *args, **kwargs).data
