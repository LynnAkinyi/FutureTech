#!/usr/bin/env bash
set -o errexit

# Specify Python version explicitly
python3 -m pip install --upgrade pip

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run Django commands
python3 manage.py collectstatic --no-input
python3 manage.py migrate