import { Module } from '@nestjs/common';
import { ProductsControllerV1 } from './controllers/v1/products.controller';
import { ProductServiceV1 } from './services/v1/product.service';
import { ProductServiceV1Impl } from './services/v1/impl/product.service';
import { PrismaService } from '../../prisma/prisma.service';
import { ProductRepositoryV1 } from './repostories/v1/product.repository';
import { ProductRepositoryV1Impl } from './repostories/v1/impl/product.repository';
import { ProductDbSyncerHelperV1Impl } from './services/v1/helpers/impl/product-db-syncer.helper';
import { ProductDbSyncerHelperV1 } from './services/v1/helpers/product-db-syncer.helper';
import { ProviderProductRepositoryV1Impl } from './repostories/v1/impl/provider-product.repository';
import { ProviderRepositoryV1Impl } from './repostories/v1/impl/provider.repository';
import { ProviderRepositoryV1 } from './repostories/v1/provider.repository';
import { ProviderProductRepositoryV1 } from './repostories/v1/provider-product.repository';

@Module({
  imports: [],
  providers: [
    PrismaService,
    { provide: ProductServiceV1, useClass: ProductServiceV1Impl },
    { provide: ProductDbSyncerHelperV1, useClass: ProductDbSyncerHelperV1Impl },
    { provide: ProductRepositoryV1, useClass: ProductRepositoryV1Impl },
    { provide: ProviderRepositoryV1, useClass: ProviderRepositoryV1Impl },
    { provide: ProviderProductRepositoryV1, useClass: ProviderProductRepositoryV1Impl },
  ],
  controllers: [ProductsControllerV1],
  exports: [{ provide: ProductServiceV1, useClass: ProductServiceV1Impl }],
})
export class ProductsModule {}
