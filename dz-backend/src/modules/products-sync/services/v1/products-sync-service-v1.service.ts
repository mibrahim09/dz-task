import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export abstract class ProductsSyncServiceV1 {
  protected readonly logger = new Logger(ProductsSyncServiceV1.name);

  abstract syncProducts(): Promise<void>;
}
