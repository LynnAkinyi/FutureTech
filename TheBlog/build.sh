#!/usr/bin/env bash
set -o errexit

cd "$(dirname "$0")"

# Install Python packages
python3 -m pip install --upgrade pip
python3 -m pip install gunicorn
python3 -m pip install -r requirements.txt

# Verify gunicorn installation
which gunicorn || echo "Gunicorn not found in PATH"

# Django commands
python3 manage.py collectstatic --no-input
python3 manage.py migrate