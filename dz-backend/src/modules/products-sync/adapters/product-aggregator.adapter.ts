import { SyncedProduct } from '../types/synced-product.type';

export abstract class ProductAggregatorAdapter<T> {
  protected constructor(private readonly providerName: string) {}

  getProviderName() {
    return this.providerName;
  }

  abstract syncList(): Promise<SyncedProduct[]>;

  abstract mapItem(item: T): SyncedProduct;
}
