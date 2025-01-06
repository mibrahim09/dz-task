import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export abstract class ProductsSyncService {
  protected readonly logger = new Logger(ProductsSyncService.name);

  abstract syncProducts(): Promise<void>;
}
