#!/bin/bash

# Create backup directory
BACKUP_DIR="/var/backups/onayathabit"
mkdir -p $BACKUP_DIR

# Backup data.json
cp /var/www/onayathabit/data.json $BACKUP_DIR/data_$(date +%Y%m%d).json

# Keep only last 7 days of backups
find $BACKUP_DIR -name "data_*.json" -mtime +7 -delete

echo "Backup completed!" 