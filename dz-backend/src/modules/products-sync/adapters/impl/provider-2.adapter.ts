import { ProductAggregatorAdapter } from '../product-aggregator.adapter';
import { SyncedProduct } from '../../types/synced-product.type';
import axios, { AxiosInstance } from 'axios';

import { Provider2ProductType } from '../../types/provider-2-product.type';
import { PROVIDER_2_NAME } from '../../constants/provider';

export class Provider2Adapter extends ProductAggregatorAdapter<Provider2ProductType> {
  private readonly axios: AxiosInstance;

  constructor() {
    super(PROVIDER_2_NAME);
    this.axios = axios.create({ baseURL: 'http://localhost:3000/provider2' });
  }

  async syncList(): Promise<SyncedProduct[]> {
    const { data } = await this.axios.get<Provider2ProductType[]>('');
    return data?.map((item) => this.mapItem(item)) ?? [];
  }

  mapItem(item: Provider2ProductType): SyncedProduct {
    return {
      id: item.uuid,
      name: item.name,
      description: item.desc,
      price: item.price,
      currency: item.currency,
      availability: item.isAvailable ? 'AVAILABLE' : 'UNAVAILABLE',
      lastUpdated: item.lastUpdated,
    };
  }
}
