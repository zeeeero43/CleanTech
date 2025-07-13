import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/lib/seo";
import { Factory, Check, ArrowRight } from "lucide-react";

export default function Industriereinigung() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Maschinenreinigung und Anlagenpflege",
    "Hochdruck- und Heißwasserreinigung",
    "Chemische und säurebeständige Reinigung",
    "Entfettung von Produktionsanlagen",
    "Industrieboden-Spezialreinigung",
    "Wartung und Instandhaltungsreinigung"
  ];

  const applications = [
    "Produktionsanlagen und Maschinen",
    "Chemische und pharmazeutische Industrie",
    "Lebensmittelproduktion",
    "Automobilindustrie",
    "Metallverarbeitung",
    "Logistik- und Lagerhallen"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Industriereinigung Bergheim | Professionelle Maschinenreinigung - SILBERREH"
        description="Professionelle Industriereinigung in Bergheim. Maschinenreinigung, Hochdruckreinigung, Anlagenpflege. Erfahrung seit 20+ Jahren. ☎ +49 2271 9877397"
        keywords="Industriereinigung Bergheim, Maschinenreinigung NRW, Hochdruckreinigung, Anlagenpflege, Produktionsanlagen reinigen"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Factory className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Industriereinigung
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professionelle Reinigung für Produktionsanlagen, Maschinen und Industriebereiche. 
              Hochdruck-, Heißwasser- und chemische Spezialreinigung.
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
                Unsere Industriereinigung
              </h2>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-8">
                Mit über 20 Jahren Erfahrung in der Industriereinigung bieten wir maßgeschneiderte 
                Lösungen für Ihre Produktionsanlagen. Unser erfahrenes Team arbeitet mit modernster 
                Technik und speziellen Reinigungsmitteln für optimale Ergebnisse.
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
                  src="https://images.unsplash.com/photo-1565952073036-9cdf1b9b7d4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Industrial cleaning equipment" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Modernste Ausstattung
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-6">
                  Unsere Hochdruckreiniger, Heißwassergeräte und spezielle Reinigungsmittel 
                  sorgen für optimale Reinigungsergebnisse bei schonender Behandlung Ihrer Anlagen.
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
      
      {/* Applications */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Anwendungsbereiche
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Unsere Industriereinigung ist in verschiedenen Branchen gefragt
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
      
      {/* Technical Equipment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Technische Ausstattung
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Modernste Reinigungstechnik für beste Ergebnisse
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Hochdruckreiniger
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Professionelle Hochdruckreiniger mit bis zu 500 bar Druck für hartnäckige Verschmutzungen.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Heißwasseranlagen
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Heißwasserreinigung bis 95°C für optimale Fett- und Ölentfernung.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Spezialreiniger
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Umweltfreundliche Industrie-Reinigungsmittel für verschiedene Anwendungen.
                </p>
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
