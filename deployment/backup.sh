#!/bin/bash

# Backup Script für SILBERREH Website
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/deploy/backups"

# Backup-Verzeichnis erstellen falls es nicht existiert
mkdir -p $BACKUP_DIR

# Datenbank-Backup
pg_dump -U silberreh -h localhost silberreh_db > $BACKUP_DIR/db_backup_$DATE.sql

# Dateien-Backup
tar -czf $BACKUP_DIR/files_backup_$DATE.tar.gz /home/deploy/silberreh-website

# Alte Backups löschen (älter als 7 Tage)
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $DATE"