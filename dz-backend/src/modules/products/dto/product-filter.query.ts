import { PaginationQuery } from '../../../types/pagination.query';

export class ProductFilterQuery extends PaginationQuery {
  name: string;
  priceFrom?: number;
  priceTo?: number;
  availability?: string;
  provider?: string;
}
