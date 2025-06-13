#!/usr/bin/env bash
set -o errexit

# Navigate to project root
cd "$(dirname "$0")"

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
python3 -m pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Django commands
python3 manage.py collectstatic --no-input
python3 manage.py migrate

# Start server (for local development)
if [ "$RENDER" != "true" ]; then
    python3 manage.py runserver
else
    gunicorn TheBlog.wsgi:application --bind 0.0.0.0:$PORT
fi