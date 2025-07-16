import { Navigation } from "@/components/ui/nav";
import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/lib/seo";
import aboutImage from "@assets/mittlere-aufnahme-einer-frau-die-drinnen-putzt-min_1752415170427.jpg";
import { 
  Handshake, 
  Wrench, 
  Leaf, 
  Shield, 
  Clock, 
  Euro,
  Award,
  Tag,
  Star,
  ChevronDown
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export default function Home() {
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

  const usps = [
    {
      icon: Handshake,
      title: "Kostenlose Beratung",
      description: "Unverbindliche Besichtigung und Kostenvoranschlag"
    },
    {
      icon: Wrench,
      title: "Modernste Technik",
      description: "Professionelle Ausrüstung für beste Ergebnisse"
    },
    {
      icon: Leaf,
      title: "Umweltfreundlich",
      description: "Nachhaltige Reinigungsmittel und Verfahren"
    },
    {
      icon: Shield,
      title: "Vollversichert",
      description: "Umfassender Versicherungsschutz für Ihre Sicherheit"
    },
    {
      icon: Clock,
      title: "Flexible Termine",
      description: "Anpassung an Ihre Arbeitszeiten und Bedürfnisse"
    },
    {
      icon: Euro,
      title: "Faire Preise",
      description: "Transparente Kostenstruktur ohne versteckte Gebühren"
    }
  ];

  const testimonials = [
    {
      name: "Thomas Müller",
      company: "Bauleiter, Müller Bau GmbH",
      content: "Excellente Arbeit bei unserer Bauschlussreinigung. Termintreu, gründlich und zu einem fairen Preis. Können wir nur empfehlen!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Andrea Schmidt",
      company: "Betriebsleiterin, TechCorp AG",
      content: "Die Industriereinigung unserer Produktionshallen war perfekt. Das Team arbeitet professionell und kennt sich mit industriellen Anforderungen aus.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763d31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Michael Weber",
      company: "Praxisleiter, Zahnarztpraxis Weber",
      content: "Zuverlässige Büroreinigung seit über 3 Jahren. Flexibel, freundlich und immer sauber. Wir sind sehr zufrieden!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    }
  ];

  const faqItems = [
    {
      id: "services",
      question: "Welche Reinigungsdienstleistungen bieten Sie an?",
      answer: "Wir bieten professionelle Reinigungsdienstleistungen für Industrie, Büros, Bauschluss und Fenster. Unsere Dienstleistungen umfassen regelmäßige Wartung, Tiefenreinigung und spezialisierte Reinigungsverfahren."
    },
    {
      id: "area",
      question: "In welchen Gebieten sind Sie tätig?",
      answer: "Wir sind hauptsächlich im Raum Bergheim, Köln, Düsseldorf und dem gesamten Rhein-Erft-Kreis tätig. Für größere Projekte können wir auch darüber hinaus tätig werden."
    },
    {
      id: "quote",
      question: "Wie erhalte ich ein Angebot?",
      answer: "Sie können uns über unser Kontaktformular, per Telefon (+49 1525 3090504) oder WhatsApp kontaktieren. Wir erstellen Ihnen gerne ein kostenloses und unverbindliches Angebot."
    },
    {
      id: "equipment",
      question: "Bringen Sie Ihre eigenen Reinigungsmittel mit?",
      answer: "Ja, wir verwenden professionelle Reinigungsgeräte und hochwertige, umweltfreundliche Reinigungsmittel. Alle Materialien sind im Preis inbegriffen."
    },
    {
      id: "insurance",
      question: "Sind Sie versichert?",
      answer: "Ja, wir sind vollständig versichert. Unsere Haftpflichtversicherung deckt alle Schäden ab, die während der Reinigungsarbeiten entstehen könnten."
    },

  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="SILBERREH GmbH - Professionelle Reinigungsdienstleistungen in Bergheim & Köln | 20+ Jahre Erfahrung"
        description="✓ Professionelle Gebäudereinigung in Bergheim seit über 20 Jahren ✓ Industriereinigung ✓ Büroreinigung ✓ Bauschlussreinigung ✓ Fensterreinigung ✓ Kostenlose Beratung & Angebote ✓ Vollversichert ✓ 100% Zufriedenheitsgarantie"
        keywords="Gebäudereinigung Bergheim, Industriereinigung Köln, Büroreinigung Düsseldorf, Bauschlussreinigung NRW, Fensterreinigung Rhein-Erft-Kreis, Reinigungsservice Bergheim, Reinigungsfirma Köln, Gewerbereinigung, Unterhaltsreinigung, Grundreinigung, professionelle Reinigung"
        canonical="https://silberreh.de"
        ogType="website"
        ogImage="https://silberreh.de/images/silberreh-cleaning-service.jpg"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SILBERREH GmbH",
          "description": "Professionelle Reinigungsdienstleistungen in Bergheim und Umgebung seit über 20 Jahren",
          "url": "https://silberreh.de",
          "logo": "https://silberreh.de/images/silberreh-logo.png",
          "telephone": "+49 1525 3090504",
          "email": "info@silberreh.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kentener Wiesen 39a",
            "addressLocality": "Bergheim",
            "postalCode": "50126",
            "addressCountry": "DE",
            "addressRegion": "NRW"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.9549",
            "longitude": "6.6447"
          },
          "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
          "priceRange": "€€",
          "areaServed": [
            { "@type": "City", "name": "Bergheim" },
            { "@type": "City", "name": "Köln" },
            { "@type": "City", "name": "Düsseldorf" },
            { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
            { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" }
          ],
          "serviceType": [
            "Industriereinigung",
            "Büroreinigung", 
            "Gewerbereinigung",
            "Bauschlussreinigung",
            "Fensterreinigung",
            "Glasreinigung",
            "Grundreinigung",
            "Unterhaltsreinigung"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5"
          }
        }}
      />
      
      <Navigation />
      <Hero />
      <Services />
      
      {/* Why SILBERREH Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Warum SILBERREH?
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Ihre Vorteile bei der Zusammenarbeit mit uns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp) => (
              <div key={usp.title} className="text-center">
                <div className="text-4xl text-[hsl(187,96%,43%)] mb-4 flex justify-center">
                  <usp.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                  {usp.title}
                </h3>
                <p className="text-[hsl(220,9%,43%)]">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6">
              So einfach geht's
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              In nur 3 Schritten zu Ihrer professionellen Reinigung
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="step-number mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                Kontakt aufnehmen
              </h3>
              <p className="text-[hsl(220,9%,43%)]">
                Rufen Sie uns an oder nutzen Sie unser Kontaktformular für eine erste Beratung.
              </p>
            </div>
            
            <div className="text-center">
              <div className="step-number mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                Kostenlose Beratung
              </h3>
              <p className="text-[hsl(220,9%,43%)]">
                Wir besichtigen Ihre Räumlichkeiten und erstellen ein individuelles Angebot.
              </p>
            </div>
            
            <div className="text-center">
              <div className="step-number mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                Professionelle Reinigung
              </h3>
              <p className="text-[hsl(220,9%,43%)]">
                Unser erfahrenes Team sorgt für makellose Sauberkeit nach Ihren Wünschen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Kundenstimmen
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Das sagen unsere zufriedenen Kunden
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="testimonial-card border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[hsl(220,9%,43%)] mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-bold text-[hsl(213,78%,32%)]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[hsl(220,9%,43%)]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6">
                Über SILBERREH
              </h2>
              <p className="text-xl text-[hsl(220,9%,43%)] mb-8">
                Seit über 20 Jahren Ihr vertrauensvoller Partner für professionelle Reinigungsdienstleistungen
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-2">
                      Erfahrung & Kompetenz
                    </h3>
                    <p className="text-[hsl(220,9%,43%)]">
                      Über 20 Jahre Erfahrung in der professionellen Reinigungsbranche mit einem erfahrenen Team aus Spezialisten.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Tag className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-2">
                      Zertifiziert & Versichert
                    </h3>
                    <p className="text-[hsl(220,9%,43%)]">
                      Alle Mitarbeiter sind geschult und zertifiziert. Umfassender Versicherungsschutz für Ihre Sicherheit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Wrench className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-2">
                      Modernste Ausstattung
                    </h3>
                    <p className="text-[hsl(220,9%,43%)]">
                      Professionelle Reinigungsgeräte und umweltfreundliche Reinigungsmittel für beste Ergebnisse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src={aboutImage} 
                  alt="Professional cleaning team at work" 
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[hsl(213,78%,32%)]">20+</div>
                    <div className="text-sm text-[hsl(220,9%,43%)]">Jahre Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(213,78%,32%)]">500+</div>
                    <div className="text-sm text-[hsl(220,9%,43%)]">Zufriedene Kunden</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(213,78%,32%)]">100%</div>
                    <div className="text-sm text-[hsl(220,9%,43%)]">Zufriedenheit</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Häufige Fragen
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zu unseren Reinigungsdienstleistungen
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <Collapsible key={item.id} open={openFaqItems.includes(item.id)}>
                <CollapsibleTrigger
                  onClick={() => toggleFaqItem(item.id)}
                  className="w-full p-6 glassmorphism border-0 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-[hsl(213,78%,32%)] pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[hsl(187,96%,43%)] transition-transform duration-300 ${
                      openFaqItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 glassmorphism border-0 shadow-lg rounded-b-xl -mt-3">
                  <p className="text-[hsl(220,9%,43%)] leading-relaxed">
                    {item.answer}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="glassmorphism border-0 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[hsl(213,78%,32%)] mb-4">
                  Weitere Fragen?
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-6">
                  Haben Sie weitere Fragen? Kontaktieren Sie uns gerne direkt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+491525309504"
                    className="bg-[hsl(213,78%,32%)] hover:bg-[hsl(213,78%,37%)] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Jetzt anrufen
                  </a>
                  <Button
                    onClick={scrollToContact}
                    className="bg-[hsl(187,96%,43%)] hover:bg-[hsl(187,96%,48%)] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Kontaktformular
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
      <FloatingElements />
    </div>
  );
}
