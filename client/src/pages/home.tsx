import { Navigation } from "@/components/ui/nav";
import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/lib/seo";
import { 
  Handshake, 
  Wrench, 
  Leaf, 
  Shield, 
  Clock, 
  Euro,
  Award,
  Tag,
  Star
} from "lucide-react";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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

  return (
    <div className="min-h-screen">
      <SEO
        title="SILBERREH GmbH - Professionelle Reinigungslösungen | Bergheim, NRW"
        description="Professionelle Reinigungsdienste in Bergheim. Industrie-, Büro-, Bau- und Fensterreinigung. Kostenlose Beratung ☎ +49 2271 9877397"
        keywords="Reinigung Bergheim, Reinigungsfirma NRW, Industriereinigung, Büroreinigung, Bauschlussreinigung, Fensterreinigung"
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
            <div>
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
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
      
      <ContactForm />
      <Footer />
      <FloatingElements />
    </div>
  );
}
