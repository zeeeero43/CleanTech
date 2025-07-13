#!/bin/bash

# Deployment Script für SILBERREH Website
set -e

echo "Starting deployment..."

# Ins Projektverzeichnis wechseln
cd /home/deploy/silberreh-website

# Aktuelle Änderungen sichern
git stash

# Neueste Änderungen von GitHub holen
git pull origin main

# Abhängigkeiten aktualisieren
npm install

# Anwendung bauen
npm run build

# Datenbank-Änderungen anwenden
npm run db:push

# PM2 Anwendung neustarten
pm2 restart silberreh-website

echo "Deployment completed successfully!"