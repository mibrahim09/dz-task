import { ProductAggregatorAdapter } from '../product-aggregator.adapter';
import { Provider1ProductType } from '../../types/provider-1-product.type';
import { SyncedProduct } from '../../types/synced-product.type';
import axios, { AxiosInstance } from 'axios';
import { PROVIDER_1_NAME } from '../../constants/provider';

export class Provider1Adapter extends ProductAggregatorAdapter<Provider1ProductType> {
  private readonly axios: AxiosInstance;

  constructor() {
    super(PROVIDER_1_NAME);
    this.axios = axios.create({ baseURL: 'http://localhost:3000/provider1' });
  }

  async syncList(): Promise<SyncedProduct[]> {
    const { data } = await this.axios.get<Provider1ProductType[]>('');
    return data?.map((item) => this.mapItem(item)) ?? [];
  }

  mapItem(item: Provider1ProductType): SyncedProduct {
    return {
      id: item.item_uuid,
      name: item.item_name,
      description: item.item_description,
      price: item.item_price,
      currency: item.item_currency,
      availability: item.item_availability,
      lastUpdated: item.item_lastUpdated,
    };
  }
}
