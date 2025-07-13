import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Menu, Phone, X } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dienstleistungen", href: "/#services" },
    { label: "Über uns", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];
      if (location === "/" || location === "") {
        scrollToSection(sectionId);
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-[hsl(213,78%,32%)]">SILBERREH</div>
            <div className="hidden sm:block text-sm text-[hsl(215,16%,47%)]">GmbH</div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[hsl(220,13%,22%)] hover:text-[hsl(213,78%,32%)] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+4922719877397" 
              className="flex items-center space-x-2 text-[hsl(213,78%,32%)] hover:text-[hsl(187,96%,43%)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+49 2271 9877397</span>
            </a>
            <Button 
              onClick={() => handleNavClick("/#contact")}
              className="cta-button text-white px-6 py-2 rounded-full font-medium"
            >
              Angebot einholen
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-bold text-[hsl(213,78%,32%)]">SILBERREH GmbH</div>
              </div>
              
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-[hsl(220,13%,22%)] hover:text-[hsl(213,78%,32%)] transition-colors text-lg text-left w-full"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-6 border-t space-y-4">
                  <a 
                    href="tel:+4922719877397" 
                    className="flex items-center space-x-3 text-[hsl(213,78%,32%)]"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+49 2271 9877397</span>
                  </a>
                  <Button 
                    onClick={() => handleNavClick("/#contact")}
                    className="cta-button text-white px-6 py-3 rounded-full font-medium w-full"
                  >
                    Angebot einholen
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
