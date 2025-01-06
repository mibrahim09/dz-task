import { Injectable } from '@nestjs/common';
import { SchedulerService } from '../scheduler.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { ProductsSyncService } from '../../../products-sync/services/products-sync.service';

@Injectable()
export class SchedulerServiceImpl extends SchedulerService {
  constructor(
    private readonly scheduler: SchedulerRegistry,
    private readonly productSyncService: ProductsSyncService,
  ) {
    super(scheduler);
    this.registerTasks();
  }

  async registerTasks() {
    this.addCronJob(this.syncProducts.name, '* * * * * *', this.syncProducts.bind(this));
  }

  private async syncProducts() {
    await this.productSyncService.syncProducts();
  }
}
