import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Checkbox } from "./checkbox";
import { Card, CardContent } from "./card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  serviceType: z.string().min(1, "Bitte wählen Sie eine Reinigungsart"),
  frequency: z.string().optional(),
  size: z.string().optional(),
  preferredDate: z.string().optional(),
  name: z.string().min(1, "Name ist erforderlich"),
  company: z.string().optional(),
  phone: z.string().min(1, "Telefonnummer ist erforderlich"),
  email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
  message: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Datenschutzbestimmungen müssen akzeptiert werden",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      serviceType: "",
      frequency: "",
      size: "",
      preferredDate: "",
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Anfrage erfolgreich gesendet!",
          description: result.message,
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[hsl(220,13%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(213,78%,32%)] mb-6">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-[hsl(220,9%,43%)] max-w-3xl mx-auto">
            Fordern Sie jetzt Ihr kostenloses Angebot an
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glassmorphism border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="serviceType">Reinigungsart *</Label>
                    <Select 
                      onValueChange={(value) => form.setValue("serviceType", value)}
                      value={form.watch("serviceType")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="industriereinigung">Industriereinigung</SelectItem>
                        <SelectItem value="bauschlussreinigung">Bauschlussreinigung</SelectItem>
                        <SelectItem value="bueroreinigung">Büroreinigung</SelectItem>
                        <SelectItem value="fensterreinigung">Fensterreinigung</SelectItem>
                        <SelectItem value="grundreinigung">Grundreinigung</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.serviceType.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="frequency">Reinigungshäufigkeit</Label>
                    <Select 
                      onValueChange={(value) => form.setValue("frequency", value)}
                      value={form.watch("frequency")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="einmalig">Einmalig</SelectItem>
                        <SelectItem value="woechentlich">Wöchentlich</SelectItem>
                        <SelectItem value="monatlich">Monatlich</SelectItem>
                        <SelectItem value="nach-bedarf">Nach Bedarf</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="size">Größe/Umfang</Label>
                    <Input 
                      {...form.register("size")}
                      placeholder="m² oder Anzahl Räume" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredDate">Wunschtermin</Label>
                    <Input 
                      {...form.register("preferredDate")}
                      type="date" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input {...form.register("name")} />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Firma (optional)</Label>
                    <Input {...form.register("company")} />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input {...form.register("phone")} type="tel" />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input {...form.register("email")} type="email" />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea 
                    {...form.register("message")}
                    rows={4}
                    placeholder="Zusätzliche Wünsche oder Besonderheiten" 
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="privacy"
                    checked={form.watch("privacyConsent")}
                    onCheckedChange={(checked) => form.setValue("privacyConsent", checked as boolean)}
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten gemäß{" "}
                    <a href="/legal/datenschutz" className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)]">
                      Datenschutzerklärung
                    </a>{" "}
                    zu *
                  </Label>
                </div>
                {form.formState.errors.privacyConsent && (
                  <p className="text-red-500 text-sm">{form.formState.errors.privacyConsent.message}</p>
                )}
                
                <Button 
                  type="submit" 
                  className="cta-button w-full text-white py-4 rounded-lg font-semibold text-lg"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Wird gesendet..." : "Kostenloses Angebot anfordern"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-6">
                  Kontaktinformationen
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Telefon</div>
                      <a 
                        href="tel:+491525309504" 
                        className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)]"
                      >
                        +49 1525 3090504
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-medium">E-Mail</div>
                      <a 
                        href="mailto:info@silberreh.de" 
                        className="text-[hsl(187,96%,43%)] hover:text-[hsl(213,78%,32%)]"
                      >
                        info@silberreh.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Adresse</div>
                      <div className="text-[hsl(220,9%,43%)]">
                        Kentener Wiesen 39a<br />
                        50126 Bergheim
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-[hsl(187,96%,43%)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Öffnungszeiten</div>
                      <div className="text-[hsl(220,9%,43%)]">
                        Mo-Fr: 8:00-17:00 Uhr<br />
                        Sa: 8:00-14:00 Uhr<br />
                        So: Geschlossen
                      </div>
                    </div>
                  </div>
                  

                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[hsl(213,78%,32%)] mb-6">
                  Einsatzgebiet
                </h3>
                <p className="text-[hsl(220,9%,43%)] mb-4">
                  Unser Einsatzgebiet:
                </p>
                <div className="text-[hsl(220,9%,43%)] bg-[hsl(187,96%,43%)]/10 p-4 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-[hsl(187,96%,43%)] mr-2 text-lg">✓</span>
                    <span className="font-semibold text-[hsl(213,78%,32%)]">
                      Bergheim + 80km Umkreis
                    </span>
                  </div>
                  <p className="text-sm text-[hsl(220,9%,43%)] mt-2 ml-6">
                    Wir sind in einem Umkreis von 80 Kilometern rund um Bergheim für Sie da
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
