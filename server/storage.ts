import { contactRequests, type ContactRequest, type InsertContactRequest } from "@shared/schema";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  getContactRequest(id: number): Promise<ContactRequest | undefined>;
  updateContactRequest(id: number, updates: Partial<ContactRequest>): Promise<ContactRequest | undefined>;
}

export class MemStorage implements IStorage {
  private contactRequests: Map<number, ContactRequest>;
  private currentId: number;

  constructor() {
    this.contactRequests = new Map();
    this.currentId = 1;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentId++;
    const request: ContactRequest = { 
      ...insertRequest,
      size: insertRequest.size || null,
      frequency: insertRequest.frequency || null,
      preferredDate: insertRequest.preferredDate || null,
      company: insertRequest.company || null,
      message: insertRequest.message || null,
      privacyConsent: insertRequest.privacyConsent || true,
      id,
      createdAt: new Date(),
      processed: false
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values()).sort((a, b) => {
      const aTime = a.createdAt ? a.createdAt.getTime() : 0;
      const bTime = b.createdAt ? b.createdAt.getTime() : 0;
      return bTime - aTime; // Sort by newest first
    });
  }

  async getContactRequest(id: number): Promise<ContactRequest | undefined> {
    return this.contactRequests.get(id);
  }

  async updateContactRequest(id: number, updates: Partial<ContactRequest>): Promise<ContactRequest | undefined> {
    const existing = this.contactRequests.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...updates };
    this.contactRequests.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
