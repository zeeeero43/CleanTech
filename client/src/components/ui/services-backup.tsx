import { Card, CardContent } from "./card";
import { Button } from "./button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import industriereinigungImage from "@assets/professioneller-industriereiniger-im-einheitlichen-schutzboden-der-lebensmittelverarbeitungsanlage-min_1752416442442.jpg";
import bauschlussreinigungImage from "@assets/mannlicher-arbeiter-der-auf-der-baustelle-eine-betonestrichmaschine-verwendet-min_1752416454977.jpg";
import bueroreinigungImage from "@assets/mittlere-aufnahme-von-menschen-die-gebaude-reinigen-min_1752416458056.jpg";
import fensterreinigungImage from "@assets/mittlere-aufnahme-von-menschen-die-gebaude-reinigen (1)-min (1)_1752416463220.jpg";

// BACKUP OF OLD SERVICES COMPONENT - ORIGINAL GRID LAYOUT
export function ServicesBackup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      image: industriereinigungImage,
      title: "Industriereinigung",
      description: "Maschinenreinigung, Produktionsanlagen, Chemie-/Säurebehandlungen. Hochdruck- und Heißreinigung für optimale Betriebseffizienz.",
      href: "/services/industriereinigung",
      icon: "🏭"
    },
    {
      image: bauschlussreinigungImage,
      title: "Bauschlussreinigung",
      description: "Komplette Bauschlussreinigung inklusive Wertstofftrennung und fachgerechter Entsorgung. Übergabebereit in kürzester Zeit.",
      href: "/services/bauschlussreinigung",
      icon: "🏗️"
    },
    {
      image: bueroreinigungImage,
      title: "Unterhalts- & Gewerbereinigung",
      description: "Regelmäßige Reinigung für Büros, Praxen und Geschäfte. Flexible Zeiten und individuelle Reinigungspläne.",
      href: "/services/unterhaltsreinigung",
      icon: "🏢"
    },
    {
      image: fensterreinigungImage,
      title: "Fenster- & Glasreinigung",
      description: "Streifenfreie Ergebnisse durch Osmose-Technik und professionelle Steiger-Ausrüstung. Auch schwer erreichbare Bereiche.",
      href: "/services/fensterreinigung",
      icon: "🪟"
    }
  ];

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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-[hsl(220,13%,97%)] relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[hsl(187,96%,43%)]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[hsl(213,78%,32%)]/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block">Unsere</span>{" "}
            <span className="gradient-text inline-block">Dienstleistungen</span>
            <motion.div
              className="inline-block ml-2"
              animate={{ 
                rotate: [0, 20, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                delay: 1
              }}
            >
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.h2>
          <motion.p 
            className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professionelle Gebäudereinigung für jeden Bedarf - von der Industrie bis zum Büro
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="hover:scale-102 hover:-translate-y-1 transition-transform"
            >
              <Card className="service-card glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Subtle corner accent */}
                <div className="absolute top-2 right-2 z-10">
                  <Sparkles className="w-4 h-4 text-[hsl(187,96%,43%)] opacity-60" />
                </div>

                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center relative">
                    <div className="relative group">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,78%,32%)]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 right-2 text-2xl">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(220,9%,43%)] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <Button 
                      variant="link" 
                      className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)] font-medium p-0 hover:scale-102 transition-transform"
                    >
                      Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}