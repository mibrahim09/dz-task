import { ProductsSyncServiceV1 } from '../products-sync-service-v1.service';
import { Inject, Injectable } from '@nestjs/common';
import { ProductAggregatorAdapter } from '../../../adapters/product-aggregator.adapter';
import { Provider1ProductType } from '../../../types/provider-1-product.type';
import { Provider2ProductType } from '../../../types/provider-2-product.type';
import { Provider3ProductType } from '../../../types/provider-3-product.type';
import { PROVIDER_1_KEY, PROVIDER_2_KEY, PROVIDER_3_KEY } from '../../../constants/provider';
import { ProductServiceV1 } from '../../../../products/services/v1/product.service';

@Injectable()
export class ProductsSyncServiceV1Impl extends ProductsSyncServiceV1 {
  private adapters: ProductAggregatorAdapter<Provider1ProductType | Provider2ProductType | Provider3ProductType>[] = [];

  constructor(
    @Inject(PROVIDER_1_KEY)
    private readonly provider1Adapter: ProductAggregatorAdapter<Provider1ProductType>,
    @Inject(PROVIDER_2_KEY)
    private readonly provider2Adapter: ProductAggregatorAdapter<Provider2ProductType>,
    @Inject(PROVIDER_3_KEY)
    private readonly provider3Adapter: ProductAggregatorAdapter<Provider3ProductType>,
    private readonly productService: ProductServiceV1,
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
        this.logger.error(`error=${e.toString()}`);
      }
    });
    const results = await Promise.all(promises);
    await this.productService.syncProducts(results.flat());
    this.logger.debug('ProductsSyncServiceImpl.syncProducts--done');
  }
}
