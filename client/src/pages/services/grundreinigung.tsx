import { useState } from "react";
import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { SEO } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Clock, Shield, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import grundreinigungImage from "@assets/professional-cleaning-service-person-using-steam-cleaner-office-min_1752625794454.jpg";

export default function Grundreinigung() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Tiefenreinigung",
      description: "Gründliche Reinigung aller Bereiche nach höchsten Standards"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professionelle Ausrüstung",
      description: "Moderne Dampfreiniger und Spezialgeräte für optimale Ergebnisse"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Termingerecht",
      description: "Zuverlässige Durchführung nach Ihrem Zeitplan"
    }
  ];

  const services = [
    "Komplette Bodenreinigung (alle Oberflächen)",
    "Sanitärbereich-Tiefenreinigung",
    "Fenster- und Rahmenreinigung",
    "Heizkörper- und Lüftungsreinigung",
    "Türen und Zargen (innen/außen)",
    "Lichtschalter und Steckdosen",
    "Decken- und Wandreinigung",
    "Entrümpelung und Entsorgung"
  ];

  const pricingOptions = [
    {
      title: "Wohnungen",
      price: "ab 8,50 €/m²",
      features: [
        "Alle Räume inklusive",
        "Sanitärbereich-Tiefenreinigung",
        "Fenster innen/außen",
        "Entrümpelung möglich"
      ]
    },
    {
      title: "Büros & Praxen",
      price: "ab 12,00 €/m²",
      features: [
        "Arbeitsplätze gründlich",
        "Sanitäranlagen professionell",
        "Empfangsbereiche",
        "Teppich-Tiefenreinigung"
      ]
    },
    {
      title: "Gewerbeflächen",
      price: "Individuell",
      features: [
        "Maßgeschneiderte Lösung",
        "Großflächenreinigung",
        "Spezialausrüstung",
        "Terminflexibilität"
      ]
    }
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
            "price": "ab 8.50",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "valueAddedTaxIncluded": true,
              "priceCurrency": "EUR",
              "price": "ab 8.50",
              "unitText": "pro Quadratmeter"
            }
          }
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(213,78%,32%)] to-[hsl(213,78%,25%)] text-white py-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Grundreinigung Bergheim
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Professionelle Tiefenreinigung für Wohnungen, Büros und Gewerbeflächen. 
              Dampfreinigung und Spezialausrüstung für makellose Sauberkeit.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Grundreinigung
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Professionell
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                Termingerecht
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[hsl(187,96%,43%)] hover:bg-[hsl(187,96%,38%)] text-white border-0 px-8 py-3 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kostenlos anfragen
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[hsl(213,78%,32%)] px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('tel:+491525309504', '_self')}
              >
                +49 1525 3090504
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Warum SILBERREH für Ihre Grundreinigung?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Tiefenreinigung mit über 20 Jahren Erfahrung - für makellose Sauberkeit
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[hsl(187,96%,43%)] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={grundreinigungImage} 
                  alt="Professionelle Grundreinigung mit Dampfreiniger" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Ihre Vorteile bei SILBERREH
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[hsl(187,96%,43%)] mt-1 mr-3 flex-shrink-0" />
                    <span>Über 20 Jahre Erfahrung in der Grundreinigung</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[hsl(187,96%,43%)] mt-1 mr-3 flex-shrink-0" />
                    <span>Moderne Dampfreiniger und Spezialausrüstung</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[hsl(187,96%,43%)] mt-1 mr-3 flex-shrink-0" />
                    <span>Umweltfreundliche Reinigungsmittel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[hsl(187,96%,43%)] mt-1 mr-3 flex-shrink-0" />
                    <span>Termingerechte und zuverlässige Durchführung</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[hsl(187,96%,43%)] mt-1 mr-3 flex-shrink-0" />
                    <span>Kostenfreie Beratung und Angebotserstellung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Unsere Grundreinigung-Leistungen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Komplette Tiefenreinigung für alle Bereiche in Bergheim + 80km Umkreis
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg">
                  <CardContent className="p-6 flex items-center">
                    <Check className="w-6 h-6 text-[hsl(187,96%,43%)] mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Grundreinigung Preise
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Transparente Preisgestaltung für alle Arten von Grundreinigung
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                      {option.title}
                    </h3>
                    <div className="text-3xl font-bold text-[hsl(187,96%,43%)] mb-6">
                      {option.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-[hsl(187,96%,43%)] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-[hsl(187,96%,43%)] hover:bg-[hsl(187,96%,38%)] text-white"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Angebot anfordern
                    </Button>
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
            
            <div className="space-y-4">
              {faqItems.map((item) => (
                <Card key={item.id} className="glassmorphism border-0 shadow-lg">
                  <CardContent className="p-0">
                    <Button
                      variant="ghost"
                      className="w-full h-auto p-6 text-left justify-between hover:bg-transparent"
                      onClick={() => toggleFaq(item.id)}
                    >
                      <span className="text-lg font-semibold text-[hsl(213,78%,32%)]">
                        {item.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-[hsl(187,96%,43%)] transition-transform ${
                        openFaq === item.id ? 'rotate-180' : ''
                      }`} />
                    </Button>
                    {openFaq === item.id && (
                      <div className="px-6 pb-6 text-gray-600">
                        {item.answer}
                      </div>
                    )}
                  </CardContent>
                </Card>
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
    </div>
  );
}