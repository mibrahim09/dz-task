import { ProductRepositoryV1 } from '../product.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class ProductRepositoryV1Impl extends ProductRepositoryV1 {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  findAll(): Promise<any> {
    return this.prisma.product.findMany();
  }
}
