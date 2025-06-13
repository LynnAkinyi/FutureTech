#!/usr/bin/env bash

# Navigate to project root
cd /Users/lynnakinyi/Desktop/GetBlog/TheBlog

# Test frontend build
cd frontend
npm run build
cd ..

# Verify build directory
ls -la frontend/build

# Test Django template serving
python3 manage.py collectstatic --no-input
python3 manage.py runserver

# Check in browser:
echo "Open http://localhost:8000 in browser"
echo "Should see React frontend instead of API endpoints"