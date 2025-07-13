import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  serviceType: text("service_type").notNull(),
  frequency: text("frequency"),
  size: text("size"),
  preferredDate: text("preferred_date"),
  name: text("name").notNull(),
  company: text("company"),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  message: text("message"),
  privacyConsent: boolean("privacy_consent").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  processed: boolean("processed").default(false),
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
  processed: true,
});

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
