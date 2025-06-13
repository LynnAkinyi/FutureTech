#!/usr/bin/env bash
set -o errexit

# Navigate to TheBlog directory
cd "$(dirname "$0")"

# Clean existing build files
rm -rf frontend/build/*
rm -rf staticfiles/*

# Build frontend
cd /Users/lynnakinyi/Desktop/GetBlog/TheBlog/frontend || exit
npm install
npm run build
cd ..

# Django setup
python3 -m pip install --upgrade pip
pip install -r requirements.txt
python3 manage.py collectstatic --no-input
python3 manage.py migrate