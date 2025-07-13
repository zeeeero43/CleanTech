import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/lib/seo";
import { HardHat, Check, ArrowRight } from "lucide-react";

export default function Bauschlussreinigung() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Komplette Bauschlussreinigung",
    "Grob- und Feinreinigung",
    "Fenster- und Glasreinigung",
    "Bodenreinigung und -pflege",
    "Baustellenentsorgung",
    "Wertstofftrennung"
  ];

  const applications = [
    "Wohnungsbau",
    "Gewerbebau",
    "Bürogebäude",
    "Industriebauten",
    "Sanierungsprojekte",
    "Renovierungen"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Bauschlussreinigung Bergheim | Professionelle Endreinigung - SILBERREH"
        description="Professionelle Bauschlussreinigung in Bergheim. Grob- und Feinreinigung, Entsorgung, Wertstofftrennung. Übergabebereit. ☎ +49 2271 9877397"
        keywords="Bauschlussreinigung Bergheim, Endreinigung NRW, Baustellenreinigung, Grob- und Feinreinigung, Baustellenentsorgung"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <HardHat className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Bauschlussreinigung
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professionelle Endreinigung für Bauprojekte jeder Größe. Von der Grobreinigung 
              bis zur übergabefertigen Feinreinigung - alles aus einer Hand.
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
                Komplette Bauschlussreinigung
              </h2>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-8">
                Nach Abschluss Ihrer Bauarbeiten übernehmen wir die komplette Endreinigung. 
                Unser erfahrenes Team sorgt dafür, dass Ihre Immobilie übergabebereit ist - 
                von der Grobreinigung bis zur abschließenden Feinreinigung.
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Construction site cleaning" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Übergabebereit
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-6">
                  Wir reinigen Ihr Bauprojekt so gründlich, dass es sofort bezugsfertig ist. 
                  Inklusive fachgerechter Entsorgung und Wertstofftrennung.
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
      
      {/* Process */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Unser Reinigungsprozess
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Strukturiert und effizient zur sauberen Immobilie
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="step-number mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Grobreinigung
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Entfernung von Baustaub, Bauschutt und groben Verschmutzungen aus allen Räumen.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="step-number mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Feinreinigung
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Detailreinigung aller Oberflächen, Fenster, Sanitäranlagen und Böden.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="step-number mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Entsorgung
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Fachgerechte Entsorgung und Wertstofftrennung aller Reinigungsabfälle.
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
              Bauschlussreinigung für alle Projekttypen
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
