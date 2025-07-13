import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/lib/seo";
import { GlassWater, Check, ArrowRight, Shield, Clock, Award, Target, Cog, CheckCircle, Building, Home, Store, Sun } from "lucide-react";

export default function Fensterreinigung() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Professionelle Scheibenreinigung innen und außen",
    "Rahmen- und Fensterbankreinigung",
    "Rolladen- und Jalousienreinigung",
    "Wintergarten und Glasdachreinigung",
    "Schaufenster- und Vitrinen-Service",
    "Terrassentüren und Balkonfenster",
    "Insektenschutz- und Fliegengitter",
    "Regelmäßige Wartung und Pflege"
  ];

  const applications = [
    "Bürogebäude und Geschäftsräume",
    "Wohnhäuser und Apartments",
    "Einzelhandel und Schaufenster",
    "Restaurants und Cafés",
    "Wintergärten und Glasanbauten",
    "Produktionshallen mit Glasdächern",
    "Schulen und öffentliche Gebäude",
    "Praxen und Kliniken"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Fensterreinigung Bergheim | Professionelle Scheibenreinigung - SILBERREH"
        description="Professionelle Fensterreinigung in Bergheim. Scheibenreinigung für Büros, Wohnhäuser, Schaufenster. Streifenfreie Ergebnisse. ☎ +49 2271 9877397"
        keywords="Fensterreinigung Bergheim, Scheibenreinigung NRW, Glasreinigung, Schaufensterreinigung, Bürofenster"
      />
      
      <Navigation />
      
      {/* Hero Section - Increased padding */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-16">
            <GlassWater className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Fensterreinigung Bergheim
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Professionelle Fenster- und Scheibenreinigung in Bergheim und dem gesamten Rhein-Erft-Kreis. 
              Streifenfreie Ergebnisse für Büros, Wohnhäuser und Geschäfte.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <GlassWater className="w-4 h-4 mr-2" />
                Fensterreinigung
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sun className="w-4 h-4 mr-2" />
                Streifenfrei
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
              Warum SILBERREH für Ihre Fensterreinigung?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Fensterreinigung mit über 20 Jahren Erfahrung - für kristallklare Durchsicht
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    20+ Jahre Erfahrung
                  </h3>
                  <p className="text-gray-600">
                    Tausende zufriedene Kunden in Bergheim und dem gesamten Rhein-Erft-Kreis
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Sun className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Streifenfreie Ergebnisse
                  </h3>
                  <p className="text-gray-600">
                    Professionelle Technik und hochwertige Reinigungsmittel für perfekte Ergebnisse
                  </p>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Terminflexibilität
                  </h3>
                  <p className="text-gray-600">
                    Reinigung zu Wunschterminen und auch außerhalb der Geschäftszeiten
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
              Unsere Fensterreinigung-Leistungen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professionelle Scheibenreinigung für alle Gebäudetypen in Bergheim und Umgebung
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <GlassWater className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Scheiben & Fenster
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Reinigung aller Fenstertypen innen und außen
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Scheiben innen und außen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Fensterrahmen und -bänke
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Dichtungen und Beschläge
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Streifenfreie Ergebnisse
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Store className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Schaufenster & Vitrinen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Spezialreinigung für Einzelhandel und Geschäftsräume
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Schaufenster und Eingangstüren
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Vitrinen und Ausstellungsscheiben
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Reinigung außerhalb der Geschäftszeiten
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Regelmäßige Wartung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Building className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Gewerbe & Büros
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Fensterreinigung für Bürogebäude und Gewerbe
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Bürogebäude und Verwaltung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Produktionshallen mit Glasdach
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Praxen und Kliniken
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Flexible Terminplanung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8">
                  <Home className="w-12 h-12 text-[hsl(187,96%,43%)] mb-4" />
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    Privathäuser & Wohnungen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fensterreinigung für Wohnhäuser und Apartments
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Einfamilienhäuser und Wohnungen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Wintergärten und Glasanbauten
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Balkonfenster und Terrassentüren
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Rolladen und Jalousien
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
              Professionelle Fensterreinigung in 4 Schritten
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Vorbereitung", desc: "Schutz und Vorbereitung der Flächen" },
                { step: "2", title: "Reinigung", desc: "Professionelle Scheibenreinigung" },
                { step: "3", title: "Nachbearbeitung", desc: "Rahmen und Fensterbänke" },
                { step: "4", title: "Kontrolle", desc: "Streifenfreie Qualitätskontrolle" }
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

      {/* Frequencies */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Reinigungsintervalle
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Wählen Sie die passende Reinigungshäufigkeit für Ihr Gebäude
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { frequency: "Wöchentlich", desc: "Schaufenster und Geschäfte", price: "Ab 15€" },
                { frequency: "Monatlich", desc: "Bürogebäude und Praxen", price: "Ab 25€" },
                { frequency: "Vierteljährlich", desc: "Wohnhäuser und Apartments", price: "Ab 45€" },
                { frequency: "Halbjährlich", desc: "Große Gebäude", price: "Ab 80€" }
              ].map((item, index) => (
                <Card key={index} className="glassmorphism border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[hsl(187,96%,43%)] text-white rounded-full flex items-center justify-center text-xs font-bold mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(213,78%,32%)] mb-2">
                      {item.frequency}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.desc}
                    </p>
                    <p className="text-lg font-bold text-[hsl(187,96%,43%)]">
                      {item.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4 text-center">
              Einsatzbereiche unserer Fensterreinigung
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Wir reinigen alle Arten von Fenstern und Glasflächen in Bergheim und Umgebung
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
                  Gebäudetypen & Anwendungen
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
      <section id="contact" className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,78%,32%)] mb-4">
              Fensterreinigung anfragen
            </h2>
            <p className="text-xl text-gray-600">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot für Ihre Fensterreinigung
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
                  Auch an Wochenenden verfügbar
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