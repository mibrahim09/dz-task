import { ProductRepositoryV1 } from '../product.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';
import * as moment from 'moment';
import { ProductFilterQuery } from '../../../dto/queries/product-filter.query';

@Injectable()
export class ProductRepositoryV1Impl extends ProductRepositoryV1 {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  findAll(query: ProductFilterQuery): Promise<any> {
    const skip = query.page * query.count;
    const where: any = {};

    if (query.priceFrom !== undefined) {
      where.price = { ...where.price, gte: query.priceFrom };
    }
    if (query.priceTo !== undefined) {
      where.price = { ...where.price, lte: query.priceTo };
    }
    if (query.availability) {
      where.availability = query.availability;
    }

    if (query.name) {
      where.name = {
        contains: query.name,
        mode: 'insensitive',
      };
    }

    return this.prisma.product.findMany({
      skip,
      take: Number(query.count),
      where,
      orderBy: {
        id: 'desc',
      },
    });
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

  findProductById(id: number): Promise<any> {
    return this.prisma.product.findFirst({ where: { id } });
  }
}
