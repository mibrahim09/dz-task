import { Module } from '@nestjs/common';
import { PROVIDER_1_KEY, PROVIDER_2_KEY, PROVIDER_3_KEY } from './constants/provider';
import { ProductsSyncServiceV1Impl } from './services/v1/impl/products-sync.service';
import { ProductsSyncServiceV1 } from './services/v1/products-sync-service-v1.service';
import { Provider1AdapterV1 } from './adapters/v1/impl/provider1-adapter.v1';
import { Provider2AdapterV1 } from './adapters/v1/impl/provider2-adapter.v1';
import { Provider3AdapterV1 } from './adapters/v1/impl/provider3-adapter.v1';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [
    { provide: ProductsSyncServiceV1, useClass: ProductsSyncServiceV1Impl },
    {
      provide: PROVIDER_1_KEY,
      useClass: Provider1AdapterV1,
    },
    {
      provide: PROVIDER_2_KEY,
      useClass: Provider2AdapterV1,
    },
    {
      provide: PROVIDER_3_KEY,
      useClass: Provider3AdapterV1,
    },
  ],
  exports: [{ provide: ProductsSyncServiceV1, useClass: ProductsSyncServiceV1Impl }],
})
export class ProductsSyncModule {}
