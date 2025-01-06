import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { ProviderRepositoryV1 } from '../provider.repository';
import { ProviderEntity } from 'src/modules/products/types/provider.entity';

@Injectable()
export class ProviderRepositoryV1Impl extends ProviderRepositoryV1 {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  findAll(): Promise<ProviderEntity[]> {
    return this.prisma.provider.findMany();
  }
}
