# Hoare Lab

Interaktive Lernseite zum Hoare-Kalkül für das erste Studienjahr Informatik (Vorlesung *Programmierung*, RWTH Aachen) – auf Deutsch und Englisch.

Interactive study site for Hoare logic in the first year of computer science (*Programmierung* lecture, RWTH Aachen) – in German and English.

## Inhalt / Contents

- **Hoare-Kalkül:** Motivation, Geschichte, die sieben Regeln, Rückwärts-Rechner für die Zuweisungsregel, Invarianten-Tracer, Terminierung, Spickzettel.
- **Übungen (11):** geführte Aufgaben mit gegebener oder selbst zu findender Schleifeninvariante, dazu if/else und Arrays. Ein Prüfer testet Invarianten automatisch und zeigt Gegenbeispiele.
- **Klausur-Simulation:** Aufgabe im Stil der schriftlichen Prüfung, mit optionalem Zeitlimit und Punktebewertung.

## Aufbau / Structure

- `index.html` – die fertige Seite (eine Datei, ohne Abhängigkeiten außer Google Fonts).
- `src/` – Quelltexte: `src.html` (Markup und CSS), `core.js` (Parser, Auswertung, Prüfer), `exercises.js` und `exercises2.js` (Aufgaben), `app.js` (Oberfläche).
- Neu bauen / rebuild: `cd src && python3 build.py`

Unabhängige Lernhilfe, kein offizielles Angebot der RWTH Aachen.
