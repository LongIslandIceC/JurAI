# Formspree Setup Anleitung

Das Kontaktformular auf der Website nutzt Formspree. Um es zu aktivieren:

## Schritt 1: Bei Formspree registrieren

1. Gehen Sie zu https://formspree.io
2. Registrieren Sie sich mit Ihrer E-Mail (christopher@juraiconsulting.com)
3. Bestätigen Sie Ihre E-Mail-Adresse

## Schritt 2: Neues Formular erstellen

1. Klicken Sie auf "+ New Form"
2. Name: "JurAI Kontaktformular"
3. Email: christopher@juraiconsulting.com (Ihre E-Mail, an die Anfragen gesendet werden)

## Schritt 3: Form-ID kopieren

Nach dem Erstellen erhalten Sie eine **Form-ID** (z.B. `xpzvxyzw`).

## Schritt 4: Form-ID in Website eintragen

Öffnen Sie `index.html` und ersetzen Sie:

```html
<form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

durch:

```html
<form ... action="https://formspree.io/f/xpzvxyzw" ...>
```

(Ersetzen Sie `xpzvxyzw` mit Ihrer echten Form-ID)

## Schritt 5: Committen und pushen

```bash
git add index.html
git commit -m "Configure Formspree with form ID"
git push
```

## Hinweis

Formspree ist **kostenlos** für bis zu 50 Submissions pro Monat. Für mehr benötigen Sie einen bezahlten Plan.

## Testen

Nachdem Sie die Form-ID eingetragen haben:
1. Öffnen Sie die Website
2. Füllen Sie das Kontaktformular aus
3. Senden Sie es ab
4. Sie sollten eine E-Mail an christopher@juraiconsulting.com erhalten
