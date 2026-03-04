# Webseite-Clone Deployment Anleitung

## Voraussetzungen
- SSH-Zugriff auf Hetzner Server (root@89.167.0.28)
- Nginx installiert auf dem Server
- PowerShell auf lokalem PC

## Deployment-Schritte

### 1. Lokaler Build & Upload

```powershell
# Von lokalem PC ausführen:
cd c:\DevProjekte\Webseite-Clone
.\deploy.ps1
```

Das Script macht folgendes:
- `npm install` - Dependencies installieren
- `npm run build` - Statischen Build erstellen (dist/ Ordner)
- `scp` - Dateien auf Server hochladen nach `/var/www/westfalia/`
- Berechtigungen setzen (www-data:www-data)

### 2. Nginx konfigurieren (einmalig)

```bash
# Auf dem Server (SSH):
ssh root@89.167.0.28

# Nginx Config erstellen
sudo nano /etc/nginx/sites-available/westfalia

# Inhalt einfügen (siehe nginx.conf)
# Config aktivieren
sudo ln -s /etc/nginx/sites-available/westfalia /etc/nginx/sites-enabled/

# Nginx testen
sudo nginx -t

# Nginx neuladen
sudo systemctl reload nginx
```

### 3. Domain konfigurieren (optional)

Wenn eine Domain vorhanden ist (z.B. westfalia-osterwick.de):

```bash
# In /etc/nginx/sites-available/westfalia anpassen:
server_name westfalia-osterwick.de www.westfalia-osterwick.de;

# Let's Encrypt SSL installieren:
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d westfalia-osterwick.de -d www.westfalia-osterwick.de
```

### 4. Firewall-Regeln

Port 80 (HTTP) sollte bereits für Kursanmeldung geöffnet sein.
Falls nicht:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp  # Für HTTPS
```

## Update-Workflow

Nach Code-Änderungen:

```powershell
# 1. Lokal: Code ändern & testen
npm run dev  # Test lokal

# 2. Build & Deploy
.\deploy.ps1
```

Fertig! Die Website ist live unter:
- **Temporär**: http://89.167.0.28/westfalia/
- **Mit Domain**: https://westfalia-osterwick.de

## Verzeichnisstruktur auf Server

```
/var/www/westfalia/
├── index.html
├── breitensport/
│   └── index.html
├── fussball/
│   └── index.html
├── trainer/
│   └── index.html
├── impressum/
│   └── index.html
├── datenschutz/
│   └── index.html
└── _astro/
    └── (CSS & JS Bundles)
```

## Troubleshooting

**Problem: 403 Forbidden**
```bash
sudo chown -R www-data:www-data /var/www/westfalia
sudo chmod -R 755 /var/www/westfalia
```

**Problem: 404 Not Found**
```bash
# Prüfe ob Dateien hochgeladen wurden:
ls -la /var/www/westfalia/
```

**Problem: CSS nicht geladen**
```bash
# Nginx Config prüfen:
sudo nginx -t
# Nginx Error-Log prüfen:
sudo tail -f /var/log/nginx/westfalia-error.log
```

## Nächste Schritte (Stufe 2)

- [ ] Echte Bilder von Vereinsaktivitäten einbinden
- [ ] SEO Meta-Tags optimieren
- [ ] Sitemap.xml generieren
- [ ] robots.txt erstellen
- [ ] Google Analytics / Matomo einbinden (DSGVO-konform)
