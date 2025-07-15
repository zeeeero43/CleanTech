import { useState, useEffect } from "react";
import { Button } from "./button";
import { ArrowUp, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Phone Button */}
      <motion.a
        href="tel:+4922719877397"
        className="floating-whatsapp bg-[hsl(213,78%,32%)] hover:bg-[hsl(213,78%,28%)] text-white p-4 rounded-full shadow-lg transition-colors hover:scale-105"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      >
        <div className="relative">
          <Phone className="w-6 h-6" />
          
          {/* Subtle pulse */}
          <div className="absolute inset-0 rounded-full bg-[hsl(213,78%,32%)]/20 animate-pulse" />
          
          {/* Simple sparkle */}
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-3 h-3 text-yellow-400" />
          </div>
        </div>
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="scroll-to-top visible"
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              onClick={scrollToTop}
              className="bg-[hsl(187,96%,43%)] hover:bg-[hsl(213,78%,32%)] text-white p-3 rounded-full shadow-lg transition-colors hover:scale-105"
              size="icon"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
