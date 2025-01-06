import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduledTasksModule } from './modules/scheduled-tasks/scheduled-tasks.module';

@Module({
  imports: [ScheduledTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
