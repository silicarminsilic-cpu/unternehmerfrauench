# Backend: Schnittstelle und Datenmodell

Die Seite spricht das Backend über `apiBase` (z. B. `/api`) an. Solange `apiBase` leer ist, zeigt sie ehrliche Hinweise und sendet nichts.

## Empfänger aller Formulare
**Alle Formulare landen per E-Mail bei `s.martino@unternehmerfrauen.ch`:** Kontaktformular, Newsletter-/Kursstart-Liste, App-Warteliste, Vorregistrierung, Zugangsanträge. Diese Adresse gehört in die **Server-Konfiguration** (z. B. `FORMS_TO`), nicht in den Seitencode, damit sie nicht von Spam-Robotern eingesammelt wird. Öffentlich genannt wird weiterhin `hi@unternehmerfrauen.ch`.
Zusätzlich jede Einsendung in der Datenbank speichern (Admin-Posteingang) und Absender-Adresse der Systemmails über SPF/DKIM/DMARC der Domain absichern.

## Endpunkte (JSON, POST)
| Pfad | Body | Antwort |
|---|---|---|
| `/lead` | `name, mail, course?, msg, kind?` | `200` wenn gespeichert und Mail verschickt |
| `/auth/request` | `name, mail, message?, role` (`member`/`admin`) | `200`, Status `pending`; Mail an s.martino@ |
| `/auth/login` | `mail, password, role` | `{status:'approved'\|'pending'\|'rejected', role, name}`, bei `approved` ein HttpOnly-, Secure-, SameSite-Cookie |
| `/auth/logout` | – | Session beenden |

Weitere (noch nicht im Frontend): `GET /me` (Kurse, Fortschritt), `POST /progress`, Admin: `GET /admin/requests`, `POST /admin/requests/:id/approve|reject`, `GET /admin/orders|members|leads`, `POST /stripe/webhook`.

## Freigabe-Ablauf (Login erst nach interner Annahme)
1. Person sendet Antrag (`/auth/request`) → Datensatz `access_requests` mit Status `pending`, Mail an Inhaberin.
2. Login ist bis zur Freigabe gesperrt. `/auth/login` liefert für `pending`/`rejected` kein Cookie.
3. Admin gibt frei oder lehnt ab → Status ändert sich, Person erhält Mail; bei Freigabe Link zum Passwort setzen (einmaliger, zeitlich begrenzter Token).
4. **Admin-Rolle** nur durch die Inhaberin; Admin-Endpunkte prüfen Rolle serverseitig, nie nur im Frontend. Empfohlen: zweiter Faktor (TOTP).
Käuferinnen (Stripe-Webhook `checkout.session.completed`) erhalten den Zugang automatisch für `accessMonths` (3), weil die Zahlung die Prüfung ersetzt, falls das so gewünscht ist. Das ist eine Entscheidung der Inhaberin.

## Tabellen (MySQL bei Infomaniak)
- `users(id, mail UNIQUE, name, role, pw_hash, status, created_at)`
- `access_requests(id, user_id?, name, mail, role, message, status, decided_by, decided_at, created_at)`
- `orders(id, user_id, course_slug, net, vat, gross, stripe_session, status, created_at)`
- `entitlements(user_id, course_slug, starts_at, ends_at)`
- `progress(user_id, course_slug, module_index, done_at)`, `notes(user_id, key, text)`
- `leads(id, name, mail, course, kind, msg, status, created_at)`
Passwörter mit Argon2id/bcrypt, nie im Klartext. Daten in der Schweiz hosten, Löschkonzept nach nDSG.

## Technologie-Optionen
PHP 8 + MySQL direkt bei Infomaniak (einfachster Weg), oder ein Dienst wie Supabase/Firebase. Das Frontend ist neutral, nur `apiBase` und die Endpunkte müssen passen.

## Zahlung
Stripe Checkout mit Karte und TWINT (TWINT in Stripe aktivieren, Währung CHF). Checkout-URL je Kurs in `js/config.js` → `checkoutUrl`. MwSt. 8,1 % exklusive, wie auf der Seite angegeben. Keine Rückerstattung: im Checkout und in den AGB identisch formulieren (rechtlich prüfen lassen).
