import { Injectable } from '@nestjs/common';
import { ProductUpdatesRepositoryV1 } from '../product-updates.repository';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class ProductUpdatesRepositoryV1Impl extends ProductUpdatesRepositoryV1 {
  constructor(private prisma: PrismaService) {
    super();
  }

  async createUpdateLog(productId: number, changeLog: object): Promise<void> {
    await this.prisma.product_changes.create({
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        changes: changeLog,
      },
    });
  }
}
