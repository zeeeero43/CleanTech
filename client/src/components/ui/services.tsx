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

export function Services() {
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
      title: "Büro- & Gewerbereinigung",
      description: "Regelmäßige Reinigung für Büros, Praxen und Geschäfte. Flexible Zeiten und individuelle Reinigungspläne.",
      href: "/services/bueroreinigung",
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-[hsl(187,96%,43%)]/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
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
            Professionelle Gebäudereiningung für jeden Bedarf - von der Industrie bis zum Büro
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
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="service-card glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-3d relative overflow-hidden">
                {/* Animated Corner Sparkle */}
                <motion.div
                  className="absolute top-2 right-2 z-10"
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <Sparkles className="w-4 h-4 text-[hsl(187,96%,43%)]" />
                </motion.div>

                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="mb-6 flex justify-center relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[hsl(213,78%,32%)]/20 to-transparent rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute bottom-2 right-2 text-2xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-[hsl(213,78%,32%)] mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[hsl(220,9%,43%)] mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                  <Link href={service.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="link" 
                        className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)] font-medium p-0"
                      >
                        Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </motion.div>
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
