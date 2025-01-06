import { Injectable, Logger } from '@nestjs/common';
import { SyncedProduct } from '../../../products-sync/types/synced-product.type';
import { ProductFilterQuery } from '../../dto/queries/product-filter.query';
import { ProductTimeSearchQueryDto } from '../../dto/queries/product-time-search-query.dto';

@Injectable()
export abstract class ProductServiceV1 {
  protected logger = new Logger(ProductServiceV1.name);

  abstract findProducts(query: ProductFilterQuery): Promise<any>;

  abstract findProductById(id: number): Promise<any>;

  abstract syncProducts(results: SyncedProduct[]): Promise<void>;

  abstract markStaleProducts(): Promise<void>;

  abstract findProductSearch(query: ProductTimeSearchQueryDto): Promise<any>;
}
