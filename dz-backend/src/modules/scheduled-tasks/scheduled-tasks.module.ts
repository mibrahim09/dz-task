import { Module } from '@nestjs/common';
import { SchedulerService } from './services/scheduler.service';
import { SchedulerServiceImpl } from './services/impl/scheduler.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductsSyncModule } from '../products-sync/products-sync.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ScheduleModule.forRoot(), ProductsSyncModule, ProductsModule],
  providers: [{ provide: SchedulerService, useClass: SchedulerServiceImpl }],
})
export class ScheduledTasksModule {}
