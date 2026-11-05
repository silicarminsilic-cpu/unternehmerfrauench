# unternehmerfrauen.ch

Statische Website (HTML, CSS, JavaScript, ohne Build-Schritt) für die Masterclass-Plattform. Ein Push auf `main` lädt die Seite per GitHub Actions zu Infomaniak.

## Struktur
- `index.html`: gesamte Seite, Navigation über Hash-Adressen (`#masterclasses`, `#login`, …)
- `css/style.css`, `css/fonts.css`: Gestaltung, lokal gehostete Schriften (`fonts/`)
- `js/config.js`: **Einstellungen** (`mode`, `apiBase`, Stripe-Links)
- `js/app.js`: Logik, Inhalte, Kundinnen-Bereich, Admin-Bereich
- `.htaccess`: HTTPS, Sicherheits-Header, Caching (Apache bei Infomaniak)
- `docs/BACKEND.md`: Schnittstelle und Datenmodell fürs Backend
- `docs/GO-LIVE.md`: Checkliste vor der Veröffentlichung

## Modi
`js/config.js` → `mode: 'live'` (Standard): keine Demo-Elemente, Kasse als Vorregistrierung, Login mit Freigabe nach interner Prüfung.
`mode: 'demo'` zeigt die Vorschau mit Demo-Kasse und Beispieldaten. Die Demo-Datenbank gibt es nur in der Claude-Vorschau, auf der eigenen Domain bleiben Daten im Browser.

## Einrichtung: GitHub → Infomaniak
1. Neues, **privates** Repository auf GitHub anlegen und den Inhalt dieses Ordners hochladen (Branch `main`).
2. Infomaniak Manager → Hosting → FTP/SSH-Benutzer anlegen (FTPS). Server, Benutzer, Passwort und Zielordner notieren (meist `/sites/unternehmerfrauen.ch/`).
3. GitHub → Settings → Secrets and variables → Actions → vier Secrets anlegen: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_DIR`.
4. Domain `unternehmerfrauen.ch` im Manager auf diese Website zeigen lassen, SSL-Zertifikat (Let's Encrypt) aktivieren.
5. Push auf `main` startet den Workflow (Tab «Actions»). Danach Seite im Browser prüfen.

Lokal ansehen: `python3 -m http.server 8000` im Ordner, dann http://localhost:8000.
