import { Card, CardContent } from "./card";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Services() {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Industriereinigung",
      description: "Maschinenreinigung, Produktionsanlagen, Chemie-/Säurebehandlungen. Hochdruck- und Heißreinigung für optimale Betriebseffizienz.",
      href: "/services/industriereinigung"
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Bauschlussreinigung",
      description: "Komplette Bauschlussreinigung inklusive Wertstofftrennung und fachgerechter Entsorgung. Übergabebereit in kürzester Zeit.",
      href: "/services/bauschlussreinigung"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Büro- & Gewerbereinigung",
      description: "Regelmäßige Reinigung für Büros, Praxen und Geschäfte. Flexible Zeiten und individuelle Reinigungspläne.",
      href: "/services/bueroreinigung"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Fenster- & Glasreinigung",
      description: "Streifenfreie Ergebnisse durch Osmose-Technik und professionelle Steiger-Ausrüstung. Auch schwer erreichbare Bereiche.",
      href: "/services/fensterreinigung"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[hsl(220,13%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
            Professionelle Reinigungslösungen für jeden Bedarf - von der Industrie bis zum Büro
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="service-card glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.href}>
                  <Button 
                    variant="link" 
                    className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)] font-medium p-0"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
