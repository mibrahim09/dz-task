import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { ProviderProductRepositoryV1 } from '../provider-product.repository';
import { ProviderProductEntity } from 'src/modules/products/types/provider-product.entity';
import { CreateProductCommand } from 'src/modules/products/types/create-product.command';
import { SyncedProduct } from '../../../../products-sync/types/synced-product.type';

@Injectable()
export class ProviderProductRepositoryV1Impl extends ProviderProductRepositoryV1 {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  findByKey(key: string): Promise<ProviderProductEntity> {
    return this.prisma.provider_product.findFirst({
      where: {
        providerItemId: key,
      },
      include: {
        product: true,
      },
    });
  }

  async createItem(item: CreateProductCommand): Promise<void> {
    await this.prisma.provider_product.create({
      include: { product: true },
      data: {
        providerItemId: item.providerItemId,
        provider: {
          connect: {
            id: item.providerId,
          },
        },
        providerLastUpdatedAt: item.lastUpdated,
        product: {
          create: {
            name: item.name,
            description: item.description,
            price: item.price,
            currency: item.currency,
            availability: item.availability,
          },
        },
      },
    });
  }

  async updateItem(id: number, item: SyncedProduct): Promise<void> {
    await this.prisma.provider_product.update({
      include: { product: true },
      data: {
        providerLastUpdatedAt: item.lastUpdated,
        product: {
          update: {
            name: item.name,
            description: item.description,
            price: item.price,
            currency: item.currency,
            availability: item.availability,
          },
        },
      },
      where: { id },
    });
  }
}
