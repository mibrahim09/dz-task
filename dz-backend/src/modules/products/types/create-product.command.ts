import { SyncedProduct } from '../../products-sync/types/synced-product.type';

export class CreateProductCommand extends SyncedProduct {
  providerId: number;
  providerItemId: string;
}
