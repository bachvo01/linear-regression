#!/bin/bash
source myenv/bin/activate

pip install -r requirements.txt

pip install virtualenv gunicorn

pip freeze > requirements.txt

# python server.py -m flask run --host=0.0.0.0
gunicorn --bind 0.0.0.0:5000 wsgi:app

deactivate