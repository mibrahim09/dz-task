import { Injectable } from '@nestjs/common';
import { ProviderProductEntity } from '../../types/provider-product.entity';
import { CreateProductCommand } from '../../types/create-product.command';
import { SyncedProduct } from '../../../products-sync/types/synced-product.type';

@Injectable()
export abstract class ProviderProductRepositoryV1 {
  abstract findByKey(key: string): Promise<ProviderProductEntity>;

  abstract createItem(param: CreateProductCommand): Promise<void>;

  abstract updateItem(providerProductId: number, item: SyncedProduct): Promise<void>;
}
