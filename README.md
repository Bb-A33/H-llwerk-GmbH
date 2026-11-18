# Hüllwerk GmbH – Website

Statische Website (HTML/CSS/JS, ohne Build-Schritt) nach den Vorgaben in [`DESIGN.md`](DESIGN.md).

## Struktur

- `index.html` – Startseite: Hero, Leistungen, Vertrauen, Vorher/Nachher, Referenzen, Ablauf, Einsatzgebiet, Offertformular, Kontakt
- `impressum.html`, `datenschutz.html` – rechtliche Seiten (Entwürfe)
- `assets/css/styles.css` – alle Stile, Farb-Tokens aus DESIGN.md
- `assets/js/main.js` – Kopfzeile, Mobilmenü, Einblenden, Vorher/Nachher-Regler, Formularprüfung

## Lokal ansehen

`index.html` im Browser öffnen oder `python3 -m http.server` im Ordner starten.

## Vor dem Livegang offen

- [x] Projektfotos eingebaut (`assets/img/projekte/`, ohne EXIF-Daten), als Erfahrung des Teams gekennzeichnet
- [x] Original-Logo eingebunden (`assets/img/logo/`), Farben abgeglichen
- [x] E-Mail-Adressen auf huellwerk.com, Impressum vollständig
- [x] Schriften lokal eingebunden (keine Daten an Google Fonts)
- [x] Domain-Angaben (canonical, Sitemap, robots.txt, Vorschaubild), 404- und Danke-Seite
- [ ] Hosting wählen und Formulardienst anschliessen (Formular ist für Netlify Forms vorbereitet)
- [ ] Datenschutzerklärung: Formular-Anbieter ergänzen, rechtlich prüfen lassen, dann Hinweis «Entwurf» entfernen
- [ ] Originalfotos in voller Auflösung nachliefern (schärferes Hero-Bild)
- [ ] Eigene Hüllwerk-Projekte fotografieren und Referenzen schrittweise ersetzen; Vorher-Nachher-Paar vom gleichen Standort

## Hosting: Cloudflare

Live unter https://huellwerk.com (Cloudflare Workers, statische Dateien). Netlify wurde verlassen, weil es im Gratis-Angebot Werbung einblendet.

- Cloudflare Workers mit statischen Dateien: `wrangler.jsonc` führt `build.sh` aus und veröffentlicht nur `dist/` (keine internen Dateien)
- Sicherheits- und Cache-Header: `_headers`
- Formular: FormSubmit (`action` in `index.html`), Weiterleitung auf `danke.html`. Die erste Anfrage löst eine Bestätigungs-Mail an info@huellwerk.com aus, die einmal bestätigt werden muss.
- Domain registriert bei Squarespace, Nameserver bei Cloudflare (kanye/sierra.ns.cloudflare.com). DNS wird bei Cloudflare verwaltet. MX-, SPF- und Google-Einträge nie ändern.
- `_redirects`: www.huellwerk.com → huellwerk.com

Lokal testen: `python3 -m http.server` im Projektordner.
