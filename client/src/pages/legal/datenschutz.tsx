import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";

export default function Datenschutz() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Datenschutzerklärung - SILBERREH GmbH | DSGVO-konform | Bergheim"
        description="Datenschutzerklärung der SILBERREH GmbH - DSGVO-konforme Informationen zum Datenschutz und zur Datenverarbeitung."
        keywords="Datenschutz SILBERREH, DSGVO, Datenschutzerklärung, Datenverarbeitung"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Informationen gemäß DSGVO zum Datenschutz
            </p>
          </div>
        </div>
      </section>
      
      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    1. Datenschutz auf einen Blick
                  </h2>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Datenerfassung auf unserer Website
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    2. Allgemeine Hinweise und Pflichtinformationen
                  </h2>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Datenschutz
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    SILBERREH GmbH<br />
                    Kentener Wiesen 39a<br />
                    50126 Bergheim<br />
                    Telefon: +49 2271 9877397<br />
                    E-Mail: info@silberreh.de
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
                    möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. 
                    Dazu reicht eine formlose Mitteilung per E-Mail an uns.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht 
                    bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in 
                    datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, 
                    in dem unser Unternehmen seinen Sitz hat.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    3. Datenerfassung auf unserer Website
                  </h2>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Cookies
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf 
                    Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, 
                    unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Server-Log-Dateien
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
                    genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                    Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, 
                    Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Kontaktformular
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                    aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                    zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                    gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    4. Ihre Rechte
                  </h2>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Auskunft, Sperrung, Löschung
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger 
                    und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
                    außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu 
                    verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich 
                    jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Recht auf Datenübertragbarkeit
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in 
                    Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten 
                    in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    5. SSL- bzw. TLS-Verschlüsselung
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                    vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte 
                    Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" 
                    auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    6. Speicherdauer
                  </h2>
                  <p className="text-[hsl(220,9%,43%)] mb-6">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer 
                    genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck 
                    für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen 
                    geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden 
                    Ihre Daten gelöscht, sofern wir keinen anderen rechtmäßigen Gründe für die 
                    Speicherung Ihrer personenbezogenen Daten haben.
                  </p>
                  
                  <p className="text-[hsl(220,9%,43%)] text-sm mt-8">
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
