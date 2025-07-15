import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/lib/seo";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Kontakt - SILBERREH GmbH | Kostenlose Beratung | Bergheim"
        description="Kontaktieren Sie SILBERREH GmbH für professionelle Reinigungsdienstleistungen. Kostenlose Beratung und Angebote. ☎ +49 2271 9877397"
        keywords="Kontakt SILBERREH, Reinigung Bergheim, Kostenlose Beratung, Angebot anfordern"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Kontakt aufnehmen
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns für ein 
              kostenloses Beratungsgespräch und unverbindliches Angebot.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Phone className="text-[hsl(187,96%,43%)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                  Telefon
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-2">Rufen Sie uns an:</p>
                <a 
                  href="tel:+4922719877397" 
                  className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)] font-medium text-lg"
                >
                  +49 2271 9877397
                </a>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Mail className="text-[hsl(187,96%,43%)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                  E-Mail
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-2">Schreiben Sie uns:</p>
                <a 
                  href="mailto:info@silberreh.de" 
                  className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)] font-medium text-lg"
                >
                  info@silberreh.de
                </a>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <MapPin className="text-[hsl(187,96%,43%)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                  Adresse
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-2">Besuchen Sie uns:</p>
                <p className="text-[hsl(220,9%,43%)] font-medium">
                  Kentener Wiesen 39a<br />
                  50126 Bergheim
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-6">
                  Öffnungszeiten
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Bürozeiten</div>
                      <div className="text-[hsl(220,9%,43%)]">
                        Montag - Freitag: 8:00 - 17:00 Uhr<br />
                        Samstag: 8:00 - 14:00 Uhr<br />
                        Sonntag: Geschlossen
                      </div>
                    </div>
                  </div>
                  

                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-6">
                  Anfahrt
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Car className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Mit dem Auto</div>
                      <div className="text-[hsl(220,9%,43%)]">
                        Über A1/A61 Ausfahrt Bergheim<br />
                        Parkplätze direkt vor dem Gebäude
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Öffentliche Verkehrsmittel</div>
                      <div className="text-[hsl(220,9%,43%)]">
                        Buslinien 950, 951<br />
                        Haltestelle "Kentener Wiesen"
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Service Areas */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Unser Einsatzgebiet
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Wir sind in einem Umkreis von 80 Kilometern rund um Bergheim für Sie da
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-[hsl(187,96%,43%)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-[hsl(187,96%,43%)]" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Bergheim + 80km Umkreis
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-6">
                  Von unserem Hauptstandort in Bergheim aus sind wir in einem Radius von 80 Kilometern für Sie tätig. 
                  Das umfasst alle größeren Städte und Gemeinden der Region.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-[hsl(220,9%,43%)]">
                  <div className="flex items-center justify-center">
                    <span className="text-[hsl(187,96%,43%)] mr-2">✓</span>
                    Köln und Umgebung
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[hsl(187,96%,43%)] mr-2">✓</span>
                    Düsseldorf und Umgebung
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[hsl(187,96%,43%)] mr-2">✓</span>
                    Rhein-Erft-Kreis
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[hsl(187,96%,43%)] mr-2">✓</span>
                    Und viele weitere Orte
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              So finden Sie uns
            </h2>
          </div>
          
          <Card className="glassmorphism border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.892045234!2d6.611234!3d50.955123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2f4a5f7e7b63%3A0x1234567890abcdef!2sKentener%20Wiesen%2039a%2C%2050126%20Bergheim!5e0!3m2!1sde!2sde!4v1600000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SILBERREH GmbH Standort - Kentener Wiesen 39a, 50126 Bergheim"
                ></iframe>
              </div>
              <div className="text-center mt-6">
                <p className="text-[hsl(220,9%,43%)] font-medium">
                  Kentener Wiesen 39a, 50126 Bergheim
                </p>
                <p className="text-[hsl(220,9%,43%)] text-sm mt-2">
                  Klicken Sie auf die Karte für Routenplanung
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
      <FloatingElements />
    </div>
  );
}
