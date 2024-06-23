#!/bin/bash
source myenv/bin/activate
python model.py
# pip list
pip freeze > requirements.txt
deactivate