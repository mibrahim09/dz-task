import { Injectable } from '@nestjs/common';
import { ProductFilterQuery } from '../../dto/queries/product-filter.query';

@Injectable()
export abstract class ProductRepositoryV1 {
  abstract findAll(query: ProductFilterQuery): Promise<any>;

  abstract markStaleProducts(): Promise<void>;

  abstract findProductById(id: number): Promise<any>;
}
