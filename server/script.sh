#!/bin/bash
source myenv/bin/activate
python server.py
# pip list
pip freeze > requirements.txt
deactivate