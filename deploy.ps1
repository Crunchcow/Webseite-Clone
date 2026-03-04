# Deployment Script für Webseite-Clone auf Hetzner
# Erstellt statischen Build und deployed auf Hetzner Server

Write-Host ">>> Deployment Script gestartet" -ForegroundColor Cyan

# Schritt 1: Dependencies installieren
Write-Host "[1/5] Dependencies installieren..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm install fehlgeschlagen" -ForegroundColor Red
    exit 1
}

# Schritt 2: Production Build erstellen
Write-Host "[2/5] Production Build erstellen..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build fehlgeschlagen" -ForegroundColor Red
    exit 1
}

# Schritt 3: Build-Verzeichnis auf Server hochladen
Write-Host "[3/5] Dateien auf Server hochladen..." -ForegroundColor Yellow
$SERVER = "root@89.167.0.28"
$REMOTE_DIR = "/var/www/westfalia"

# Erstelle Remote-Verzeichnis falls nicht vorhanden
ssh $SERVER "mkdir -p $REMOTE_DIR"

# Kopiere Build-Dateien
scp -r dist/* "${SERVER}:${REMOTE_DIR}/"
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Upload fehlgeschlagen" -ForegroundColor Red
    exit 1
}

# Schritt 4: Berechtigungen setzen
Write-Host "[4/5] Berechtigungen setzen..." -ForegroundColor Yellow
ssh $SERVER "chown -R www-data:www-data $REMOTE_DIR && chmod -R 755 $REMOTE_DIR"

# Schritt 5: Nginx-Konfiguration prüfen (optional)
Write-Host "[5/5] Deployment abgeschlossen!" -ForegroundColor Green
Write-Host "Website sollte verfuegbar sein unter: http://89.167.0.28/westfalia" -ForegroundColor Cyan
Write-Host ""
Write-Host "WICHTIG: Nginx muss noch konfiguriert werden!" -ForegroundColor Yellow
Write-Host "SSH zum Server: ssh root@89.167.0.28" -ForegroundColor Gray
Write-Host "Nginx Config: /etc/nginx/sites-available/westfalia" -ForegroundColor Gray
