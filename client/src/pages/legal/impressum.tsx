import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Impressum - SILBERREH GmbH | Rechtliche Angaben | Bergheim | HRB 114670"
        description="⭐ Impressum der SILBERREH GmbH - Alle rechtlichen Angaben gemäß § 5 TMG ⭐ Kentener Wiesen 39A, 50126 Bergheim ⭐ HRB 114670 Amtsgericht Köln ⭐ Geschäftsführer: Tarek Yusef ⭐ Professionelle Reinigungsdienstleistungen"
        keywords="Impressum SILBERREH, Rechtliche Angaben, Bergheim, Reinigungsfirma, HRB 114670, Amtsgericht Köln, Tarek Yusef, Gebäudereinigung, Handelsregister"
        canonical="https://silberreh.de/legal/impressum"
        ogType="website"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Impressum SILBERREH GmbH",
          "description": "Rechtliche Angaben der SILBERREH GmbH gemäß § 5 TMG",
          "about": {
            "@type": "LocalBusiness",
            "name": "SILBERREH GmbH",
            "legalName": "SILBERREH GmbH",
            "foundingDate": "2023",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kentener Wiesen 39A",
              "addressLocality": "Bergheim",
              "postalCode": "50126",
              "addressCountry": "DE"
            }
          }
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Impressum
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>
      
      {/* Legal Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    Angaben gemäß § 5 TMG:
                  </h2>
                  
                  <div className="mb-8">
                    <p className="text-[hsl(220,9%,43%)]">
                      <strong>SILBERREH GmbH</strong><br />
                      Kentener Wiesen 39A<br />
                      50126 Bergheim<br />
                      Deutschland
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Vertreten durch:
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-8">
                    Geschäftsführer: Tarek Yusef<br />
                    Einzelvertretungsberechtigt mit der Befugnis im Namen der Gesellschaft mit sich im eigenen Namen oder als Vertreter eines Dritten Rechtsgeschäfte abzuschließen
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Kontakt:
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-8">
                    Telefon: +49 1525 3090504<br />
                    E-Mail: info@silberreh.de
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Registereintrag:
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-8">
                    Eintragung im Handelsregister<br />
                    Registergericht: Amtsgericht Köln<br />
                    Registernummer: HRB 114670<br />
                    Stammkapital: 25.000,00 EUR
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Unternehmensgegenstand:
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-8">
                    Gebäudereinigung, Hausmeister Service, On-Site Management, Arbeitnehmerüberlassung sowie die Montage von Möbeln, Hausrat und sonstigen beweglichen Gegenständen.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Umsatzsteuer-ID:
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-8">
                    Umsatzsteuer-Identifikationsnummer nach §27a UStG: DE3607078946
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-8">
                    Tarek Yusef<br />
                    Kentener Wiesen 39A<br />
                    50126 Bergheim
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Haftungsausschluss:
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-[hsl(213,78%,32%)] mb-2">
                    Haftung für Inhalte
                  </h4>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[hsl(213,78%,32%)] mb-2">
                    Haftung für Links
                  </h4>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir 
                    keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                    Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum 
                    Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige 
                    Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[hsl(213,78%,32%)] mb-2">
                    Urheberrecht
                  </h4>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                    Gebrauch gestattet.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[hsl(213,78%,32%)] mb-2">
                    Datenschutz
                  </h4>
                  <p className="text-[hsl(220,9%,43%)]">
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener 
                    Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, 
                    erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden 
                    ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen 
                    darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.
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
