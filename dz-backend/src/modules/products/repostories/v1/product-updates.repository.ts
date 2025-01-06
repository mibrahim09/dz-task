import { Injectable } from '@nestjs/common';
import { ProductTimeSearchQueryDto } from '../../dto/queries/product-time-search-query.dto';

@Injectable()
export abstract class ProductUpdatesRepositoryV1 {
  abstract createUpdateLog(productId: number, changeLog: object): Promise<void>;

  abstract findProductChangesByTime(query: ProductTimeSearchQueryDto): Promise<any>;
}
