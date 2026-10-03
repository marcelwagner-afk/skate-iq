import { Card } from '../ui/components';

/**
 * Datenschutzerklärung (DSGVO) – bewusst NICHT über i18n:
 * Rechtstexte gelten verbindlich in deutscher Sprache.
 */
const H = ({ children }: { children: React.ReactNode }) => <h2 className="font-bold text-base">{children}</h2>;
const P = ({ children }: { children: React.ReactNode }) => <p className="text-sm ink-2 mt-1.5 leading-relaxed">{children}</p>;

export default function Datenschutz() {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Datenschutzerklärung</h1>
      <p className="text-sm ink-2">
        Der Schutz personenbezogener Daten ist Grundprinzip von SKATE IQ: keine Werbe-Tracker,
        keine Analyse-Cookies, keine Weitergabe an Dritte zu Werbezwecken, Datenminimierung
        (insbesondere keine Geburtsdaten von Athletinnen und Athleten). Nachfolgend informieren
        wir gemäß Art. 13, 14 DSGVO über die Verarbeitung personenbezogener Daten.
      </p>

      <Card>
        <H>1. Verantwortlicher</H>
        <P>
          Marcel Wagner, SKATE IQ (Einzelunternehmen), Eichendorffstr. 38, 75031 Eppingen,
          Deutschland, E-Mail: <a className="underline" href="mailto:marcel.wagner@w-dfs.de">marcel.wagner@w-dfs.de</a>.
          Ein Datenschutzbeauftragter ist nicht bestellt, da keine gesetzliche Pflicht besteht.
        </P>
      </Card>

      <Card>
        <H>2. Hosting (GitHub Pages)</H>
        <P>
          Diese Website wird als statische Seite über GitHub Pages ausgeliefert (GitHub, Inc.,
          88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA; in der EU: GitHub B.V.,
          Niederlande). Beim Aufruf verarbeitet GitHub technisch notwendige Verbindungsdaten
          (IP-Adresse, Datum/Uhrzeit, abgerufene Datei, User-Agent) in Server-Logs. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, stabilen
          Betrieb). Eine Übermittlung in die USA ist möglich; GitHub ist unter dem EU-US Data
          Privacy Framework zertifiziert, ergänzend gelten Standardvertragsklauseln. Details:{' '}
          <a className="underline" href="https://docs.github.com/privacy" target="_blank" rel="noreferrer">GitHub Privacy Statement</a>.
          Wir selbst erheben beim bloßen Besuch keine personenbezogenen Daten und setzen keine
          Analyse- oder Tracking-Dienste ein.
        </P>
      </Card>

      <Card>
        <H>3. Lokale Speicherung im Browser</H>
        <P>
          Die Anwendung speichert ausschließlich funktionale Einstellungen (gewählte Sprache,
          Darstellung) im localStorage Ihres Browsers. Diese Daten verbleiben auf Ihrem Gerät,
          werden nicht an uns oder Dritte übertragen und sind für die gewünschte Funktion
          technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO). Sie können
          sie jederzeit über die Browserfunktionen löschen. Werbe- oder Tracking-Cookies werden
          nicht gesetzt.
        </P>
      </Card>

      <Card>
        <H>4. Zugangsgeschützter Bereich</H>
        <P>
          Der Echtdaten-Bereich ist durch eine clientseitige Verschlüsselung (AES-256-GCM)
          geschützt. Benutzername und Passwort werden ausschließlich lokal in Ihrem Browser zur
          Entschlüsselung verwendet und nicht an einen Server übertragen oder bei uns gespeichert;
          in der Seite selbst sind Benutzernamen nur als kryptografische Hashes hinterlegt.
        </P>
      </Card>

      <Card>
        <H>5. Verarbeitung von Athletendaten (Wettkampfergebnisse)</H>
        <P>
          SKATE IQ wertet offiziell veröffentlichte Wettkampfergebnisse des Rollkunstlaufs aus
          (Name, Nation, ggf. Verein, Wettkampfklasse, Platzierungen, Punktwerte einschließlich
          veröffentlichter Wertungsdetails). Zweck ist die sportfachliche Leistungsanalyse für
          Athletinnen und Athleten, Trainerinnen und Trainer sowie Verbände. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. f DSGVO: Die Daten stammen aus von den Veranstaltern bewusst
          veröffentlichten Ergebnislisten des öffentlichen Sportgeschehens; schutzwürdige
          entgegenstehende Interessen werden durch Schutzmaßnahmen gewahrt. Zu diesen Maßnahmen
          gehören: keine Erhebung von Geburtsdaten (Altersangaben nur über die Wettkampfklasse),
          Echtdaten ausschließlich in einem zugangsbeschränkten Bereich für berechtigte Nutzer,
          in der öffentlichen Demo ausschließlich fiktive Athleten, sowie rein deskriptive
          Kennzahlen. Es finden keine automatisierten Entscheidungen im Sinne des Art. 22 DSGVO
          statt: Alle Werte sind rechnerische Einordnungen; Nominierungs- und Kaderentscheidungen
          treffen ausschließlich Menschen in den zuständigen Verbänden.
        </P>
      </Card>

      <Card>
        <H>6. Kontaktaufnahme</H>
        <P>
          Bei Kontakt per E-Mail verarbeiten wir die mitgeteilten Daten (Adresse, Inhalt) zur
          Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO bei vertraglichem Bezug, sonst
          Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden gelöscht, sobald sie für die Bearbeitung
          nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
        </P>
      </Card>

      <Card>
        <H>7. Ihre Rechte</H>
        <P>
          Sie haben gegenüber dem Verantwortlichen das Recht auf Auskunft (Art. 15 DSGVO),
          Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18)
          und Datenübertragbarkeit (Art. 20). <b>Widerspruchsrecht (Art. 21 DSGVO): Sie können
          einer auf Art. 6 Abs. 1 lit. f DSGVO gestützten Verarbeitung – insbesondere der
          Darstellung Ihrer Wettkampfergebnisse in diesem Angebot – jederzeit aus Gründen, die
          sich aus Ihrer besonderen Situation ergeben, widersprechen.</b> Richten Sie Anfragen
          formlos an die oben genannte E-Mail-Adresse. Bei Minderjährigen können die Rechte durch
          die Sorgeberechtigten ausgeübt werden. Zudem besteht ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde, z.&nbsp;B. beim Landesbeauftragten für den Datenschutz und
          die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart.
        </P>
      </Card>

      <Card>
        <H>8. Speicherdauer und Änderungen</H>
        <P>
          Wettkampfdaten werden gespeichert, solange sie für die sportfachliche Längsschnitt-Analyse
          erforderlich sind; einem berechtigten Widerspruch wird durch Entfernung oder
          Pseudonymisierung entsprochen. Diese Erklärung wird bei Änderungen des Angebots
          (z.&nbsp;B. Einführung von Nutzerkonten oder Zahlungsabwicklung) angepasst.
        </P>
      </Card>

      <p className="text-xs ink-3">Diese Rechtsseiten gelten verbindlich in deutscher Sprache. · Stand: Oktober 2026</p>
    </div>
  );
}
