# SV Westfalia Osterwick - Website

Moderne Website für den SV Westfalia Osterwick 1923 e.V., gebaut mit Astro und Tailwind CSS.

## 🚀 Tech Stack

- **Astro 4.3.2** - Static Site Generator
- **Tailwind CSS 3.4.1** - Utility-First CSS Framework
- **TypeScript** - Type Safety

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Build-Vorschau
npm run preview
```

## 🌐 Development

Der Development Server läuft standardmäßig auf `http://localhost:4321`

### Trainer-App einbinden

Die Trainerübersicht ist zentral unter `/fussball` eingebunden.

Empfohlener Weg (saubere Website-Darstellung ohne App-Änderung):

1. `trainer-app` öffnen und Daten laden.
2. In der App auf `🌐 Web-Code` klicken.
3. Den erzeugten HTML-Code in `src/content/trainer-export.html` einfügen.
4. `npm run build` ausführen.

Dann werden die Trainer als saubere Karten auf der Website gerendert.
Zusätzlich werden daraus automatisch Mannschaftsseiten unter `/fussball/<team-slug>` erzeugt.

Fallback (optional):
Wenn kein Export gepflegt ist, kann stattdessen eine Live-Ansicht per iFrame genutzt werden.

Dafür eine `.env` im Projekt anlegen:

```bash
PUBLIC_TRAINER_APP_URL=http://localhost:5173
```

Wenn weder Export noch Variable vorhanden sind, zeigt die Seite einen Hinweis.

## 🏗️ Projektstruktur

```
/
├── public/
│   └── assets/
│       └── img/              # Bilder & Logos
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation
│   │   └── Footer.astro      # Footer mit Links
│   ├── layouts/
│   │   └── Layout.astro      # Base Layout
│   └── pages/
│       ├── index.astro       # Startseite
│       ├── fussball.astro    # Fußball-Bereich
│       ├── breitensport.astro
│       └── ...               # Weitere Seiten
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Farbschema

- **Westfalia Rot**: `#dc2626` (Primärfarbe)
- **Anthrazit**: `#0f172a` (Sekundärfarbe)

## 📄 Verfügbare Seiten

- `/` - Startseite
- `/fussball` - Fußball-Abteilung
- `/breitensport` - Breitensport-Kurse
- `/vorstand` - Vorstandsmitglieder
- `/trainer` - Ansprechpartner & Trainer
- `/impressum` - Impressum
- `/datenschutz` - Datenschutzerklärung
- `/downloads` - Download-Bereich
- `/sponsoren` - Unsere Sponsoren

## 🚢 Deployment

Das Projekt wird als statische Website gebaut:

```bash
npm run build
```

Die fertigen Dateien liegen dann im `dist/` Ordner und können auf jeden Static-Hosting-Service deployed werden (z.B. Hetzner, Netlify, Vercel).

## 📝 Lizenz

© 2024 SV Westfalia Osterwick 1923 e.V.
