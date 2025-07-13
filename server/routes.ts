import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactRequestSchema } from "@shared/schema";
import { storage } from "./storage";
import { sendContactNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Send email notification
      await sendContactNotification(contactRequest);
      
      res.json({ 
        success: true, 
        message: "Vielen Dank für Ihre Anfrage! Wir werden uns schnellstmöglich bei Ihnen melden." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Fehler beim Verarbeiten Ihrer Anfrage. Bitte versuchen Sie es erneut." 
      });
    }
  });

  // Get all contact requests (for admin)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
