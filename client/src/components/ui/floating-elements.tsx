import { useState, useEffect } from "react";
import { Button } from "./button";
import { ArrowUp, MessageCircle, Phone, Sparkles } from "lucide-react";
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
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/4922719877397"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          
          {/* Pulse ring animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Sparkle animation */}
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-3 h-3 text-yellow-400" />
          </motion.div>
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
              className="bg-[hsl(187,96%,43%)] hover:bg-[hsl(213,78%,32%)] text-white p-3 rounded-full shadow-lg transition-colors"
              size="icon"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
