import { SEO } from "@/lib/seo";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setOpenItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const faqItems = [
    {
      id: "services",
      question: "Welche Reinigungsdienstleistungen bieten Sie an?",
      answer: "Wir bieten professionelle Reinigungsdienstleistungen für Industrie, Büros, Bauschluss und Fenster. Unsere Dienstleistungen umfassen regelmäßige Wartung, Tiefenreinigung und spezialisierte Reinigungsverfahren für verschiedene Branchen."
    },
    {
      id: "area",
      question: "In welchen Gebieten sind Sie tätig?",
      answer: "Wir sind hauptsächlich im Raum Bergheim, Köln, Düsseldorf und dem gesamten Rhein-Erft-Kreis tätig. Für größere Projekte können wir auch darüber hinaus tätig werden."
    },
    {
      id: "quote",
      question: "Wie erhalte ich ein Angebot?",
      answer: "Sie können uns über unser Kontaktformular, per Telefon (+49 1525 3090504) oder WhatsApp kontaktieren. Wir erstellen Ihnen gerne ein kostenloses und unverbindliches Angebot."
    },
    {
      id: "frequency",
      question: "Wie oft sollte eine professionelle Reinigung durchgeführt werden?",
      answer: "Das hängt von der Art der Räumlichkeiten und der Nutzung ab. Büros werden meist wöchentlich oder täglich gereinigt, Industrieanlagen je nach Bedarf, und Bauschlussreinigungen sind einmalige Dienstleistungen."
    },
    {
      id: "equipment",
      question: "Bringen Sie Ihre eigenen Reinigungsmittel und Geräte mit?",
      answer: "Ja, wir verwenden professionelle Reinigungsgeräte und hochwertige, umweltfreundliche Reinigungsmittel. Alle Materialien sind im Preis inbegriffen."
    },
    {
      id: "insurance",
      question: "Sind Sie versichert?",
      answer: "Ja, wir sind vollständig versichert. Unsere Haftpflichtversicherung deckt alle Schäden ab, die während der Reinigungsarbeiten entstehen könnten."
    },
    {
      id: "emergency",
      question: "Bieten Sie Notfallreinigungen an?",
      answer: "Ja, wir bieten 24/7 Notfallreinigungen an. Kontaktieren Sie uns telefonisch für dringende Reinigungsarbeiten."
    },
    {
      id: "payment",
      question: "Welche Zahlungsmethoden akzeptieren Sie?",
      answer: "Wir akzeptieren Banküberweisungen, Rechnungszahlungen und bei kleineren Aufträgen auch Barzahlungen. Die Zahlungsmodalitäten werden individuell vereinbart."
    },
    {
      id: "staff",
      question: "Sind Ihre Mitarbeiter geschult und zuverlässig?",
      answer: "Alle unsere Mitarbeiter sind professionell geschult, zuverlässig und haben langjährige Erfahrung in der Reinigungsbranche. Wir führen regelmäßige Schulungen durch."
    },
    {
      id: "eco",
      question: "Verwenden Sie umweltfreundliche Reinigungsmittel?",
      answer: "Ja, wir setzen auf umweltfreundliche und nachhaltige Reinigungsmittel, die sowohl effektiv als auch schonend für die Umwelt sind."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <SEO 
        title="Häufig gestellte Fragen - SILBERREH GmbH"
        description="Antworten auf die häufigsten Fragen zu unseren Reinigungsdienstleistungen in Bergheim und Umgebung. Professionelle Reinigung für Industrie, Büros und Bauschluss."
        keywords="FAQ, Reinigung Bergheim, Reinigungsservice Fragen, Gebäudereinigung FAQ"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Reinigungsdienstleistungen
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <Collapsible key={item.id} open={openItems.includes(item.id)}>
                <CollapsibleTrigger
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-b-xl border-x border-b border-gray-200 dark:border-gray-700 -mt-3">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Weitere Fragen?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Haben Sie weitere Fragen? Kontaktieren Sie uns gerne direkt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+4915253090504"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Jetzt anrufen
                </a>
                <a
                  href="/kontakt"
                  className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Kontaktformular
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}