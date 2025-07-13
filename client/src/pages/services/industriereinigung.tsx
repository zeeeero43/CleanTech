import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/lib/seo";
import { Factory, Check, ArrowRight, Shield, Clock, Award, Target, Cog, CheckCircle, Wrench, Zap } from "lucide-react";

export default function Industriereinigung() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Maschinenreinigung und Anlagenpflege",
    "Hochdruck- und Heißwasserreinigung bis 200 bar",
    "Chemische und säurebeständige Reinigung",
    "Entfettung von Produktionsanlagen",
    "Industrieboden-Spezialreinigung",
    "Wartung und Instandhaltungsreinigung",
    "Rohrleitungssysteme und Lüftungsanlagen",
    "Demontage und Montage von Anlagenteilen"
  ];

  const applications = [
    "Produktionsanlagen und Maschinen",
    "Chemische und pharmazeutische Industrie",
    "Lebensmittelproduktion",
    "Automobilindustrie",
    "Metallverarbeitung",
    "Logistik- und Lagerhallen",
    "Fertigungsstraßen",
    "Förderbänder und Transportsysteme"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Industriereinigung Bergheim | Professionelle Maschinenreinigung - SILBERREH"
        description="Professionelle Industriereinigung in Bergheim. Maschinenreinigung, Hochdruckreinigung, Anlagenpflege. Erfahrung seit 20+ Jahren. ☎ +49 2271 9877397"
        keywords="Industriereinigung Bergheim, Maschinenreinigung NRW, Hochdruckreinigung, Anlagenpflege, Produktionsanlagen reinigen"
      />
      
      <Navigation />
      
      {/* Hero Section - Increased padding */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-16">
            <Factory className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Industriereinigung Bergheim
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Professionelle Reinigung für Produktionsanlagen, Maschinen und Industriebereiche in Bergheim und dem gesamten Rhein-Erft-Kreis. 
              Hochdruck-, Heißwasser- und chemische Spezialreinigung für maximale Betriebseffizienz.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Factory className="w-4 h-4 mr-2" />
                Maschinenreinigung
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Vollversichert
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Notdienst
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
              Warum SILBERREH für Ihre Industriereinigung?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Mit über 20 Jahren Erfahrung sind wir Ihr zuverlässiger Partner für professionelle Industriereinigung
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    20+ Jahre Erfahrung
                  </h3>
                  <p className="text-gray-600">
                    Langjährige Expertise in der Industriereinigung mit über 500 zufriedenen Kunden
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Maßgeschneiderte Lösungen
                  </h3>
                  <p className="text-gray-600">
                    Individuelle Reinigungskonzepte für jeden Industriebereich und spezielle Anforderungen
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Cog className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Modernste Technik
                  </h3>
                  <p className="text-gray-600">
                    Hochmoderne Reinigungsgeräte und umweltfreundliche Reinigungsmittel
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
              Unsere Industriereinigung-Leistungen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Reinigung für alle Industriebereiche in Bergheim und Umgebung
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Wrench className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Maschinenreinigung
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Reinigung von Produktionsmaschinen und Anlagen für optimale Betriebseffizienz
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Hochdruckreinigung bis 200 bar
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Entfettung und Reinigung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Maschinenpflege und Wartung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Demontage und Montage
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Spezialreinigung
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Chemische Reinigung und Säurebehandlung für besondere Anforderungen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Chemische Reinigung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Säurebehandlung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Industrielle Wartung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Ölspurenbeseitigung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Factory className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Produktionsanlagen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Komplette Reinigung von Produktionsanlagen und Fertigungsstraßen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Fertigungsstraßen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Förderbänder
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Lüftungsanlagen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Rohrleitungssysteme
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Sicherheit & Compliance
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Reinigung nach Sicherheitsstandards und Compliance-Anforderungen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Arbeitssicherheit
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Umweltschutz
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Hygienestandards
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Dokumentation
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
              Systematische und effiziente Industriereinigung in 5 Schritten
            </p>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Analyse", desc: "Bestandsaufnahme vor Ort" },
                { step: "2", title: "Planung", desc: "Reinigungskonzept erstellen" },
                { step: "3", title: "Vorbereitung", desc: "Sicherung und Schutz" },
                { step: "4", title: "Reinigung", desc: "Professionelle Durchführung" },
                { step: "5", title: "Kontrolle", desc: "Qualitätsprüfung" }
              ].map((item, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[hsl(187,96%,43%)] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(213,78%,32%)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
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
              Einsatzbereiche unserer Industriereinigung
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Wir reinigen in verschiedenen Industriebereichen in Bergheim und Umgebung
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
                  Branchen & Anwendungen
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4">
              Industriereinigung anfragen
            </h2>
            <p className="text-xl text-gray-600">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot für Ihre Industriereinigung in Bergheim
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  asChild
                  className="bg-[hsl(187,96%,43%)] hover:bg-[hsl(187,96%,53%)] text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  <a href="tel:+4922719877397">
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-[hsl(213,78%,32%)] text-[hsl(213,78%,32%)] hover:bg-[hsl(213,78%,32%)] hover:text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  <a href="https://wa.me/4922719877397">
                    WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Sofortige Beratung:</strong> +49 2271 9877397
                </p>
                <p className="text-gray-600">
                  Montag - Freitag: 7:00 - 18:00 Uhr<br />
                  Samstag: 8:00 - 14:00 Uhr<br />
                  Notdienst: 24/7 verfügbar
                </p>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingElements />
    </div>
  );
}