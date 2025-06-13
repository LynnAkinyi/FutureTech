#!/usr/bin/env bash
set -o errexit

# Navigate to project root
cd /Users/lynnakinyi/Desktop/GetBlog/TheBlog

# Clean existing build files
rm -rf frontend/build/*
rm -rf staticfiles/*

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Verify build directory exists
if [ ! -d "frontend/build" ]; then
    echo "Error: frontend/build directory not found!"
    exit 1
fi

# Collect static files
python3 manage.py collectstatic --no-input --clear

# Start server
python3 manage.py runserver

echo "React frontend should be at http://localhost:8000"
echo "API endpoints should be at http://localhost:8000/api/"