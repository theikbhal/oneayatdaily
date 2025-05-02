#!/bin/bash

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Restart the application
pm2 restart onayathabit

echo "Deployment completed!" 