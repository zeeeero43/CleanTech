import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/lib/seo";
import { Building, Check, ArrowRight, Shield, Clock, Award, Target, Cog, CheckCircle, Users, Briefcase, Coffee, Computer, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export default function Unterhaltsreinigung() {
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
    "Regelmäßige Büroreinigung täglich/wöchentlich",
    "Bodenreinigung und Teppichpflege",
    "Sanitär- und Küchenreinigung",
    "Fenster- und Glasreinigung",
    "Müllentsorgung und Recycling",
    "Desinfektionsservice",
    "Reinigung von Arbeitsplätzen",
    "Flexible Reinigungszeiten"
  ];

  const applications = [
    "Bürogebäude und Verwaltung",
    "Arztpraxen und Kliniken",
    "Kanzleien und Beratungsbüros",
    "Einzelhandel und Geschäfte",
    "Coworking-Spaces",
    "Gastronomie und Cafés",
    "Immobilienbüros",
    "Fitnessstudios und Wellness"
  ];

  const faqItems = [
    {
      id: "frequency",
      question: "Wie oft sollte eine Unterhaltsreinigung durchgeführt werden?",
      answer: "Das hängt von der Bürogröße und Mitarbeiterzahl ab. Wir empfehlen tägliche Reinigung für größere Büros und wöchentliche Reinigung für kleinere Büros."
    },
    {
      id: "hours",
      question: "Können Sie auch außerhalb der Geschäftszeiten reinigen?",
      answer: "Ja, wir reinigen gerne außerhalb Ihrer Geschäftszeiten, um den Betrieb nicht zu stören. Auch am Wochenende sind wir verfügbar."
    },
    {
      id: "hygiene",
      question: "Welche Hygiene-Maßnahmen werden durchgeführt?",
      answer: "Wir führen professionelle Desinfektionsmaßnahmen durch, insbesondere in Sanitärbereichen, Küchen und an Arbeitsplätzen. Alle Oberflächen werden hygienisch gereinigt."
    },
    {
      id: "contract",
      question: "Bieten Sie auch Einzelreinigungen an?",
      answer: "Ja, wir bieten sowohl regelmäßige Reinigungsverträge als auch Einzelreinigungen an. Gerne erstellen wir Ihnen ein individuelles Angebot."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Unterhaltsreinigung Bergheim - Professionelle Gewerbereinigung | SILBERREH GmbH | #1 Reinigungsservice"
        description="⭐ Professionelle Unterhaltsreinigung in Bergheim, Köln & Düsseldorf ⭐ Flexible Zeiten ⭐ Umweltfreundlich ⭐ Zertifiziert ⭐ Versichert ⭐ Über 20 Jahre Erfahrung ⭐ Kostenlose Beratung ☎ +49 1525 3090504"
        keywords="Unterhaltsreinigung Bergheim, Gewerbereinigung Köln, Praxisreinigung Düsseldorf, Geschäftsreinigung NRW, Unterhaltsreinigung Rhein-Erft-Kreis, Unterhaltsreinigung täglich, Unterhaltsreinigung wöchentlich, Unterhaltsreinigung monatlich, Reinigungsservice Büro, Reinigungsfirma Gewerbe, Unterhaltsreinigung Angebot, Unterhaltsreinigung Kosten"
        canonical="https://silberreh.de/services/unterhaltsreinigung"
        ogType="service"
        ogImage="https://silberreh.de/images/unterhaltsreinigung-service.jpg"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Unterhaltsreinigung Bergheim",
          "description": "Professionelle Unterhalts- und Gewerbereinigung in Bergheim, Köln und Düsseldorf",
          "serviceType": "Unterhaltsreinigung",
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
            "price": "ab 15.00",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "15.00",
              "priceCurrency": "EUR",
              "unitText": "pro Stunde"
            }
          }
        }}
      />
      
      <Navigation />
      
      {/* Hero Section - Increased padding */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-4">
            <Building className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Unterhaltsreinigung Bergheim
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Professionelle Unterhalts- und Gewerbereinigung in Bergheim und dem gesamten Rhein-Erft-Kreis. 
              Regelmäßige Reinigung für Büros, Praxen und Geschäfte mit flexiblen Zeiten.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Building className="w-4 h-4 mr-2" />
                Unterhaltsreinigung
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-2" />
                Flexible Zeiten
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
              Warum SILBERREH für Ihre Unterhaltsreinigung?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Unterhaltsreinigung mit über 20 Jahren Erfahrung - für ein sauberes Arbeitsumfeld
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    20+ Jahre Erfahrung
                  </h3>
                  <p className="text-gray-600">
                    Hunderte zufriedene Bürokunden in Bergheim und dem gesamten Rhein-Erft-Kreis
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Flexible Zeiten
                  </h3>
                  <p className="text-gray-600">
                    Reinigung außerhalb der Geschäftszeiten ohne Störung des Arbeitsalltags
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
                    Geschulte und vertrauensvolle Mitarbeiter für Ihr Büro und Ihre Praxis
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
              Unsere Unterhaltsreinigung-Leistungen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Gewerbereinigung für alle Bürobereiche in Bergheim + 80km Umkreis
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Briefcase className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Arbeitsplätze & Büros
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Reinigung aller Arbeitsbereiche und Büroräume
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Schreibtische und Arbeitsplätze
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Regale und Schränke
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Bildschirme und Tastaturen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Türen und Griffe
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Building className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Böden & Oberflächen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Gründliche Reinigung aller Bodenbeläge und Oberflächen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Teppichreinigung und -pflege
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Parkett und Laminat
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Fliesen und Naturstein
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Staubsaugen und Wischen
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
                    Hygienische Reinigung von Sanitäranlagen und Küchenbereich
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      WC-Anlagen und Waschräume
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Küchen und Pausenräume
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Kühlschränke und Mikrowellen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Desinfektionsservice
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Computer className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Spezialservice
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Zusätzliche Reinigungsleistungen für besondere Anforderungen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Fenster- und Glasreinigung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Müllentsorgung und Recycling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Jalousien und Vorhänge
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Luftreinigung und Klimaanlagen
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frequencies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Reinigungsrhythmus nach Bedarf
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Wir passen uns flexibel an Ihre Bedürfnisse und Arbeitszeiten an
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { frequency: "Täglich", desc: "Intensive Nutzung, Arztpraxen", icon: "1" },
                { frequency: "Wöchentlich", desc: "Normale Büronutzung", icon: "7" },
                { frequency: "14-täglich", desc: "Kleine Büros, Homeoffice", icon: "14" },
                { frequency: "Monatlich", desc: "Gelegentliche Nutzung", icon: "30" }
              ].map((item, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[hsl(187,96%,43%)] text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(213,78%,32%)] mb-2">
                      {item.frequency}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Applications */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Einsatzbereiche unserer Büroreinigung
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Wir reinigen alle Arten von Gewerbeobjekten in Bergheim + 80km Umkreis
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-6">
                  Unsere Leistungen
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-6">
                  Branchen & Anwendungen
                </h3>
                <ul className="space-y-3">
                  {applications.map((application, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Häufige Fragen - Büroreinigung
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zur Büroreinigung
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item) => (
              <div key={item.id} className="glassmorphism border-0 shadow-lg rounded-xl overflow-hidden">
                <Collapsible open={openFaqItems.includes(item.id)}>
                  <CollapsibleTrigger
                    onClick={() => toggleFaqItem(item.id)}
                    className="w-full p-6 hover:bg-white/50 transition-all duration-300 text-left flex items-center justify-between group min-h-[80px]"
                  >
                    <h3 className="text-lg font-semibold text-[hsl(213,78%,32%)] pr-4 leading-snug">
                      {item.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-[hsl(187,96%,43%)] transition-transform duration-300 flex-shrink-0 ${
                        openFaqItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6 border-t border-white/20">
                    <div className="pt-4">
                      <p className="text-[hsl(220,9%,43%)] leading-7 text-base">
                        {item.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingElements />
    </div>
  );
}