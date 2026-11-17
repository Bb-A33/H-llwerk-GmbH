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

## Livegang mit Netlify (Empfehlung)

1. Konto auf netlify.com erstellen, «Add new site» → «Import from Git» → dieses GitHub-Repository, Branch `main`. Kein Build-Befehl, Veröffentlichungsordner: `/`.
2. Unter «Forms» die Formularerkennung aktivieren, danach unter «Form notifications» eine E-Mail-Benachrichtigung an info@huellwerk.com einrichten.
3. Unter «Domain management» `huellwerk.com` hinzufügen. Netlify zeigt die DNS-Einträge an, die gesetzt werden müssen.
4. Die Domain wurde über Google Workspace gekauft; die DNS-Verwaltung liegt meist bei Squarespace Domains (vorher Google Domains). Dort die von Netlify angegebenen Einträge für `huellwerk.com` und `www` setzen.
   **Wichtig:** Die MX-Einträge von Google Workspace (E-Mail) nicht löschen oder ändern, sonst kommen keine E-Mails mehr an.
5. HTTPS stellt Netlify automatisch aus. Danach Formular einmal mit einer echten Testanfrage prüfen.

Lokal testen: `python3 -m http.server` im Projektordner. Das Formular meldet lokal einen Fehler, weil dort kein Formulardienst läuft.
