# -*- coding: utf-8 -*-
'''Main file to run your application. Contains logic to detect if we are running on PCF or not'''

import os
from app import app

# Make application accessible to Gunicorn
application = app.create_app()

# Check if we are running outside of PCF
if os.environ.get('VCAP_APPLICATION') is None:
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    application.run(threaded=True, debug=False, host=HOST, port=PORT)
