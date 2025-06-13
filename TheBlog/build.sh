#!/usr/bin/env bash
set -o errexit

cd "$(dirname "$0")"

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Install Python packages
python3 -m pip install --upgrade pip
python3 -m pip install gunicorn
python3 -m pip install -r requirements.txt

# Django commands
python3 manage.py collectstatic --no-input
python3 manage.py migrate