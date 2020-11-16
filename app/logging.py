'''Creates a custom logger to use with Flask'''
from logging import Formatter, getLogger, StreamHandler, DEBUG, INFO, WARNING
from sys import stdout

from flask import request


class PCFFormatter(Formatter):
    ''' Custom formatter to inject request information into  the log '''

    def format(self, record):
        if request:
            record.url = '[{}] '.format(request.url)
            record.remote_addr = '[{}] '.format(request.remote_addr)
            record.username = '[{}] '.format(request.environ.get('username'))
            record.method = '[{}] '.format(request.method)
            record.data = '[{}] '.format(request.data)
        else:
            record.url = ''
            record.remote_addr = ''
            record.username = ''
            record.method = ''
            record.data = ''
        return super().format(record)


formatter = PCFFormatter(
    '[%(levelname)s] ' +
    '%(remote_addr)s%(username)s%(method)s%(url)s%(data)s' +
    '[%(pathname)s:%(lineno)d] %(message)s'
)

sysout_handler = StreamHandler(stdout)
sysout_handler.setFormatter(formatter)
sysout_handler.addFilter(lambda record: record.levelno <= INFO)
sysout_handler.setLevel(DEBUG)

syserr_handler = StreamHandler()
syserr_handler.setFormatter(formatter)
syserr_handler.setLevel(WARNING)

pcf_logger = getLogger(__name__)
pcf_logger.addHandler(sysout_handler)
pcf_logger.addHandler(syserr_handler)
pcf_logger.setLevel(DEBUG)

gunicorn_logger = getLogger('gunicorn.error')
pcf_logger.setLevel(max(gunicorn_logger.level, DEBUG))
gunicorn_logger.handlers = pcf_logger.handlers
