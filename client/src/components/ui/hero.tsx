import { Button } from "./button";
import { Phone, FileText, Award, Shield, ThumbsUp, ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@assets/mittlere-aufnahme-einer-frau-die-drinnen-putzt-min_1752415170427.jpg";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[hsl(187,96%,43%)]/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={heroImage} 
          alt="Professional cleaning service - woman cleaning indoors" 
          className="w-full h-full object-cover" 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="hero-gradient absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="inline-block">
              Professionelle Gebäudereinigung
            </span>
            <br />
            <motion.span 
              className="gradient-text inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
            >
              für höchste Ansprüche
            </motion.span>
            <div className="inline-block ml-2">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"
            variants={itemVariants}
          >
            Ihr vertrauensvoller Partner für makellose Sauberkeit in Industrie, Gewerbe und Privat. 
            Kostenlose Beratung & Angebote.
          </motion.p>
          
          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            {[
              { icon: Award, text: "20+ Jahre Erfahrung" },
              { icon: Shield, text: "Vollversichert" },
              { icon: ThumbsUp, text: "100% Zufriedenheitsgarantie" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="trust-badge px-4 py-2 rounded-full text-sm font-medium flex items-center"
                variants={badgeVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Dual CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            variants={itemVariants}
          >
            <Button 
              onClick={scrollToContact}
              className="cta-button text-white px-10 py-6 rounded-full font-semibold text-xl hover:scale-102 transition-transform"
            >
              <FileText className="w-6 h-6 mr-2" />
              Kostenloses Angebot anfordern
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-white text-[hsl(213,78%,32%)] px-10 py-6 rounded-full font-semibold text-xl border-white hover:bg-[hsl(220,13%,97%)] hover:scale-102 transition-transform"
            >
              <a href="tel:+4922719877397">
                <Phone className="w-6 h-6 mr-2" />
                Jetzt anrufen
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
