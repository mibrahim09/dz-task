import { Module } from '@nestjs/common';
import { ProductsSyncService } from './services/products-sync.service';
import { ProductsSyncServiceImpl } from './services/impl/products-sync.service';
import { PROVIDER_1_KEY, PROVIDER_2_KEY, PROVIDER_3_KEY } from './constants/provider';
import { Provider1Adapter } from './adapters/impl/provider-1.adapter';
import { Provider2Adapter } from './adapters/impl/provider-2.adapter';
import { Provider3Adapter } from './adapters/impl/provider-3.adapter';

@Module({
  imports: [],
  providers: [
    { provide: ProductsSyncService, useClass: ProductsSyncServiceImpl },
    {
      provide: PROVIDER_1_KEY,
      useClass: Provider1Adapter,
    },
    {
      provide: PROVIDER_2_KEY,
      useClass: Provider2Adapter,
    },
    {
      provide: PROVIDER_3_KEY,
      useClass: Provider3Adapter,
    },
  ],
  exports: [{ provide: ProductsSyncService, useClass: ProductsSyncServiceImpl }],
})
export class ProductsSyncModule {}
