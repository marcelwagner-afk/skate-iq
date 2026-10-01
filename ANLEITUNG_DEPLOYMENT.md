# SKATE IQ – Deployment auf GitHub Pages

Gleiche Infrastruktur wie beim DRIV-Analyse-Tool: ein öffentliches GitHub-Repository,
GitHub Pages, und die Echtdaten-Version ausschließlich AES-verschlüsselt hinter der
Login-Seite (protect.py-Prinzip). **Echte Verbandsdaten liegen nie unverschlüsselt im
Repository** – `src/data-real/*.local.json`, `zugang/` und die Echtdaten-HTML sind
gitignored, und der Pages-Workflow bricht ab, falls je echte Daten im Build auftauchen.

## 1. Repository anlegen und hochladen (einmalig)

1. Auf github.com: **New repository** → Name `skate-iq` → Public → ohne README anlegen.
2. Dieses Projektpaket entpacken (die git-Historie ist enthalten), dann im Ordner:

   ```
   git remote add origin https://github.com/marcelwagner-afk/skate-iq.git
   git push -u origin main
   ```

3. Im Repo: **Settings → Pages → Source: „GitHub Actions"** wählen.

Der mitgelieferte Workflow (`.github/workflows/deploy.yml`) läuft bei jedem Push:
Tests → Demo-Build (synthetische Athleten) → Echtdaten-Wächter → Veröffentlichung.
Danach ist die **öffentliche Demo** erreichbar unter:

> https://marcelwagner-afk.github.io/skate-iq/

## 2. Geschützte Echtdaten-Version (Login wie beim DRIV-Tool)

Benötigt einmalig lokal: Python 3 und `pip install cryptography`.

1. In den Repo-Ordner legen (beides ist gitignored, landet also nie im Repo):
   - `SKATE_IQ_Rollkunstlauf_ECHTE_DATEN.html` (aus dem Claude-Chat, aktuellste Version)
   - `zugang/benutzer.txt` – Deine bestehende Benutzerliste aus dem DRIV-Projekt
     (eine Zeile je Benutzer: `benutzername;passwort`, Verwalter: `benutzername;passwort;admin`)
2. Im Repo-Ordner ausführen: `python3 deploy/protect.py`
   → erzeugt `login/index.html` (die komplette App AES-256-GCM-verschlüsselt).
3. `git add login/index.html && git commit -m "Login-Seite aktualisiert" && git push`

Nach dem nächsten Pages-Lauf ist die geschützte Version erreichbar unter:

> https://marcelwagner-afk.github.io/skate-iq/login/

Wie beim DRIV-Login können Verwalter nach der Anmeldung Benutzer direkt im Browser
anlegen/ändern und die neu verschlüsselte Seite per GitHub-Token veröffentlichen oder
herunterladen.

## 3. Neue Ergebnisse einspielen (wiederkehrend)

1. `npm run import:artistic [pfad-zum-driv-datenstand]` – erzeugt das lokale Echtdaten-Bundle
   (`src/data-real/bundle.artistic.local.json`, gitignored). Wichtig: Der Datenstand muss durch
   die DRIV-Pipeline **inklusive postpass** gelaufen sein (Netto-TES), sonst schlägt die
   tes+pcs=total-Integritätsprüfung an.
2. `node scripts/make-standalone.mjs --real SKATE_IQ_Rollkunstlauf_ECHTE_DATEN.html`
3. Schritt 2 aus Abschnitt „Geschützte Echtdaten-Version" wiederholen (protect.py → push).

Die öffentliche Demo ändert sich dabei nicht – sie bleibt immer synthetisch.

## Befehle im Überblick

| Befehl | Zweck |
|---|---|
| `npm run dev` / `npm run build` | Demo-Variante (synthetische Daten) |
| `npm run dev:real` / `npm run build:real` | Echtdaten-Variante (lokal, VITE_REAL=1) |
| `npm run import:artistic [root]` | DRIV-Datenstand → kanonisches Bundle |
| `npm test` | 36 Unit-/Integrationstests |
| `node scripts/make-standalone.mjs [--real] out.html` | Ein-Datei-HTML (Doppelklick/file://) |
| `python3 deploy/protect.py` | Echtdaten-HTML → verschlüsselte Login-Seite |
