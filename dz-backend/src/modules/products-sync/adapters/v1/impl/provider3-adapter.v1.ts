import { ProductAggregatorAdapter } from '../../product-aggregator.adapter';
import axios, { AxiosInstance } from 'axios';
import { SyncedProduct } from '../../../types/synced-product.type';
import { Provider3ProductType } from '../../../types/provider-3-product.type';
import { PROVIDER_3_NAME } from '../../../constants/provider';

export class Provider3AdapterV1 extends ProductAggregatorAdapter<Provider3ProductType> {
  private readonly axios: AxiosInstance;

  constructor() {
    super(PROVIDER_3_NAME);
    this.axios = axios.create({ baseURL: process.env.PROVIDER_3_URL });
  }

  async syncList(): Promise<SyncedProduct[]> {
    const { data } = await this.axios.get<{ result: Provider3ProductType[] }>('');
    return data?.result?.map((item) => this.mapItem(item)) ?? [];
  }

  mapItem(item: Provider3ProductType): SyncedProduct {
    return {
      id: item.prv_id,
      name: item.prv_name,
      description: item.prv_description,
      price: item.prv_price,
      currency: item.prv_currency,
      availability: item.prv_availability,
      lastUpdated: item.lastUpdated,
      providerName: this.getProviderName(),
    };
  }
}
