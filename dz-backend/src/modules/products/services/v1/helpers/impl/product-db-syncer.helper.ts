import { ProductDbSyncerHelperV1 } from '../product-db-syncer.helper';
import { SyncedProduct } from '../../../../../products-sync/types/synced-product.type';
import { ProductRepositoryV1 } from '../../../../repostories/v1/product.repository';
import { ProviderProductRepositoryV1 } from '../../../../repostories/v1/provider-product.repository';
import { ProviderRepositoryV1 } from '../../../../repostories/v1/provider.repository';
import * as moment from 'moment';
import { ProviderEntity } from '../../../../types/provider.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductDbSyncerHelperV1Impl extends ProductDbSyncerHelperV1 {
  constructor(
    private readonly productRepository: ProductRepositoryV1,
    private readonly providerRepository: ProviderRepositoryV1,
    private readonly providerProductRepository: ProviderProductRepositoryV1,
  ) {
    super();
  }

  async syncProducts(results: SyncedProduct[]): Promise<void> {
    const providers = await this.providerRepository.findAll();
    const upsertPromises = results.map(async (item) => {
      const providerKey = this.buildKey(item);
      const providerProduct = await this.providerProductRepository.findByKey(providerKey);
      const productProviderEntity = providers.find((provider) => provider.name === item.providerName);
      if (!productProviderEntity) {
        // maybe throw this to DLQ for further processing.
        this.logger.error(`Provider not found. Failed to process item=${JSON.stringify(item)}`);
        return;
      }
      if (!providerProduct) {
        await this.createNewProduct(item, productProviderEntity);
        return;
      }
      if (moment(item.lastUpdated).isAfter(providerProduct.providerLastUpdatedAt)) {
        await this.updateItem(item, providerProduct.id);
      }
    });
    await Promise.allSettled(upsertPromises);
  }

  private buildKey(item: SyncedProduct) {
    return `${item.providerName}-${item.id}`;
  }

  private async updateItem(item: SyncedProduct, providerProductId: number) {
    this.logger.log(`updating item=${item.id}-${item.providerName}`);
    await this.providerProductRepository.updateItem(providerProductId, item);
  }

  private async createNewProduct(item: SyncedProduct, productProviderEntity: ProviderEntity) {
    await this.providerProductRepository.createItem({
      ...item,
      providerId: productProviderEntity.id,
      providerItemId: this.buildKey(item),
    });
  }
}
