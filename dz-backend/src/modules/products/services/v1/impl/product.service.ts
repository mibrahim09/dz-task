import { ProductServiceV1 } from '../product.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepositoryV1 } from '../../../repostories/v1/product.repository';
import { SyncedProduct } from 'src/modules/products-sync/types/synced-product.type';
import { ProductDbSyncerHelperV1 } from '../helpers/product-db-syncer.helper';
import { ProductUpdatesRepositoryV1 } from '../../../repostories/v1/product-updates.repository';
import { ProductFilterQuery } from '../../../dto/queries/product-filter.query';
import { ProductTimeSearchQueryDto } from '../../../dto/queries/product-time-search-query.dto';

@Injectable()
export class ProductServiceV1Impl extends ProductServiceV1 {
  constructor(
    private readonly repository: ProductRepositoryV1,
    private readonly productChangesRepository: ProductUpdatesRepositoryV1,
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

  async findProducts(query: ProductFilterQuery): Promise<any> {
    return this.repository.findAll(query);
  }

  async findProductById(id: number): Promise<any> {
    const result = await this.repository.findProductById(id);
    if (!result) {
      throw new NotFoundException('Product not found');
    }
    return result;
  }

  findProductSearch(query: ProductTimeSearchQueryDto): Promise<any> {
    return this.productChangesRepository.findProductChangesByTime(query);
  }
}
