import { SyncedProduct } from '../../../../products-sync/types/synced-product.type';
import { Logger } from '@nestjs/common';

// On V2 maybe we can use SQS and send requests to make this async service
export abstract class ProductDbSyncerHelperV1 {
  protected logger = new Logger(ProductDbSyncerHelperV1.name);

  abstract syncProducts(results: SyncedProduct[]): Promise<void>;
}
