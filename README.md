# Hüllwerk GmbH – Website

Statische Website (HTML/CSS/JS, ohne Build-Schritt) nach den Vorgaben in [`DESIGN.md`](DESIGN.md).

## Struktur

- `index.html` – Startseite: Hero, Leistungen, Vertrauen, Vorher/Nachher, Referenzen, Ablauf, Einzugsgebiet, Offertformular, Kontakt
- `impressum.html`, `datenschutz.html` – rechtliche Seiten (Entwürfe)
- `assets/css/styles.css` – alle Stile, Farb-Tokens aus DESIGN.md
- `assets/js/main.js` – Kopfzeile, Mobilmenü, Einblenden, Vorher/Nachher-Regler, Formularprüfung

## Lokal ansehen

`index.html` im Browser öffnen oder `python3 -m http.server` im Ordner starten.

## Vor dem Livegang offen

- [ ] Bild-Platzhalter (`.photo--placeholder`) durch eigene Fotos ersetzen (WebP/AVIF, `loading="lazy"` ausser Hero)
- [ ] Referenztexte durch echte Projekte ersetzen (nur mit Erlaubnis der Auftraggeber)
- [ ] E-Mail-Adresse prüfen (aktuell Platzhalter `info@huellwerk.ch`)
- [ ] Formular-Endpunkt im `action`-Attribut von `#offer-form` eintragen (z. B. Formspree oder eigenes PHP-Skript)
- [x] Original-Logo eingebunden (`assets/img/logo/`), Farben abgeglichen
- [ ] Impressum: Name der Geschäftsführung ergänzen; Datenschutzerklärung rechtlich prüfen
- [ ] Optional: Schriften lokal einbinden statt über Google Fonts
