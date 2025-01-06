import { Injectable } from '@nestjs/common';
import { SchedulerService } from '../scheduler.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { ProductsSyncServiceV1 } from '../../../products-sync/services/v1/products-sync-service-v1.service';

@Injectable()
export class SchedulerServiceImpl extends SchedulerService {
  constructor(
    private readonly scheduler: SchedulerRegistry,
    private readonly productSyncService: ProductsSyncServiceV1,
  ) {
    super(scheduler);
    this.registerTasks().catch((e) => {
      console.error('error occured in register tasks=', e);
    });
  }

  async registerTasks() {
    this.addCronJob(this.syncProducts.name, '* * * * * *', this.syncProducts.bind(this));
  }

  private async syncProducts() {
    await this.productSyncService.syncProducts();
  }
}
