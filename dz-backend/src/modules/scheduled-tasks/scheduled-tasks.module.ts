import { Module } from '@nestjs/common';
import { SchedulerService } from './services/scheduler.service';
import { SchedulerServiceImpl } from './services/impl/scheduler.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductsSyncModule } from '../products-sync/products-sync.module';

@Module({
  imports: [ScheduleModule.forRoot(), ProductsSyncModule],
  providers: [{ provide: SchedulerService, useClass: SchedulerServiceImpl }],
})
export class ScheduledTasksModule {}
