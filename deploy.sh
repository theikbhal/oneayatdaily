#!/bin/bash

# Navigate to the project directory
cd /home/ikbhal/workspace/hub

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Restart the application
pm2 restart onayathabit

echo "Deployment completed at $(date)" 