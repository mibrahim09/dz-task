import { Injectable } from '@nestjs/common';
import { ProviderEntity } from '../../types/provider.entity';

@Injectable()
export abstract class ProviderRepositoryV1 {
  abstract findAll(): Promise<ProviderEntity[]>;
}
