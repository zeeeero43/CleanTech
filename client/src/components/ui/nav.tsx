import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Menu, Phone, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logoPath from "@assets/svgexport-1 (11)_1752413065010.png";

export function Navigation() {
  const [location, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dienstleistungen", href: "/#services" },
    { label: "Über uns", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle hash navigation when on homepage
  useEffect(() => {
    if (location === "/" && window.location.hash) {
      const sectionId = window.location.hash.replace('#', '');
      const attemptScroll = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Clear the hash after scrolling
          window.history.replaceState(null, '', '/');
        } else {
          // Try again after a short delay
          setTimeout(attemptScroll, 100);
        }
      };
      
      // Start scrolling after a brief delay
      setTimeout(attemptScroll, 200);
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];
      if (location === "/" || location === "") {
        // Already on homepage, just scroll
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        // Navigate to homepage with hash
        window.location.href = href;
      }
    }
  };

  const handleQuoteClick = () => {
    setIsOpen(false);
    if (location === "/" || location === "") {
      // Already on homepage, just scroll
      setTimeout(() => scrollToSection("contact"), 100);
    } else {
      // Navigate to homepage with hash
      window.location.href = "/#contact";
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "0 4px 20px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={logoPath} alt="SILBERREH Logo" className="w-16 h-16 object-contain" />
              <div className="text-2xl font-bold text-[hsl(213,78%,32%)]">SILBERREH</div>
              <div className="text-sm text-[hsl(215,16%,47%)] ml-1">GmbH</div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.includes("#") ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[hsl(220,13%,22%)] hover:text-[hsl(213,78%,32%)] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[hsl(220,13%,22%)] hover:text-[hsl(213,78%,32%)] transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              )
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
              onClick={handleQuoteClick}
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
                <div className="flex items-center space-x-2">
                  <img src={logoPath} alt="SILBERREH Logo" className="w-12 h-12 object-contain" />
                  <div className="text-xl font-bold text-[hsl(213,78%,32%)]">SILBERREH</div>
                  <div className="text-sm text-[hsl(215,16%,47%)] ml-1">GmbH</div>
                </div>
              </div>
              
              <nav className="space-y-6">
                {navItems.map((item) => (
                  item.href.includes("#") ? (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="block text-[hsl(220,13%,22%)] hover:text-[hsl(213,78%,32%)] transition-colors text-lg text-left w-full"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block text-[hsl(220,13%,22%)] hover:text-[hsl(213,78%,32%)] transition-colors text-lg"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                
                <div className="pt-6 border-t border-gray-200 space-y-6">
                  <a 
                    href="tel:+4922719877397" 
                    className="flex items-center space-x-2 text-[hsl(213,78%,32%)] hover:text-[hsl(187,96%,43%)] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">+49 2271 9877397</span>
                  </a>
                  <Button 
                    onClick={handleQuoteClick}
                    className="cta-button text-white px-6 py-2 rounded-full font-medium w-full"
                  >
                    Angebot einholen
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}