# Checkliste vor dem Livegang

## Muss geklärt sein
- [ ] **AGB und Datenschutzerklärung** von einer Fachperson prüfen lassen (aktuell Entwürfe, im Live-Modus bleibt der Hinweis «Entwurf» sichtbar, bis ihr `keep` in `index.html`/`app.js` entfernt).
- [ ] **Impressum**: Daten stammen von Moneyhouse, bitte selbst gegen Handelsregister prüfen; MwSt-Nummer ergänzen, falls vorhanden.
- [ ] **Dozentinnenprofile**: Texte und Fotos mit Einverständnis ergänzen (heute «Porträt folgt»).
- [ ] **Fotos**: Rechte und Auflösung prüfen (aktuell Ausschnitte aus den Vorlagen, niedrig aufgelöst); Originale einsetzen.
- [ ] **Dritter Kurs**: Name festlegen («Lead Yourself» oder «Life in Balance») und Modulbeschriebe von «She Builds» freigeben.
- [ ] **Rückerstattung**: Formulierung in AGB, Seite und Checkout abgleichen.
- [ ] **Stripe** (Karte, TWINT) einrichten und `checkoutUrl` eintragen; Testzahlung durchführen.
- [ ] **Backend** (siehe BACKEND.md): Formular-Mails an s.martino@unternehmerfrauen.ch, Login mit Freigabe, Admin.
- [ ] Mail-Postfächer `hi@` und `s.martino@` bei Infomaniak aktiv, SPF/DKIM/DMARC gesetzt.

## Technik
- [ ] GitHub-Secrets gesetzt, erster Deploy grün, HTTPS aktiv, `.htaccess`-Header kommen an (z. B. securityheaders.com).
- [ ] Seiten-Navigation läuft über `#`-Adressen: Suchmaschinen sehen nur die Startseite. Für eigene Seiten pro Kurs später echte Unterseiten (`/woman-first/`) anlegen.
- [ ] Sobald das Backend unter anderer Domain läuft: `connect-src` in `.htaccess` ergänzen.
- [ ] Cookie-/Tracking-Hinweis nur nötig, wenn Analyse-Tools eingebunden werden (aktuell keine).
