import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/lib/seo";
import { HardHat, Check, ArrowRight, Shield, Clock, Award, Target, Cog, CheckCircle, Wrench, Zap, Truck, Recycle, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export default function Bauschlussreinigung() {
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
    "Komplette Bauschlussreinigung nach BGB",
    "Wertstofftrennung und fachgerechte Entsorgung",
    "Fenster- und Rahmenreinigung",
    "Bodenreinigung und Versiegelung",
    "Sanitär- und Küchenreinigung",
    "Entfernung von Bauschutt und Verschmutzungen",
    "Feinreinigung aller Oberflächen",
    "Übergabebereite Reinigung"
  ];

  const applications = [
    "Wohnbauprojekte und Neubauten",
    "Gewerbliche Bauprojekte",
    "Bürogebäude und Verwaltung",
    "Einzelhandel und Ladengeschäfte",
    "Industriebauten",
    "Sanierung und Renovierung",
    "Rohbauten und Neubauten",
    "Dachgeschossausbauten"
  ];

  const faqItems = [
    {
      id: "timeline",
      question: "Wie lange dauert eine Bauschlussreinigung?",
      answer: "Die Dauer hängt von der Größe des Objekts ab. Für ein Einfamilienhaus benötigen wir ca. 1-2 Tage, für größere Projekte entsprechend länger."
    },
    {
      id: "bgb",
      question: "Was bedeutet Bauschlussreinigung nach BGB?",
      answer: "Nach BGB bedeutet die Reinigung entsprechend der gesetzlichen Vorschriften für die Übergabe von Bauprojekten. Wir erfüllen alle rechtlichen Anforderungen."
    },
    {
      id: "waste",
      question: "Ist die Entsorgung von Bauschutt im Preis enthalten?",
      answer: "Ja, die fachgerechte Entsorgung von Bauschutt und Baustellenabfällen ist in unserem Service enthalten. Wir trennen und entsorgen alles ordnungsgemäß."
    },
    {
      id: "handover",
      question: "Wann ist der beste Zeitpunkt für die Bauschlussreinigung?",
      answer: "Die Bauschlussreinigung sollte nach Abschluss aller Bauarbeiten, aber vor der Übergabe an den Auftraggeber durchgeführt werden."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Bauschlussreinigung Bergheim | Professionelle Endreinigung - SILBERREH"
        description="Professionelle Bauschlussreinigung in Bergheim. Komplette Endreinigung, Wertstofftrennung, übergabebereit. Erfahrung seit 20+ Jahren. ☎ +49 2271 9877397"
        keywords="Bauschlussreinigung Bergheim, Endreinigung NRW, Bauendreinigung, Rohbaureinigung, Wertstofftrennung"
      />
      
      <Navigation />
      
      {/* Hero Section - Increased padding */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-12">
            <HardHat className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Bauschlussreinigung Bergheim
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Professionelle Bauschlussreinigung für Neubauten und Sanierungen in Bergheim und dem gesamten Rhein-Erft-Kreis. 
              Komplette Endreinigung mit Wertstofftrennung - übergabebereit in kürzester Zeit.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <HardHat className="w-4 h-4 mr-2" />
                Bauschlussreinigung
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Recycle className="w-4 h-4 mr-2" />
                Wertstofftrennung
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
              Warum SILBERREH für Ihre Bauschlussreinigung?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Bauschlussreinigung mit über 20 Jahren Erfahrung - übergabebereit und termingerecht
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    20+ Jahre Erfahrung
                  </h3>
                  <p className="text-gray-600">
                    Hunderte erfolgreich abgeschlossene Bauschlussreinigungen in Bergheim + 80km Umkreis
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Termingerechte Abwicklung
                  </h3>
                  <p className="text-gray-600">
                    Pünktliche Fertigstellung für termingerechte Bauübergabe und Vermietung
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Recycle className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Wertstofftrennung
                  </h3>
                  <p className="text-gray-600">
                    Fachgerechte Entsorgung und Wertstofftrennung nach aktuellen Umweltstandards
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
              Unsere Bauschlussreinigung-Leistungen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Komplette Endreinigung für alle Bauprojekte in Bergheim + 80km Umkreis
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <HardHat className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Komplette Endreinigung
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Vollständige Bauschlussreinigung aller Bereiche nach BGB-Standards
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Feinreinigung aller Oberflächen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Fenster- und Rahmenreinigung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Bodenreinigung und Versiegelung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Sanitär- und Küchenreinigung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Recycle className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Wertstofftrennung & Entsorgung
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fachgerechte Entsorgung und Wertstofftrennung nach Umweltstandards
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Bauschutt-Entsorgung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Wertstofftrennung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Müllentsorgung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Recycling-Management
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Wrench className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Spezialreinigung
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Reinigung von Baumaterialrückständen und Verschmutzungen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Zement- und Mörtelreste
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Farb- und Lackentfernung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Klebstoffreste
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Silikon- und Fugenreinigung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Übergabebereit
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Vollständige Reinigung für die sofortige Übergabe an Mieter oder Käufer
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Abnahmebereit
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Bezugsfertig
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Termingerecht
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Qualitätsgarantie
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Unser Reinigungsprozess
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Systematische Bauschlussreinigung in 6 Schritten
            </p>
            
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { step: "1", title: "Besichtigung", desc: "Kostenlose Vorab-Besichtigung" },
                { step: "2", title: "Angebot", desc: "Detailliertes Festpreisangebot" },
                { step: "3", title: "Grobreinigung", desc: "Entfernung von Bauschutt" },
                { step: "4", title: "Feinreinigung", desc: "Professionelle Detailreinigung" },
                { step: "5", title: "Entsorgung", desc: "Wertstofftrennung und Entsorgung" },
                { step: "6", title: "Abnahme", desc: "Übergabebereit und sauber" }
              ].map((item, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-[hsl(187,96%,43%)] text-white rounded-full flex items-center justify-center text-lg font-bold mb-3 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-sm font-bold text-[hsl(213,78%,32%)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600">
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
              Einsatzbereiche unserer Bauschlussreinigung
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Wir reinigen alle Arten von Bauprojekten in Bergheim + 80km Umkreis
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
                  Projektarten & Anwendungen
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
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Häufige Fragen - Bauschlussreinigung
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zur Bauschlussreinigung
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