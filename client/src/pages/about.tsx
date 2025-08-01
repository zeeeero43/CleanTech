import { Navigation } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/lib/seo";
import { 
  Award, 
  Tag, 
  Wrench, 
  Users, 
  Target, 
  Leaf,
  CheckCircle
} from "lucide-react";
import heroImage from "@assets/mittlere-aufnahme-einer-frau-die-drinnen-putzt-min_1752415170427.jpg";

export default function About() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Award,
      title: "Qualität",
      description: "Höchste Qualitätsstandards in allen Bereichen unserer Arbeit"
    },
    {
      icon: Users,
      title: "Zuverlässigkeit",
      description: "Pünktlich, professionell und verlässlich - darauf können Sie sich verlassen"
    },
    {
      icon: Target,
      title: "Kundenorientierung",
      description: "Ihre Zufriedenheit steht im Mittelpunkt unseres Handelns"
    },
    {
      icon: Leaf,
      title: "Nachhaltigkeit",
      description: "Umweltfreundliche Reinigungsmittel und nachhaltige Verfahren"
    }
  ];

  const certifications = [
    "ISO 9001 Qualitätsmanagement",
    "Berufsgenossenschaftliche Schulungen",
    "Sachkundenachweis für Reinigungschemie",
    "Arbeitsschutz- und Sicherheitsschulungen",
    "Umweltschutz-Zertifizierungen",
    "Fachbetrieb für Gebäudereinigung"
  ];

  const equipment = [
    "Hochdruckreiniger bis 500 bar",
    "Heißwasser-Reinigungsanlagen",
    "Osmose-Wasseraufbereitungsanlagen",
    "Industriestaubsauger",
    "Scheuersaugmaschinen",
    "Steiger und Hubarbeitsbühnen"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Über SILBERREH GmbH - Reinigungsdienstleister aus Bergheim | 20+ Jahre Erfahrung"
        description="⭐ Über 20 Jahre Erfahrung in der professionellen Reinigung ⭐ Zertifiziert ⭐ Versichert ⭐ Umweltbewusst ⭐ Über 500 zufriedene Kunden ⭐ Ihr vertrauensvoller Partner für Reinigungsdienstleistungen ⭐ Kostenlose Beratung ☎ +49 1525 3090504"
        keywords="SILBERREH GmbH, Reinigungsunternehmen Bergheim, Reinigungsfirma Geschichte, Zertifizierung, Versicherung, Reinigungsdienstleister NRW, Reinigungsservice Bergheim, Reinigungsunternehmen Köln, professionelle Reinigung, Reinigungsfirma Düsseldorf"
        canonical="https://silberreh.de/about"
        ogType="website"
        ogImage="https://silberreh.de/images/silberreh-team.jpg"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Über SILBERREH GmbH",
          "description": "Über 20 Jahre Erfahrung in der professionellen Reinigung",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "SILBERREH GmbH",
            "foundingDate": "2003",
            "numberOfEmployees": "10-50",
            "description": "Professionelle Reinigungsdienstleistungen in Bergheim und Umgebung",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kentener Wiesen 39a",
              "addressLocality": "Bergheim",
              "postalCode": "50126",
              "addressCountry": "DE"
            }
          }
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[hsl(213,78%,32%)] to-[hsl(187,96%,43%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Über SILBERREH GmbH
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Seit über 20 Jahren Ihr vertrauensvoller Partner für professionelle 
              Reinigungsdienstleistungen in Bergheim + 80km Umkreis.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[hsl(213,78%,32%)] mb-6">
                Unsere Geschichte
              </h2>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-6">
                Die SILBERREH GmbH wurde mit der Vision gegründet, professionelle 
                Reinigungsdienstleistungen auf höchstem Niveau anzubieten. Was als 
                kleiner Familienbetrieb begann, hat sich zu einem führenden Unternehmen 
                in der Region entwickelt.
              </p>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-6">
                Heute beschäftigen wir ein erfahrenes Team von Reinigungsspezialisten 
                und verfügen über modernste Ausrüstung für alle Bereiche der gewerblichen 
                und industriellen Reinigung.
              </p>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-8">
                Unser Erfolg basiert auf drei Säulen: Qualität, Zuverlässigkeit und 
                Kundenorientierung. Diese Werte leben wir jeden Tag und machen uns zu 
                einem vertrauenswürdigen Partner für Unternehmen in der Region.
              </p>
              
              <Button 
                onClick={scrollToContact}
                className="cta-button text-white px-8 py-3"
              >
                Lernen Sie uns kennen
              </Button>
            </div>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src={heroImage} 
                  alt="Professional cleaning service - woman cleaning indoors" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
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
                    <div className="text-3xl font-bold text-[hsl(213,78%,32%)]">25</div>
                    <div className="text-sm text-[hsl(220,9%,43%)]">Mitarbeiter</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Unsere Werte
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Diese Grundsätze leiten uns in allem, was wir tun
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="glassmorphism border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl text-[hsl(187,96%,43%)] mb-4 flex justify-center">
                    <value.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[hsl(220,9%,43%)]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team & Qualifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[hsl(213,78%,32%)] mb-6">
                Unser Team
              </h2>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-8">
                Unser erfahrenes Team besteht aus geschulten Reinigungsspezialisten, 
                die regelmäßig an Fortbildungen teilnehmen. Jeder Mitarbeiter wird 
                sorgfältig ausgewählt und umfassend geschult.
              </p>
              
              <div className="flex items-start mb-6">
                <Tag className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-2">
                    Qualifikationen & Schulungen
                  </h3>
                  <p className="text-[hsl(220,9%,43%)]">
                    Kontinuierliche Weiterbildung und Zertifizierungen sorgen für 
                    höchste Qualitätsstandards in unserer Arbeit.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center">
                    <CheckCircle className="text-[hsl(187,96%,43%)] mr-3 flex-shrink-0" size={16} />
                    <span className="text-[hsl(220,9%,43%)]">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[hsl(213,78%,32%)] mb-6">
                Unsere Ausstattung
              </h2>
              <p className="text-lg text-[hsl(220,9%,43%)] mb-8">
                Modernste Reinigungstechnik und professionelle Ausrüstung ermöglichen 
                es uns, auch anspruchsvollste Reinigungsaufgaben zu bewältigen.
              </p>
              
              <div className="flex items-start mb-6">
                <Wrench className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-2">
                    Technische Ausstattung
                  </h3>
                  <p className="text-[hsl(220,9%,43%)]">
                    Investitionen in moderne Technologie garantieren optimale 
                    Reinigungsergebnisse und Effizienz.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {equipment.map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-[hsl(187,96%,43%)] mr-3 flex-shrink-0" size={16} />
                    <span className="text-[hsl(220,9%,43%)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Environmental Commitment */}
      <section className="py-20 bg-[hsl(220,13%,97%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(213,78%,32%)] mb-6">
              Unser Umweltengagement
            </h2>
            <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
              Nachhaltigkeit und Umweltschutz sind fester Bestandteil unserer Unternehmensphilosophie
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Leaf className="text-[hsl(187,96%,43%)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                  Umweltfreundliche Reinigungsmittel
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Wir setzen auf biologisch abbaubare und umweltschonende Reinigungsmittel.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Leaf className="text-[hsl(187,96%,43%)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                  Ressourcenschonung
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Effiziente Reinigungsverfahren reduzieren den Verbrauch von Wasser und Energie.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Leaf className="text-[hsl(187,96%,43%)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-3">
                  Abfallvermeidung
                </h3>
                <p className="text-[hsl(220,9%,43%)]">
                  Fachgerechte Entsorgung und Recycling sind selbstverständlich für uns.
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
