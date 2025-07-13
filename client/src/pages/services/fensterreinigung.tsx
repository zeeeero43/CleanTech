import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/lib/seo";
import { Square, Check, ArrowRight } from "lucide-react";

export default function Fensterreinigung() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Streifenfreie Fensterreinigung",
    "Osmose-Technik für kalkfreies Wasser",
    "Rahmen- und Fassadenreinigung",
    "Reinigung schwer erreichbarer Bereiche",
    "Professionelle Steiger-Ausrüstung",
    "Regelmäßige Wartungsreinigung"
  ];

  const applications = [
    "Bürogebäude",
    "Wohnhäuser",
    "Geschäfte und Läden",
    "Industriegebäude",
    "Öffentliche Gebäude",
    "Wintergärten"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Fensterreinigung Bergheim | Professionelle Glasreinigung - SILBERREH"
        description="Professionelle Fensterreinigung in Bergheim. Streifenfreie Ergebnisse mit Osmose-Technik. Auch schwer erreichbare Bereiche. ☎ +49 2271 9877397"
        keywords="Fensterreinigung Bergheim, Glasreinigung NRW, Fassadenreinigung, Osmose-Technik, Steiger-Ausrüstung"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Square className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Fenster- & Glasreinigung
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professionelle Fensterreinigung mit Osmose-Technik für streifenfreie Ergebnisse. 
              Auch schwer erreichbare Bereiche mit spezieller Steiger-Ausrüstung.
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
                Streifenfreie Fensterreinigung
              </h2>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-8">
                Klare Sicht durch professionelle Fensterreinigung. Mit modernster Osmose-Technik 
                und spezieller Ausrüstung erreichen wir auch schwer zugängliche Bereiche und 
                sorgen für langanhaltend saubere Fenster.
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
                  src="https://images.unsplash.com/photo-1527015175922-36a306cf0e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional window cleaning" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Osmose-Technik
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-6">
                  Unser vollentsalztes Wasser sorgt für kalkfreie, streifenfreie Ergebnisse 
                  und längere Sauberkeit Ihrer Fenster.
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
      
      {/* Technology */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Unsere Technologie
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Modernste Ausrüstung für beste Reinigungsergebnisse
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Osmose-Anlagen
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Vollentsalztes Wasser für kalkfreie, streifenfreie Fensterreinigung ohne Nachpolieren.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Steiger-Ausrüstung
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Professionelle Steiger und Hubarbeitsbühnen für schwer erreichbare Bereiche.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Spezialwerkzeuge
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Professionelle Abzieher, Einwascher und Teleskopstangen für optimale Ergebnisse.
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
              Fensterreinigung für alle Gebäudetypen
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
