import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/lib/seo";
import { Sparkles, Check, ArrowRight, Shield, Clock, Award, Target, Cog, CheckCircle, Users, Building, Coffee, Computer, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export default function Grundreinigung() {
  const [openFaqItems, setOpenFaqItems] = useState<string[]>([]);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaqItem = (item: string) => {
    setOpenFaqItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const features = [
    "Komplette Bodenreinigung aller Oberflächen",
    "Sanitärbereich-Tiefenreinigung und Desinfektion",
    "Fenster- und Rahmenreinigung innen/außen",
    "Heizkörper- und Lüftungsreinigung",
    "Türen und Zargen komplett",
    "Lichtschalter und Steckdosen",
    "Decken- und Wandreinigung",
    "Entrümpelung und Entsorgung"
  ];

  const applications = [
    "Wohnungen und Häuser",
    "Büros und Verwaltung",
    "Praxen und Kliniken",
    "Geschäfte und Ladenlokale",
    "Kanzleien und Beratung",
    "Gastronomie und Hotels",
    "Immobilien nach Auszug",
    "Neubau-Endreinigung"
  ];

  const faqItems = [
    {
      id: "difference",
      question: "Was ist der Unterschied zwischen Grundreinigung und Unterhaltsreinigung?",
      answer: "Grundreinigung ist eine intensive, einmalige Tiefenreinigung aller Bereiche, während Unterhaltsreinigung regelmäßige Standardreinigung ist. Grundreinigung wird bei Einzug, Auszug oder besonderen Anlässen durchgeführt."
    },
    {
      id: "duration",
      question: "Wie lange dauert eine Grundreinigung?",
      answer: "Je nach Größe und Zustand der Räume dauert eine Grundreinigung 1-3 Tage. Wohnungen (80m²) benötigen meist 1 Tag, größere Büros oder Praxen entsprechend länger."
    },
    {
      id: "equipment",
      question: "Bringen Sie alle Reinigungsmittel mit?",
      answer: "Ja, wir bringen alle professionellen Reinigungsmittel, Dampfreiniger und Spezialausrüstung mit. Sie müssen nichts bereitstellen."
    },
    {
      id: "guarantee",
      question: "Gibt es eine Garantie auf die Grundreinigung?",
      answer: "Ja, wir garantieren zufriedenstellende Ergebnisse. Bei Nachbesserungsbedarf kommen wir kostenfrei zurück."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Grundreinigung Bergheim - Professionelle Tiefenreinigung | SILBERREH GmbH | #1 Grundreinigung"
        description="⭐ Professionelle Grundreinigung in Bergheim, Köln & Düsseldorf ⭐ Tiefenreinigung ⭐ Dampfreinigung ⭐ Einzug/Auszug ⭐ Über 20 Jahre Erfahrung ⭐ Kostenlose Beratung ☎ +49 1525 3090504"
        keywords="Grundreinigung Bergheim, Tiefenreinigung Köln, Dampfreinigung Düsseldorf, Einzugsreinigung NRW, Auszugsreinigung, Grundreinigung Preise, Grundreinigung Angebot, Grundreinigung Kosten, Grundreinigung Wohnung, Grundreinigung Büro"
        canonical="https://silberreh.de/services/grundreinigung"
        ogType="service"
        ogImage="https://silberreh.de/images/grundreinigung-service.jpg"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Grundreinigung Bergheim",
          "description": "Professionelle Grundreinigung und Tiefenreinigung in Bergheim, Köln und Düsseldorf",
          "serviceType": "Grundreinigung",
          "provider": {
            "@type": "LocalBusiness",
            "name": "SILBERREH GmbH",
            "telephone": "+49 1525 3090504",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kentener Wiesen 39a",
              "addressLocality": "Bergheim",
              "postalCode": "50126",
              "addressCountry": "DE"
            }
          },
          "areaServed": [
            { "@type": "City", "name": "Bergheim" },
            { "@type": "City", "name": "Köln" },
            { "@type": "City", "name": "Düsseldorf" }
          ],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": "Individuell",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "valueAddedTaxIncluded": true,
              "priceCurrency": "EUR",
              "price": "Individuell",
              "unitText": "nach Aufwand"
            }
          }
        }}
      />
      
      <Navigation />
      
      {/* Hero Section - Increased padding */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-4">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Grundreinigung Bergheim
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Professionelle Grundreinigung und Tiefenreinigung in Bergheim und dem gesamten Rhein-Erft-Kreis. 
              Intensive Reinigung für Wohnungen, Büros und Gewerbeflächen bei Einzug, Auszug oder besonderen Anlässen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Grundreinigung
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                Tiefenreinigung
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Vollversichert
              </Badge>
            </div>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-[hsl(213,78%,32%)] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
            >
              Kostenlose Beratung anfordern
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Warum SILBERREH für Ihre Grundreinigung?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Grundreinigung mit über 20 Jahren Erfahrung - für makellose Sauberkeit
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    20+ Jahre Erfahrung
                  </h3>
                  <p className="text-gray-600">
                    Hunderte erfolgreiche Grundreinigungen in Bergheim und dem gesamten Rhein-Erft-Kreis
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Tiefenreinigung
                  </h3>
                  <p className="text-gray-600">
                    Intensive Reinigung aller Bereiche mit modernster Ausrüstung und Dampfreinigung
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Zuverlässiges Team
                  </h3>
                  <p className="text-gray-600">
                    Geschulte und vertrauensvolle Mitarbeiter für Ihre Grundreinigung
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Service Details */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Unsere Grundreinigung-Leistungen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Tiefenreinigung für alle Bereiche in Bergheim + 80km Umkreis
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Building className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Böden & Oberflächen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Intensive Reinigung aller Bodenbeläge und Oberflächen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Parkett, Laminat und Fliesen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Teppich-Tiefenreinigung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Naturstein und Linoleum
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Spezialreinigung hartnäckiger Flecken
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Coffee className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Sanitär & Küche
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Gründliche Reinigung von Sanitäranlagen und Küchenbereichen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      WC-Anlagen und Badezimmer
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Küchen komplett
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Armaturen und Fliesen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Desinfektion und Kalklösung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Computer className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Fenster & Rahmen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Komplette Fensterreinigung innen und außen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Scheiben innen und außen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Fensterrahmen und Bänke
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Jalousien und Vorhänge
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Rollläden und Markisen
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Sparkles className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Spezialreinigung
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Zusätzliche Reinigungsleistungen für besondere Ansprüche
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Decken und Wandreinigung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Heizkörper und Lüftung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Entrümpelung und Entsorgung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Lichtschalter und Steckdosen
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Anwendungsbereiche
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Unsere Grundreinigung ist ideal für diese Bereiche
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((application, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg">
                  <CardContent className="p-6 flex items-center">
                    <Check className="w-6 h-6 text-[hsl(187,96%,43%)] mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{application}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Antworten auf die wichtigsten Fragen zur Grundreinigung
            </p>
            
            <div className="space-y-6">
              {faqItems.map((item) => (
                <Collapsible key={item.id}>
                  <Card className="glassmorphism border-0 shadow-lg">
                    <CollapsibleTrigger 
                      className="w-full text-left p-6 hover:bg-transparent"
                      onClick={() => toggleFaqItem(item.id)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-[hsl(213,78%,32%)]">
                          {item.question}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-[hsl(187,96%,43%)] transition-transform ${
                          openFaqItems.includes(item.id) ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </CollapsibleTrigger>
                    {openFaqItems.includes(item.id) && (
                      <CollapsibleContent className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </CollapsibleContent>
                    )}
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Grundreinigung anfragen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Kostenlose Beratung und unverbindliches Angebot für Ihre Grundreinigung
            </p>
            
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </div>
  );
}