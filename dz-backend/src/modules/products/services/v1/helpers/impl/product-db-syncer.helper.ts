import { ProductDbSyncerHelperV1 } from '../product-db-syncer.helper';
import { SyncedProduct } from '../../../../../products-sync/types/synced-product.type';
import { ProviderProductRepositoryV1 } from '../../../../repostories/v1/provider-product.repository';
import { ProviderRepositoryV1 } from '../../../../repostories/v1/provider.repository';
import * as moment from 'moment';
import { ProviderEntity } from '../../../../types/provider.entity';
import { Injectable } from '@nestjs/common';
import { ProductUpdatesRepositoryV1 } from '../../../../repostories/v1/product-updates.repository';
import { ProviderProductEntity } from '../../../../types/provider-product.entity';

@Injectable()
export class ProductDbSyncerHelperV1Impl extends ProductDbSyncerHelperV1 {
  constructor(
    private readonly providerRepositoryV1: ProviderRepositoryV1,
    private readonly providerProductRepositoryV1: ProviderProductRepositoryV1,
    private readonly productUpdatesRepositoryV1: ProductUpdatesRepositoryV1,
  ) {
    super();
  }

  async syncProducts(results: SyncedProduct[]): Promise<void> {
    const providers = await this.providerRepositoryV1.findAll();
    const upsertPromises = results.map(async (item) => {
      const providerKey = this.buildKey(item);
      const providerProduct = await this.providerProductRepositoryV1.findByKey(providerKey);
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
        await this.updateItem(item, providerProduct);
      }
    });
    await Promise.all(upsertPromises);
  }

  private buildKey(item: SyncedProduct) {
    return `${item.providerName}-${item.id}`;
  }

  private async updateItem(item: SyncedProduct, oldItem: ProviderProductEntity) {
    this.logger.log(`updating item=${item.id}-${item.providerName}`);
    await this.providerProductRepositoryV1.updateItem(oldItem.id, item);
    const updateObject: {
      price?: { oldValue: number; newValue: number };
      availability?: { oldValue: string; newValue: string };
    } = {};

    if (item.price !== oldItem.product.price) {
      updateObject.price = {
        oldValue: oldItem.product.price,
        newValue: item.price,
      };
    }
    if (item.availability !== oldItem.product.availability) {
      updateObject.availability = {
        oldValue: oldItem.product.availability,
        newValue: item.availability,
      };
    }
    if (updateObject.price?.oldValue || updateObject.availability?.oldValue) {
      await this.productUpdatesRepositoryV1.createUpdateLog(oldItem.product.id, updateObject);
    }
  }

  private async createNewProduct(item: SyncedProduct, productProviderEntity: ProviderEntity) {
    await this.providerProductRepositoryV1.createItem({
      ...item,
      providerId: productProviderEntity.id,
      providerItemId: this.buildKey(item),
    });
  }
}
