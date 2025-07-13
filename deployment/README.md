# SILBERREH Website - Deployment Package

## Was ist enthalten?

Dieses Deployment-Package enthält alle notwendigen Dateien für die professionelle Bereitstellung der SILBERREH Website auf einem VPS:

### Dokumentation
- **DEPLOYMENT_GUIDE.md**: Vollständige Schritt-für-Schritt-Anleitung
- **README.md**: Diese Übersicht

### Konfigurationsdateien
- **ecosystem.config.js**: PM2-Konfiguration für Prozess-Management
- **nginx.conf**: Nginx-Konfiguration mit SSL und Proxy-Setup
- **deploy.sh**: Automatisches Deployment-Script
- **webhook.js**: GitHub-Webhook-Server für Auto-Deployment
- **backup.sh**: Automatisches Backup-Script
- **.env.example**: Beispiel-Umgebungsvariablen

## Schnellstart

1. **VPS vorbereiten**: Folge Schritt 1-5 im DEPLOYMENT_GUIDE.md
2. **Projekt klonen**: Repository auf deinen VPS klonen
3. **Konfiguration**: Kopiere die Dateien aus diesem Ordner an die richtigen Stellen
4. **Deployment**: Folge den Schritten 6-12 im DEPLOYMENT_GUIDE.md

## Wichtige Hinweise

### Vor dem Deployment
- Ändere alle Passwörter in den Konfigurationsdateien
- Passe die Domain-Namen an deine Domain an
- Erstelle ein sicheres Webhook-Secret
- Konfiguriere deine SMTP-Einstellungen

### Nach dem Deployment
- Teste alle Funktionen der Website
- Überprüfe die automatischen Backups
- Konfiguriere Monitoring und Alerts
- Setze die GitHub-Webhooks ein

## Support

Bei Problemen mit dem Deployment:
1. Überprüfe die Logs: `pm2 logs` und `sudo tail -f /var/log/nginx/error.log`
2. Teste die Services: `sudo systemctl status nginx postgresql`
3. Verifiziere die Konfiguration: `sudo nginx -t`

## Sicherheit

- Alle Passwörter und Secrets müssen geändert werden
- SSL-Zertifikate sind automatisch konfiguriert
- Firewall-Regeln sind restriktiv gesetzt
- Regelmäßige Updates sind essentiell

---

**Hinweis**: Diese Konfiguration ist für Produktionsumgebungen optimiert und bereit für professionelle Nutzung.