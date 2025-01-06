import { ProductsSyncService } from '../products-sync.service';
import { Inject, Injectable } from '@nestjs/common';
import { ProductAggregatorAdapter } from '../../adapters/product-aggregator.adapter';
import { Provider1ProductType } from '../../types/provider-1-product.type';
import { PROVIDER_1_KEY, PROVIDER_2_KEY, PROVIDER_3_KEY } from '../../constants/provider';
import { Provider2ProductType } from '../../types/provider-2-product.type';
import { Provider3ProductType } from '../../types/provider-3-product.type';

@Injectable()
export class ProductsSyncServiceImpl extends ProductsSyncService {
  private adapters: ProductAggregatorAdapter<Provider1ProductType | Provider2ProductType | Provider3ProductType>[] = [];

  constructor(
    @Inject(PROVIDER_1_KEY)
    private provider1Adapter: ProductAggregatorAdapter<Provider1ProductType>,
    @Inject(PROVIDER_2_KEY)
    private provider2Adapter: ProductAggregatorAdapter<Provider2ProductType>,
    @Inject(PROVIDER_3_KEY)
    private provider3Adapter: ProductAggregatorAdapter<Provider3ProductType>,
  ) {
    super();
    this.adapters.push(provider1Adapter);
    this.adapters.push(provider2Adapter);
    this.adapters.push(provider3Adapter);
  }

  async syncProducts() {
    this.logger.debug('ProductsSyncServiceImpl.syncProducts--start');

    const promises = this.adapters.map(async (adapter) => {
      try {
        return await adapter.syncList();
      } catch (e) {
        this.logger.error(`failed to sync with adapter=${adapter.getProviderName()}`);
      }
    });
    const results = await Promise.all(promises);

    this.logger.debug('ProductsSyncServiceImpl.syncProducts--done');
  }
}
