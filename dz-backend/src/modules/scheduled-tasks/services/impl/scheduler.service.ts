import { Injectable } from '@nestjs/common';
import { SchedulerService } from '../scheduler.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { ProductsSyncServiceV1 } from '../../../products-sync/services/v1/products-sync-service-v1.service';
import { ProductServiceV1 } from '../../../products/services/v1/product.service';

@Injectable()
export class SchedulerServiceImpl extends SchedulerService {
  constructor(
    private readonly scheduler: SchedulerRegistry,
    private readonly productSyncService: ProductsSyncServiceV1,
    private readonly productService: ProductServiceV1,
  ) {
    super(scheduler);
    this.registerTasks().catch((e) => {
      console.error('error occured in register tasks=', e);
    });
  }

  async registerTasks() {
    this.addCronJob(
      this.syncProducts.name,
      process.env.SYNC_PRODUCTS_CRON ?? '* * * * * *',
      this.syncProducts.bind(this),
    );
    this.addCronJob(
      this.markStaleProducts.name,
      process.env.MARK_STALE_PRODUCTS_CRON ?? '* * * * * *',
      this.markStaleProducts.bind(this),
    );
  }

  private async syncProducts() {
    await this.productSyncService.syncProducts();
  }

  private async markStaleProducts() {
    await this.productService.markStaleProducts();
  }
}
