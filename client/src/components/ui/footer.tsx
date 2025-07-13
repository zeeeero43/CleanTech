import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(213,78%,32%)] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">SILBERREH GmbH</div>
            <p className="text-white/80 mb-4">
              Ihr vertrauensvoller Partner für professionelle Reinigungsdienstleistungen seit über 20 Jahren.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/services/industriereinigung" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  Industriereinigung
                </Link>
              </li>
              <li>
                <Link href="/services/bauschlussreinigung" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  Bauschlussreinigung
                </Link>
              </li>
              <li>
                <Link href="/services/bueroreinigung" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  Büroreinigung
                </Link>
              </li>
              <li>
                <Link href="/services/fensterreinigung" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  Fensterreinigung
                </Link>
              </li>
              <li>
                <button className="hover:text-[hsl(187,96%,43%)] transition-colors text-left">
                  Grundreinigung
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={16} />
                <a href="tel:+4922719877397" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  +49 2271 9877397
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={16} />
                <a href="mailto:info@silberreh.de" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  info@silberreh.de
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 flex-shrink-0 mt-1" size={16} />
                <div>
                  Kentener Wiesen 39a<br />
                  50126 Bergheim
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/legal/impressum" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/legal/datenschutz" className="hover:text-[hsl(187,96%,43%)] transition-colors">
                  Datenschutz
                </Link>
              </li>

              <li>
                <button className="hover:text-[hsl(187,96%,43%)] transition-colors text-left">
                  Sitemap
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 SILBERREH GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
