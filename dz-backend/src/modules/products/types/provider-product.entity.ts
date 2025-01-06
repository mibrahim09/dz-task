import { ProductEntity } from './product.entity';

export class ProviderProductEntity {
  id: number;
  providerId: number;
  providerItemId: string;
  providerLastUpdatedAt: Date;
  product: ProductEntity;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
}
