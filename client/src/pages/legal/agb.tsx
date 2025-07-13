import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";

export default function AGB() {
  return (
    <div className="min-h-screen">
      <SEO
        title="AGB - SILBERREH GmbH | Allgemeine Geschäftsbedingungen | Bergheim"
        description="Allgemeine Geschäftsbedingungen der SILBERREH GmbH für Reinigungsdienstleistungen. Rechtssichere Regelungen für unsere Dienstleistungen."
        keywords="AGB SILBERREH, Geschäftsbedingungen, Reinigungsdienstleistungen, Vertragsbedingungen"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Gültig für alle Reinigungsdienstleistungen der SILBERREH GmbH
            </p>
          </div>
        </div>
      </section>
      
      {/* AGB Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 1 Geltungsbereich
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
                    der SILBERREH GmbH (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend 
                    "Auftraggeber") über die Erbringung von Reinigungsdienstleistungen.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 2 Vertragsschluss
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Der Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der 
                    Leistungserbringung zustande. Mündliche Nebenabreden bedürfen der schriftlichen 
                    Bestätigung. Änderungen und Ergänzungen des Vertrages sind nur in schriftlicher 
                    Form wirksam.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 3 Leistungsumfang
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Der Umfang der zu erbringenden Leistungen ergibt sich aus der Leistungsbeschreibung 
                    im Angebot bzw. der Auftragsbestätigung. Zusätzliche Leistungen werden gesondert 
                    berechnet. Der Auftragnehmer ist berechtigt, sich zur Leistungserbringung 
                    qualifizierter Subunternehmer zu bedienen.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 4 Preise und Zahlungsbedingungen
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Es gelten die Preise zum Zeitpunkt der Auftragserteilung. Alle Preise verstehen 
                    sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb von 
                    14 Tagen nach Rechnungsstellung ohne Abzug zu bezahlen. Bei Zahlungsverzug 
                    werden Verzugszinsen in Höhe von 9% über dem Basiszinssatz berechnet.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 5 Termine und Leistungszeiten
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die Leistungserbringung erfolgt zu den vereinbarten Zeiten. Terminänderungen 
                    sind nach Möglichkeit 24 Stunden vorher anzukündigen. Bei kurzfristigen 
                    Absagen durch den Auftraggeber kann eine Ausfallgebühr in Höhe von 50% des 
                    vereinbarten Honorars berechnet werden.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 6 Mitwirkungspflichten des Auftraggebers
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Der Auftraggeber stellt sicher, dass die zu reinigenden Bereiche zugänglich 
                    sind und alle erforderlichen Anschlüsse (Wasser, Strom) zur Verfügung stehen. 
                    Wertgegenstände sind vom Auftraggeber zu sichern. Arbeitsplätze sind soweit 
                    möglich von persönlichen Gegenständen zu befreien.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 7 Haftung und Gewährleistung
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. 
                    Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht 
                    vertragswesentliche Pflichten verletzt werden. Gewährleistungsansprüche sind 
                    unverzüglich, spätestens innerhalb von 24 Stunden nach Leistungserbringung 
                    schriftlich geltend zu machen.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 8 Versicherung
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Der Auftragnehmer verfügt über eine Betriebshaftpflichtversicherung mit einer 
                    Deckungssumme von 2 Millionen Euro. Bei Schäden, die über diese Summe 
                    hinausgehen, haftet der Auftraggeber für den Mehraufwand.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 9 Kündigung
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Dauerverträge können mit einer Frist von 4 Wochen zum Monatsende gekündigt 
                    werden. Die Kündigung bedarf der Schriftform. Das Recht zur fristlosen 
                    Kündigung aus wichtigem Grund bleibt unberührt.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 10 Datenschutz und Vertraulichkeit
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Der Auftragnehmer verpflichtet sich zur Verschwiegenheit über alle 
                    Geschäfts- und Betriebsverhältnisse des Auftraggebers. Die Verarbeitung 
                    personenbezogener Daten erfolgt nach den geltenden Datenschutzbestimmungen.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    § 11 Schlussbestimmungen
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt 
                    die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt das Recht der 
                    Bundesrepublik Deutschland. Gerichtsstand ist Bergheim.
                  </p>
                  
                  <p className="text-[hsl(220,9%,43%)] text-sm mt-8">
                    SILBERREH GmbH<br />
                    Kentener Wiesen 39a<br />
                    50126 Bergheim<br />
                    <br />
                    Stand: Januar 2024
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingElements />
    </div>
  );
}
