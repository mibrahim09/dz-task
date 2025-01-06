import { Injectable, Logger } from '@nestjs/common';
import { SyncedProduct } from '../../../products-sync/types/synced-product.type';

@Injectable()
export abstract class ProductServiceV1 {
  protected logger = new Logger(ProductServiceV1.name);

  abstract findAll(): Promise<any>;

  abstract syncProducts(results: SyncedProduct[]): Promise<void>;

  abstract markStaleProducts(): Promise<void>;
}
