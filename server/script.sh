#!/bin/bash
source myenv/bin/activate

pip install -r requirements.txt

pip install virtualenv

pip freeze > requirements.txt

python server.py -m flask run --host=0.0.0.0

deactivate