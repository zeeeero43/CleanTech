import { useState, useEffect } from "react";
import { Button } from "./button";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";

export function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/4922719877397"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="scroll-to-top visible bg-[hsl(187,96%,43%)] hover:bg-[hsl(213,78%,32%)] text-white p-3 rounded-full shadow-lg transition-colors"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}


    </>
  );
}
