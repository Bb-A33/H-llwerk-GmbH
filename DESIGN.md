# DESIGN.md – Hüllwerk GmbH

Design-System für die Website der Hüllwerk GmbH (Menzingen ZG).
Fachbetrieb für die Gebäudehülle: Fassaden, Dämmung, Oberflächen.
Einzugsgebiet: Zürich, Zug, Schwyz. Sprache der Website: Deutsch (Schweiz), Sie-Form, kein «ß».

Alle UI-Arbeiten in diesem Projekt halten sich an diese Datei.

---

## 1. Visuelle Grundhaltung

- **Ruhig, präzise, hochwertig.** Die Seite wirkt wie ein Architekturbüro, nicht wie ein typischer Handwerker-Baukasten.
- **Architektonisch:** gerade Linien, klare Kanten, leichte Schrägen als Echo des Logos (drei schräg abgeschnittene Balken).
- **Viel Weissraum.** Inhalte atmen; lieber eine Sektion mehr als eine überladene.
- **Echte Arbeit im Mittelpunkt:** grosse Fotos fertiger Fassaden tragen die Seite, nicht Illustrationen.
- **Vertrauen vor Effekt:** Transparenz, Aufmass, fixe m²-Preise, direkter Kontakt zum Inhaber.

Stichworte: sachlich · solide · warm-neutral · ehrlich · schweizerisch präzise.

---

## 2. Farben

Werte sind aus dem Logo geschätzt. Mit der Original-Logodatei abgleichen und hier aktualisieren.

| Token | Wert | Verwendung |
|---|---|---|
| `--color-ink` | `#262B30` | Anthrazit. Haupttext, Titel, Kopf- und Fusszeile, dunkle Flächen |
| `--color-ink-soft` | `#4A5058` | Sekundärtext, Beschriftungen |
| `--color-accent` | `#B5A48E` | Beige/Taupe. Knöpfe, Linien, Hervorhebungen, aktive Zustände |
| `--color-accent-dark` | `#9A8A74` | Hover-Zustand des Akzents |
| `--color-bg` | `#F5F3EE` | Off-White. Seitenhintergrund |
| `--color-surface` | `#FFFFFF` | Karten, Formulare |
| `--color-line` | `#E2DED6` | Trennlinien, Rahmen |
| `--color-success` | `#4F7A5A` | Formular erfolgreich gesendet |
| `--color-error` | `#A94442` | Formularfehler |

Regeln:
- Der Akzent ist sparsam: höchstens ein beiger Hauptknopf pro Bildschirm.
- Text auf Beige immer in Anthrazit, nie Weiss (Kontrast).
- Keine anderen Markenfarben. Kein Blau, kein Pink, kein Violett, keine Verläufe.
- Dunkle Sektionen (Anthrazit-Hintergrund) mit Off-White-Text sind erlaubt, z. B. für Kontakt-Abschnitt und Fusszeile.

---

## 3. Typografie

| Rolle | Schrift | Stil |
|---|---|---|
| Titel (H1–H2) | Geometrische Groteskschrift, z. B. **Montserrat** oder **Outfit** | 700, Grossbuchstaben für H1, leicht enge Laufweite (-0.01em) |
| Untertitel / Labels | Gleiche Familie | 500, Grossbuchstaben, weit gesperrt (+0.18em), klein (12–14 px) – wie «FASSADEN · DÄMMUNG · OBERFLÄCHEN» |
| Fliesstext | **Inter** oder **Manrope** | 400, 17–18 px, Zeilenhöhe 1.6 |

Skala (Desktop / Mobil):
- H1: 56 / 36 px
- H2: 40 / 28 px
- H3: 24 / 20 px
- Text: 18 / 17 px
- Klein: 14 px

Regeln:
- Fliesstext maximal ca. 70 Zeichen pro Zeile.
- Trennzeichen in Labels: der Mittelpunkt « · ».
- Schweizer Schreibweise: «ss» statt «ß», Anführungszeichen « ».

---

## 4. Komponenten

**Knöpfe**
- Primär: Hintergrund `--color-accent`, Text `--color-ink`, 600, Grossbuchstaben gesperrt, Ecken 2 px, Höhe 48 px.
- Sekundär: transparent, 1 px Rahmen `--color-ink`, Text Anthrazit.
- Hover: Primär wird `--color-accent-dark`; sanfter Übergang 200 ms. Kein Hochspringen, kein Glühen.
- Hauptaktion überall: «Kostenlose Offerte anfragen».

**Karten (Leistungen, Referenzen)**
- Weiss auf Off-White, 1 px Linie `--color-line`, Ecken 2 px, kein Schatten oder nur sehr leicht.
- Bild oben (Seitenverhältnis 4:3), darunter Label, Titel, ein Satz, Textlink «Mehr erfahren →».

**Vorher-Nachher**
- Zwei Fotos nebeneinander (mobil untereinander) oder ein Schieberegler. Beschriftung «Vorher» / «Nachher» als gesperrtes Label.

**Ablauf (5 Schritte)**
- Nummerierte Schritte 01–05 in grossen, dünnen Ziffern im Akzent, mit kurzer Beschreibung.

**Offertformular**
- Felder: Name, Telefon, E-Mail, Ort des Objekts, Leistung (Auswahl), ungefähre Fläche in m², Fotos hochladen, Wunschtermin, Nachricht.
- Beschriftungen immer sichtbar über dem Feld (keine reinen Platzhalter).
- Pflichtfelder markiert, Fehlermeldungen direkt unter dem Feld.

**Kopfzeile**
- Logo links, Navigation rechts, Knopf «Offerte» ganz rechts. Beim Scrollen fixiert und kompakter.

**Fusszeile**
- Anthrazit. Logo hell, Adresse Hauptstrasse 15, 6313 Menzingen, Telefon, E-Mail, Links zu Impressum und Datenschutz, UID CHE-480.936.531.

**Gestaltungselement aus dem Logo**
- Die schräg abgeschnittene Balkenform darf als dezentes Akzentelement vorkommen (z. B. Bildkante oder Abschnittstrenner), höchstens einmal pro Seite.

---

## 5. Layout und Abstände

- Maximale Inhaltsbreite: 1200 px, zentriert.
- 12-Spalten-Raster auf Desktop, 4 Spalten mobil.
- Abstandsskala: 4, 8, 16, 24, 32, 48, 64, 96, 128 px.
- Abstand zwischen grossen Sektionen: 96–128 px Desktop, 64 px mobil.
- Seitenränder mobil: mindestens 20 px.
- Bilder randabfallend erlaubt (Hero, Referenzen), Text nie.

---

## 6. Tiefe und Bewegung

- Flach. Tiefe entsteht durch Fotos und Flächenwechsel, nicht durch Schatten.
- Erlaubte Bewegung: sanftes Einblenden beim Scrollen (Opazität + 16 px Verschiebung, 400 ms), Bild-Zoom auf 1.03 beim Hover über Referenzkarten.
- `prefers-reduced-motion` respektieren: dann keine Animationen.
- Verboten: Parallax-Effekte, Glasmorphismus, Neon, Partikel, verspielte Federanimationen.

---

## 7. Bilder

- Nur eigene, echte Fotos von Hüllwerk-Arbeiten. Keine Stockfotos von lächelnden Handwerkern.
- Gerade, architektonische Bildausschnitte, natürliches Tageslicht, Linien ausgerichtet.
- Keine Adressen, Hausnummern oder erkennbaren Personen ohne Einverständnis.
- Akkord-Objekte nur mit schriftlicher Erlaubnis des Auftraggebers.
- Formate: WebP/AVIF, responsive Grössen, `loading="lazy"` ausser im Hero.

---

## 8. Mobil und Barrierefreiheit

- Zuerst für das Handy gestalten.
- Mobil ein fixierter Balken unten mit zwei Aktionen: «Anrufen» (tel:+41764455276) und «Offerte».
- Antippbare Flächen mindestens 44 × 44 px.
- Kontrast mindestens WCAG AA. Fokuszustände sichtbar (2 px Rahmen in Anthrazit).
- Alle Bilder mit sinnvollem Alternativtext auf Deutsch.

---

## 9. Ton der Texte

- Sie-Form, kurz, konkret, ohne Übertreibungen («beste», «Nr. 1» vermeiden).
- Nutzen statt Fachjargon: «Ihre Fassade hält wieder Jahrzehnte» statt reiner Produktnamen.
- Vertrauen durch Fakten: gemeinsames Aufmass, transparente m²-Preise, versichert, direkter Kontakt zum Inhaber.
- Kernsatz: «Ihre Gebäudehülle in besten Händen.»

---

## Do / Don't

**Do**
- Viel Weissraum, grosse echte Fotos, eine klare Hauptaktion pro Bildschirm.
- Anthrazit für Struktur, Beige nur für Akzente.
- Gesperrte Grossbuchstaben-Labels wie im Logo.

**Don't**
- Keine generischen SaaS-Muster (Verläufe, Glas, schwebende 3D-Blobs, Emojis).
- Keine runden «Pillen»-Knöpfe und keine grossen Eckenradien.
- Keine weiteren Farben, keine Stockfotos, keine Laufschriften.

---

## Anweisung für Claude Code

> Verwende diese DESIGN.md als verbindliche Quelle für alle UI-Arbeiten im Hüllwerk-Projekt. Wenn ein Design-Skill (z. B. Impeccable oder Taste Skill) etwas anderes vorschlägt, gilt diese Datei. Prüfe jede neue Seite mobil und auf Desktop, bevor du sie als fertig meldest.
