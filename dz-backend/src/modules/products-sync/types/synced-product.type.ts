export class SyncedProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  availability: 'AVAILABLE' | 'UNAVAILABLE';
  lastUpdated: Date;
  providerName: string;
}
