import { Button } from "./button";
import { Phone, FileText, Award, Shield, ThumbsUp, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern industrial cleaning facility" 
          className="w-full h-full object-cover" 
        />
        <div className="hero-gradient absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professionelle Reinigungslösungen<br />
            <span className="text-[hsl(187,96%,43%)]">für höchste Ansprüche</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Ihr vertrauensvoller Partner für makellose Sauberkeit in Industrie, Gewerbe und Privat. 
            Kostenlose Beratung & Angebote.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="trust-badge px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              20+ Jahre Erfahrung
            </div>
            <div className="trust-badge px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Vollversichert
            </div>
            <div className="trust-badge px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <ThumbsUp className="w-4 h-4 mr-2" />
              100% Zufriedenheitsgarantie
            </div>
          </div>
          
          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="cta-button text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Kostenloses Angebot anfordern
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-white text-[hsl(213,78%,32%)] px-8 py-4 rounded-full font-semibold text-lg border-white hover:bg-[hsl(220,13%,97%)]"
            >
              <a href="tel:+4922719877397">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
