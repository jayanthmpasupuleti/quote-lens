import { AttentionItem } from './analysis';

export interface Vendor {
  name: string;
  location?: string;
  phone?: string;
}

export interface LineItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  attention?: AttentionItem;
}

export interface Quote {
  id: string;
  vendor: Vendor;
  category: string;
  currency: string;
  totalAmount: number;
  attentionCount: number;
  date: string; // ISO date string or relative display helper
  itemsCount: number;
  lineItems?: LineItem[];
  notes?: string;
}
