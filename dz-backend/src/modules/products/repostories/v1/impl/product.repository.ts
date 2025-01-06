import { ProductRepositoryV1 } from '../product.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';
import * as moment from 'moment';

@Injectable()
export class ProductRepositoryV1Impl extends ProductRepositoryV1 {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  findAll(): Promise<any> {
    return this.prisma.product.findMany();
  }

  async markStaleProducts(): Promise<void> {
    const oneDayAgo = moment().subtract(1, 'days').toDate();
    await this.prisma.product.updateMany({
      data: {
        isStale: true,
      },
      where: {
        updatedAt: {
          lt: oneDayAgo,
        },
      },
    });
  }
}
