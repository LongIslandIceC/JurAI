# JurAI Website - Projekt-Kontext für Claude Code

> **Hinweis:** Team, Kontakt und Unternehmensinfos siehe übergeordnete `CLAUDE.md` im JurAI-Ordner.

## WICHTIG: Vor jedem Compact

**Vor dem Ausführen von `/compact` MUSS diese CLAUDE.md aktualisiert werden:**
- Neue/geänderte Dateien dokumentieren
- Letzte Änderungen eintragen
- Gelöschte Dateien entfernen

---

## Projektübersicht

Diese Website ist die Hauptpräsenz unter **juraiconsulting.com**.

- **Technologie:** Statische HTML/CSS/JS Website (kein Framework)
- **Hosting:** GitHub Pages
- **Domain:** juraiconsulting.com

---

## Schnellbefehle

### Localhost starten und öffnen
```bash
cd "/Users/therealchrisbrennan/Library/Mobile Documents/com~apple~CloudDocs/Documents/Christopher/Business/JurAI/Website/JurAI" && python3 -m http.server 8000 & sleep 1 && open http://localhost:8000
```

### Für Sebastian (anderer User-Pfad)
```bash
cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Documents/Christopher/Business/JurAI/Website/JurAI && python3 -m http.server 8000 & sleep 1 && open http://localhost:8000
```

### Laufenden Server finden/beenden
```bash
lsof -i :8000
kill <PID>
```

---

## Dateistruktur

```
JurAI/
├── index.html                 # Hauptseite
├── css/
│   └── styles.css             # Alle Styles (aktuell v73.0)
├── js/
│   └── main.js                # JavaScript (Navigation, Forms, FAQ)
├── assets/                    # Bilder, Logos, Fonts
│
├── LEISTUNGSSEITEN:
│   ├── expert-session.html        # Expert Session (3h/Halbtag/Ganztag)
│   ├── workshop.html              # Redirect → expert-session.html (Legacy-URL)
│   ├── standortbestimmung.html    # Standortbestimmung (3-4 Wochen)
│   ├── ki-einfuehrung.html        # KI-Einführung (4-6 Wochen)
│   └── laufende-begleitung.html   # Laufende Begleitung (min. 3 Monate)
│
├── WEITERE SEITEN:
│   ├── insights.html          # Blog/Artikel
│   ├── downloads.html         # Downloads (noindex)
│   ├── impressum.html         # Impressum
│   ├── datenschutz.html       # Datenschutz
│   └── 404.html               # Fehlerseite
│
├── contracts/                 # Vertragsvorlagen (HTML)
│   ├── vertrag-executive-sparring.html
│   ├── vertrag-operational-enablement.html
│   └── vertrag-strategic-readiness.html
│
└── downloads/
    └── onepager.html          # Onepager
```

---

## Leistungspakete (Mapping)

| Leistung | Dauer | Detailseite | Vertrag |
|----------|-------|-------------|---------|
| Expert Session | 3 Stunden / Halbtag / Ganztag | expert-session.html | vertrag-executive-sparring.html |
| Standortbestimmung | ca. 3-4 Wochen | standortbestimmung.html | vertrag-strategic-readiness.html |
| KI-Einführung | ca. 4-6 Wochen | ki-einfuehrung.html | vertrag-operational-enablement.html |
| Laufende Begleitung | min. 3 Monate | laufende-begleitung.html | - |

### Bullet Points auf index.html (Leistungen-Sektion)

**Expert Session:**
- Holt Sie dort ab, wo Sie stehen
- In 3h wissen Sie alles, was Sie wissen müssen
- Alternativ als halb- oder ganztägiger Workshop

**Standortbestimmung:**
- Wie sind Ihre Daten aufgebaut? Welche Prozesse können optimiert werden?
- Welche Lösungen gibt es am Markt?
- Sie erhalten einen ausführlichen Bericht als Entscheidungsgrundlage

**KI-Einführung:**
- Aufbau einer Promptbibliothek für Ihre Anwendungsfälle
- Intensive Schulung aller Nutzer
- Ihr Team nutzt KI mit messbaren Ergebnissen

**Laufende Begleitung:**
- Durchgehende Inspektion und Aktualisierung der Promptbibliothek
- Schulung nach Bedarf
- Schnelle Hilfe, wenn es mal hakt

---

## Berechtigungen für Claude Code

Claude Code darf in diesem Projekt:
- Alle Dateien lesen, bearbeiten und erstellen
- Bash-Befehle ausführen (Server starten, Git, etc.)
- Browser öffnen
- Localhost starten/stoppen

### Erlaubte Aktionen
- `python3 -m http.server` - Lokalen Server starten
- `open http://localhost:*` - Browser öffnen
- `git add`, `git commit`, `git push` - Git-Operationen
- Alle Dateioperationen im Projektordner

---

## Wichtige Hinweise

### CSS-Versionierung
Die `styles.css` wird mit Version-Parameter geladen um Caching zu umgehen:
```html
<link rel="stylesheet" href="css/styles.css?v=73.0" />
```
**Bei CSS-Änderungen: Version hochzählen!**

### Formulare
Kontaktformular nutzt **Web3Forms** (API Key in index.html).

### SEO
- Alle Leistungsseiten haben eigene Meta-Descriptions und Keywords
- Schema.org Structured Data in index.html
- `downloads.html` hat `noindex, nofollow`

### Deployment
Website wird über **GitHub Pages** gehostet. Nach Änderungen:
```bash
git add .
git commit -m "Beschreibung"
git push
```
Änderungen sind nach ca. 1-2 Minuten live.

---

## Letzte Änderungen

| Datum | Änderung |
|-------|----------|
| 20.05.2026 | Leistung umbenannt: "Legal AI Workshop" → "Expert Session" (3h/Halbtag/Ganztag) |
| 20.05.2026 | URL-Rename: workshop.html → expert-session.html (workshop.html bleibt als Redirect) |
| 20.05.2026 | Onepager-Inhalt aktualisiert (downloads/onepager.html) |
| 20.05.2026 | Datenschutz-Stand angeglichen an Impressum: 01. Januar 2026 |
| 20.05.2026 | CSS Version 73.0 |
| 13.05.2026 | Leistungsseiten umbenannt: workshop.html, standortbestimmung.html, ki-einfuehrung.html, laufende-begleitung.html |
| 13.05.2026 | PDF-Modal aus ki-einfuehrung.html entfernt |
| 13.05.2026 | WIP-Seiten gelöscht: enablement.html, clarity-session.html, readiness-blueprint.html |
| 13.05.2026 | Impressum: Adresse Christopher Brennan hinzugefügt (Helene-Weber-Allee 9, 80637 München) |
| 30.04.2026 | Standortbestimmung & KI-Einführung: Textwände → Bullet-Struktur |
| 30.04.2026 | Dauer angepasst: Standortbestimmung 3-4 Wochen, KI-Einführung 4-6 Wochen |
| 30.04.2026 | Neue Seite: laufende-begleitung.html |
| 30.04.2026 | Downloads: Vertragsvorlagen-Sektion entfernt |
| 30.04.2026 | CSS Version 44.0 (überholt) |

---

## Typische Aufgaben

### "Starte localhost" / "Zeig mir die Website"
→ Server starten + Browser öffnen

### "Ändere Text X zu Y"
→ In index.html oder entsprechender Unterseite ändern

### "Push die Änderungen"
→ Git add, commit, push

### "Wie sieht Seite X aus?"
→ Localhost starten und öffnen, oder Datei lesen

---

*Diese Datei wird von Claude Code verwendet, um Kontext über das Projekt zu behalten.*
