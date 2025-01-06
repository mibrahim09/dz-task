import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduledTasksModule } from './modules/scheduled-tasks/scheduled-tasks.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [ScheduledTasksModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
