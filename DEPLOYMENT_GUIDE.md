# SILBERREH GmbH Website - VPS Deployment Guide

## Übersicht

Diese Anleitung zeigt dir, wie du die SILBERREH GmbH Website auf einem frischen VPS mit GitHub-Integration deployest. Das Setup umfasst automatische Updates, SSL-Verschlüsselung, und eine robuste Produktionsumgebung.

## Systemanforderungen

- Ubuntu 24.04 LTS (empfohlen) oder Ubuntu 22.04 LTS
- Mindestens 2GB RAM, 20GB Speicher
- Root-Zugang oder sudo-Berechtigungen
- Domain-Name (z.B. silberreh.de)

## 1. Server-Vorbereitung

### 1.1 System aktualisieren

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Grundlegende Pakete installieren

```bash
sudo apt install -y curl wget git unzip software-properties-common build-essential ca-certificates gnupg lsb-release
```

### 1.3 Firewall konfigurieren

```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw --force enable
```

### 1.4 Swap-Datei erstellen (optional, aber empfohlen)

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 1.5 Zeitzone konfigurieren

```bash
sudo timedatectl set-timezone Europe/Berlin
```

## 2. Node.js Installation

### 2.1 Node.js 20.x installieren

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2.2 Installation verifizieren

```bash
node --version  # sollte v20.x.x anzeigen
npm --version   # sollte eine npm-Version anzeigen
```

## 3. PostgreSQL Installation

### 3.1 PostgreSQL installieren

```bash
sudo apt install -y postgresql postgresql-contrib
```

**Hinweis für Ubuntu 24.04:** PostgreSQL 16 wird standardmäßig installiert.

### 3.2 PostgreSQL-Benutzer und Datenbank erstellen

```bash
sudo -u postgres psql
```

In der PostgreSQL-Konsole:

```sql
CREATE USER silberreh WITH PASSWORD 'IhrSicheresPasswort123!';
CREATE DATABASE silberreh_db OWNER silberreh;
GRANT ALL PRIVILEGES ON DATABASE silberreh_db TO silberreh;
\q
```

### 3.3 PostgreSQL für lokale Verbindungen konfigurieren

```bash
# PostgreSQL Version ermitteln
PG_VERSION=$(sudo -u postgres psql -t -c "SELECT version();" | grep -oP "\d+\.\d+" | head -1 | cut -d. -f1)
sudo nano /etc/postgresql/$PG_VERSION/main/pg_hba.conf
```

Ändere die Zeile:
```
local   all             all                                     peer
```
zu:
```
local   all             all                                     md5
```

PostgreSQL neustarten:
```bash
sudo systemctl restart postgresql
```

## 4. Nginx Installation

### 4.1 Nginx installieren

```bash
sudo apt install -y nginx
```

### 4.2 Nginx aktivieren

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

## 5. SSL-Zertifikat (Let's Encrypt)

### 5.1 Certbot installieren

```bash
sudo apt install -y snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -sf /snap/bin/certbot /usr/bin/certbot
```

### 5.2 SSL-Zertifikat erstellen

```bash
sudo certbot --nginx -d silberreh.de -d www.silberreh.de
```

## 6. Anwendung deployment

### 6.1 Deploy-Benutzer erstellen

```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```

### 6.2 SSH-Keys für deploy-Benutzer einrichten

```bash
sudo su - deploy
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Füge deinen öffentlichen SSH-Key hinzu:
```bash
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 6.3 GitHub SSH-Key generieren

```bash
ssh-keygen -t ed25519 -C "deploy@silberreh.de"
cat ~/.ssh/id_ed25519.pub
```

Füge den öffentlichen Key zu deinem GitHub-Repository hinzu (Settings → Deploy keys).

### 6.4 Repository klonen

```bash
cd /home/deploy
git clone git@github.com:IhrUsername/silberreh-website.git
cd silberreh-website
```

### 6.5 Abhängigkeiten installieren

```bash
npm install
```

### 6.6 Umgebungsvariablen konfigurieren

```bash
nano .env
```

Füge folgende Variablen hinzu:
```env
NODE_ENV=production
DATABASE_URL=postgresql://silberreh:IhrSicheresPasswort123!@localhost:5432/silberreh_db
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@silberreh.de
SMTP_PASS=IhrAppPasswort
```

### 6.7 Datenbank-Schema erstellen

```bash
npm run db:push
```

### 6.8 Anwendung bauen

```bash
npm run build
```

## 7. PM2 Process Manager

### 7.1 PM2 installieren

```bash
sudo npm install -g pm2
```

### 7.2 PM2 Konfiguration erstellen

```bash
nano ecosystem.config.js
```

Inhalt:
```javascript
module.exports = {
  apps: [{
    name: 'silberreh-website',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
```

### 7.3 Logs-Ordner erstellen

```bash
mkdir logs
```

### 7.4 Anwendung mit PM2 starten

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

Den angezeigten Befehl ausführen (sudo).

## 8. Nginx-Konfiguration

### 8.1 Nginx-Konfiguration erstellen

```bash
sudo nano /etc/nginx/sites-available/silberreh.de
```

Inhalt:
```nginx
server {
    listen 80;
    server_name silberreh.de www.silberreh.de;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name silberreh.de www.silberreh.de;

    ssl_certificate /etc/letsencrypt/live/silberreh.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/silberreh.de/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
    
    location /static {
        alias /home/deploy/silberreh-website/dist/public;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 8.2 Konfiguration aktivieren

```bash
sudo ln -s /etc/nginx/sites-available/silberreh.de /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 9. Automatische Deployment-Pipeline

### 9.1 Deployment-Script erstellen

```bash
nano /home/deploy/deploy.sh
```

Inhalt:
```bash
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
```

### 9.2 Script ausführbar machen

```bash
chmod +x /home/deploy/deploy.sh
```

### 9.3 GitHub Webhook einrichten

Erstelle einen Webhook-Endpunkt:

```bash
nano /home/deploy/webhook.js
```

Inhalt:
```javascript
const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');

const secret = 'IhrWebhookSecret123!';
const port = 3001;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            const signature = req.headers['x-hub-signature-256'];
            const expectedSignature = 'sha256=' + crypto
                .createHmac('sha256', secret)
                .update(body)
                .digest('hex');
            
            if (signature === expectedSignature) {
                console.log('Webhook received, starting deployment...');
                
                exec('/home/deploy/deploy.sh', (error, stdout, stderr) => {
                    if (error) {
                        console.error('Deployment failed:', error);
                        res.statusCode = 500;
                        res.end('Deployment failed');
                    } else {
                        console.log('Deployment successful:', stdout);
                        res.statusCode = 200;
                        res.end('Deployment successful');
                    }
                });
            } else {
                res.statusCode = 401;
                res.end('Unauthorized');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(port, () => {
    console.log(`Webhook server running on port ${port}`);
});
```

### 9.4 Webhook-Service mit PM2

```bash
pm2 start /home/deploy/webhook.js --name "silberreh-webhook"
pm2 save
```

### 9.5 Nginx-Konfiguration für Webhook erweitern

```bash
sudo nano /etc/nginx/sites-available/silberreh.de
```

Füge in den Server-Block hinzu:
```nginx
location /webhook {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Nginx neustarten:
```bash
sudo systemctl reload nginx
```

## 10. GitHub Webhook konfigurieren

1. Gehe zu deinem GitHub-Repository
2. Settings → Webhooks → Add webhook
3. Payload URL: `https://silberreh.de/webhook`
4. Content type: `application/json`
5. Secret: `IhrWebhookSecret123!`
6. Events: `Just the push event`
7. Active: ✓

## 11. Monitoring und Wartung

### 11.1 Log-Überwachung

```bash
# PM2 Logs ansehen
pm2 logs

# Nginx-Logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# System-Logs
journalctl -f
```

### 11.2 Automatische SSL-Erneuerung

```bash
# Cronjob für SSL-Erneuerung
sudo crontab -e
```

Füge hinzu:
```bash
0 12 * * * /snap/bin/certbot renew --quiet && /usr/bin/systemctl reload nginx
```

**Hinweis für Ubuntu 24.04:** Certbot wird über snap installiert, daher der Pfad `/snap/bin/certbot`.

### 11.3 Regelmäßige Backups

```bash
nano /home/deploy/backup.sh
```

Inhalt:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump -U silberreh -h localhost silberreh_db > /home/deploy/backups/db_backup_$DATE.sql
tar -czf /home/deploy/backups/files_backup_$DATE.tar.gz /home/deploy/silberreh-website
find /home/deploy/backups -name "*.sql" -mtime +7 -delete
find /home/deploy/backups -name "*.tar.gz" -mtime +7 -delete
```

```bash
mkdir -p /home/deploy/backups
chmod +x /home/deploy/backup.sh
```

Cronjob hinzufügen:
```bash
crontab -e
```

```bash
0 2 * * * /home/deploy/backup.sh
```

## 12. Finale Schritte

### 12.1 Dienste überprüfen

```bash
sudo systemctl status nginx
sudo systemctl status postgresql
pm2 status
```

### 12.2 Website testen

1. Öffne `https://silberreh.de`
2. Teste alle Seiten und Funktionen
3. Teste das Kontaktformular
4. Überprüfe SSL-Zertifikat

### 12.3 GitHub-Integration testen

1. Mache eine kleine Änderung im Repository
2. Committe und pushe die Änderung
3. Überprüfe, ob die Website automatisch aktualisiert wird

## Troubleshooting

### Häufige Probleme

**PM2 Anwendung startet nicht:**
```bash
pm2 logs silberreh-website
```

**Nginx-Fehler:**
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

**Datenbankverbindung fehlgeschlagen:**
```bash
sudo -u postgres psql -l
```

**SSL-Zertifikat-Probleme:**
```bash
sudo certbot certificates
sudo certbot renew --dry-run
```

**Ubuntu 24.04 spezifische Probleme:**
```bash
# Snap-Dienste überprüfen
sudo snap services certbot
sudo snap logs certbot
```

### Support-Befehle

```bash
# PM2 Anwendung neustarten
pm2 restart silberreh-website

# Nginx neustarten
sudo systemctl restart nginx

# PostgreSQL neustarten
sudo systemctl restart postgresql

# Alle Logs anzeigen
pm2 logs --lines 50
```

## Sicherheitshinweise

1. Regelmäßige System-Updates: `sudo apt update && sudo apt upgrade`
2. Firewall-Regeln überprüfen: `sudo ufw status`
3. SSL-Zertifikate überwachen: `sudo certbot certificates`
4. Starke Passwörter für Datenbank und Webhook-Secret verwenden
5. Regelmäßige Backups der Datenbank und Dateien
6. **Ubuntu 24.04 spezifisch:** Snap-Updates überwachen: `sudo snap refresh`

## Nächste Schritte

Nach erfolgreichem Deployment:

1. Google Analytics einrichten
2. Google Search Console konfigurieren
3. Monitoring-Tools installieren (optional)
4. Performance-Optimierungen implementieren
5. Automatische Backups in die Cloud erweitern

---

**Hinweis:** Diese Anleitung ist optimiert für Ubuntu 24.04 LTS. Für ältere Ubuntu-Versionen oder andere Distributionen können die Befehle variieren.