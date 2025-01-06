import { ProductServiceV1 } from '../product.service';
import { Injectable } from '@nestjs/common';
import { ProductRepositoryV1 } from '../../../repostories/v1/product.repository';
import { SyncedProduct } from 'src/modules/products-sync/types/synced-product.type';
import { ProductDbSyncerHelperV1 } from '../helpers/product-db-syncer.helper';

@Injectable()
export class ProductServiceV1Impl extends ProductServiceV1 {
  constructor(
    private readonly repository: ProductRepositoryV1,
    private readonly productDbSyncer: ProductDbSyncerHelperV1,
  ) {
    super();
  }

  async syncProducts(results: SyncedProduct[]): Promise<void> {
    return this.productDbSyncer.syncProducts(results);
  }

  async markStaleProducts(): Promise<void> {
    return this.repository.markStaleProducts();
  }

  async findAll(): Promise<any> {
    return this.repository.findAll();
  }
}
