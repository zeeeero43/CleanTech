import { SEO } from "@/lib/seo";
import { Link } from "wouter";
import { MapPin, Building, Factory, GlassWater, HardHat, FileText, Phone, Mail } from "lucide-react";

export default function Sitemap() {
  const siteLinks = [
    {
      title: "Hauptseiten",
      links: [
        { href: "/", label: "Startseite", icon: <MapPin className="w-4 h-4" /> },
        { href: "/about", label: "Über uns", icon: <Building className="w-4 h-4" /> },
        { href: "/contact", label: "Kontakt", icon: <Phone className="w-4 h-4" /> },
      ]
    },
    {
      title: "Reinigungsdienstleistungen",
      links: [
        { href: "/services/unterhaltsreinigung", label: "Unterhalts- & Gewerbereinigung", icon: <Building className="w-4 h-4" /> },
        { href: "/services/grundreinigung", label: "Grundreinigung", icon: <Building className="w-4 h-4" /> },
        { href: "/services/fensterreinigung", label: "Fenster- & Glasreinigung", icon: <GlassWater className="w-4 h-4" /> },
        { href: "/services/industriereinigung", label: "Industriereinigung", icon: <Factory className="w-4 h-4" /> },
        { href: "/services/bauschlussreinigung", label: "Bauschlussreinigung", icon: <HardHat className="w-4 h-4" /> },
      ]
    },
    {
      title: "Rechtliches",
      links: [
        { href: "/legal/impressum", label: "Impressum", icon: <FileText className="w-4 h-4" /> },
        { href: "/legal/datenschutz", label: "Datenschutzerklärung", icon: <FileText className="w-4 h-4" /> },
        { href: "/legal/faq", label: "Häufig gestellte Fragen", icon: <FileText className="w-4 h-4" /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <SEO 
        title="Sitemap - SILBERREH GmbH | Alle Seiten der Reinigungswebsite"
        description="Vollständige Sitemap der SILBERREH GmbH Website. Finden Sie alle Seiten zu Reinigungsdienstleistungen, Unternehmensinformationen und rechtlichen Hinweisen."
        keywords="sitemap, website struktur, reinigungsdienstleistungen, SILBERREH GmbH, navigation, alle seiten"
        canonical="https://silberreh.de/sitemap"
        ogType="website"
        ogImage="/images/silberreh-logo.png"
      />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(213,78%,32%)] mb-4">
                Sitemap
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Alle Seiten unserer Website im Überblick - für eine optimale Navigation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteLinks.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-6 flex items-center">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href}
                          className="flex items-center text-gray-700 hover:text-[hsl(187,96%,43%)] transition-colors group"
                        >
                          <span className="mr-3 text-[hsl(213,78%,32%)] group-hover:text-[hsl(187,96%,43%)] transition-colors">
                            {link.icon}
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-4">
                  Kontakt & Beratung
                </h2>
                <p className="text-gray-600 mb-6">
                  Haben Sie Fragen zu unseren Reinigungsdienstleistungen? Kontaktieren Sie uns gerne!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+491525309504"
                    className="bg-[hsl(213,78%,32%)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(213,78%,28%)] transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt anrufen
                  </a>
                  <a
                    href="mailto:info@silberreh.de"
                    className="bg-[hsl(187,96%,43%)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(187,96%,38%)] transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    E-Mail schreiben
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}