import { Card } from '../ui/components';

/**
 * Impressum (§ 5 DDG, § 18 Abs. 2 MStV) – bewusst NICHT über i18n:
 * Rechtstexte gelten verbindlich in deutscher Sprache.
 */
export default function Impressum() {
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Impressum</h1>

      <Card>
        <h2 className="font-bold text-base">Angaben gemäß § 5 DDG</h2>
        <p className="text-sm ink-2 mt-1.5 leading-relaxed">
          Marcel Wagner<br />
          SKATE IQ (Einzelunternehmen)<br />
          Eichendorffstr. 38<br />
          75031 Eppingen<br />
          Deutschland
        </p>
      </Card>

      <Card>
        <h2 className="font-bold text-base">Kontakt</h2>
        <p className="text-sm ink-2 mt-1.5 leading-relaxed">
          E-Mail: <a className="underline" href="mailto:marcel.wagner@w-dfs.de">marcel.wagner@w-dfs.de</a>
        </p>
      </Card>

      <Card>
        <h2 className="font-bold text-base">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="text-sm ink-2 mt-1.5 leading-relaxed">
          Marcel Wagner, Eichendorffstr. 38, 75031 Eppingen
        </p>
      </Card>

      <Card>
        <h2 className="font-bold text-base">Unabhängigkeit</h2>
        <p className="text-sm ink-2 mt-1.5 leading-relaxed">
          SKATE IQ ist ein unabhängiges Analyseprodukt. Es besteht keine Verbindung zu und keine
          Billigung durch World Skate, World Skate Europe oder einen nationalen Verband. Alle
          dargestellten Kennzahlen sind rechnerische Einordnungen aus offiziell veröffentlichten
          Wettkampfergebnissen; offizielle Ranglisten und Nominierungen erstellen ausschließlich
          die zuständigen Verbände. Genannte Marken (z.&nbsp;B. „RollArt") sind Eigentum ihrer
          jeweiligen Inhaber und werden nur beschreibend verwendet.
        </p>
      </Card>

      <Card>
        <h2 className="font-bold text-base">EU-Streitschlichtung und Verbraucherstreitbeilegung</h2>
        <p className="text-sm ink-2 mt-1.5 leading-relaxed">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a className="underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Card>

      <Card>
        <h2 className="font-bold text-base">Haftung für Inhalte und Links</h2>
        <p className="text-sm ink-2 mt-1.5 leading-relaxed">
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte – insbesondere der aus offiziellen
          Ergebnislisten übernommenen Daten und der daraus berechneten Kennzahlen – wird keine
          Gewähr übernommen. Für Inhalte externer Links sind ausschließlich deren Betreiber
          verantwortlich; zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
        </p>
      </Card>

      <Card>
        <h2 className="font-bold text-base">Urheberrecht</h2>
        <p className="text-sm ink-2 mt-1.5 leading-relaxed">
          Die durch den Seitenbetreiber erstellten Inhalte, Auswertungen und Darstellungen
          unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung
          außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.
          Wettkampfergebnisse als solche sind tatsächliche, öffentlich zugängliche Informationen
          der jeweiligen Veranstalter.
        </p>
      </Card>

      <p className="text-xs ink-3">Diese Rechtsseiten gelten verbindlich in deutscher Sprache. · Stand: Oktober 2026</p>
    </div>
  );
}
