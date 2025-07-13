import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/lib/seo";
import { Building, Check, ArrowRight } from "lucide-react";

export default function Bueroreinigung() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Regelmäßige Büroreinigung",
    "Sanitärbereich-Reinigung",
    "Bodenreinigung und -pflege",
    "Fenster- und Glasreinigung",
    "Küchen- und Pausenraumreinigung",
    "Grundreinigung und Spezialreinigung"
  ];

  const applications = [
    "Bürogebäude",
    "Arztpraxen",
    "Kanzleien",
    "Einzelhandel",
    "Gastronomiebetriebe",
    "Praxisräume"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Büroreinigung Bergheim | Professionelle Gebäudereinigung - SILBERREH"
        description="Professionelle Büroreinigung in Bergheim. Regelmäßige Reinigung für Büros, Praxen und Geschäfte. Flexible Zeiten. ☎ +49 2271 9877397"
        keywords="Büroreinigung Bergheim, Praxisreinigung NRW, Gebäudereinigung, Büroservice, Unterhaltsreinigung"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Building className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Büro- & Gewerbereinigung
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professionelle Reinigung für Büros, Praxen und Geschäfte. Regelmäßige Pflege 
              für ein sauberes und angenehmes Arbeitsumfeld.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[hsl(213,78%,32%)] mb-6">
                Professionelle Büroreinigung
              </h2>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-8">
                Ein sauberes Büro ist die Basis für produktives Arbeiten. Wir sorgen mit 
                regelmäßiger, professioneller Reinigung für ein hygienisches und angenehmes 
                Arbeitsumfeld für Sie und Ihre Mitarbeiter.
              </p>
              
              <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                Unsere Leistungen
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-[hsl(187,96%,43%)] mr-3 flex-shrink-0" size={20} />
                    <span className="text-[hsl(220,9%,43%)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Clean modern office space" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Flexible Reinigungszeiten
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-6">
                  Wir passen uns Ihren Arbeitszeiten an. Ob früh morgens, abends oder am Wochenende - 
                  wir reinigen, wenn es für Sie passt.
                </p>
                
                <Button 
                  onClick={scrollToContact}
                  className="cta-button w-full text-white"
                >
                  Jetzt Angebot anfordern
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Cleaning Schedule */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Reinigungsintervalle
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Individuelle Reinigungspläne nach Ihren Bedürfnissen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Täglich
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Für stark frequentierte Büros und Praxen mit hohem Reinigungsbedarf.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Wöchentlich
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Ideale Lösung für die meisten Büros und kleinere Praxen.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  14-täglich
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Für kleinere Büros mit geringerer Nutzungsfrequenz.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Monatlich
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Grundreinigung für selten genutzte Räume oder Zusatzleistungen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Anwendungsbereiche
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Büroreinigung für verschiedene Gewerbebereiche
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application) => (
              <Card key={application} className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <ArrowRight className="text-[hsl(187,96%,43%)] mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-bold text-[hsl(213,78%,32%)]">
                    {application}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
      <FloatingElements />
    </div>
  );
}
