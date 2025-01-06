import { CronJob } from 'cron';
import { SchedulerRegistry } from '@nestjs/schedule';
import { Logger } from '@nestjs/common';

export abstract class SchedulerService {
  protected readonly logger = new Logger(SchedulerService.name);

  protected constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

  protected addCronJob(name: string, cronDefinition: string, cronFn: () => Promise<void>) {
    const job = new CronJob(cronDefinition, cronFn);

    // @ts-ignore -- cron is imported from another version
    this.schedulerRegistry.addCronJob(name, async () => {
      try {
        await cronFn();
      } catch (e) {
        this.logger.error(`cronFn=${name} has failed to run`);
        this.logger.error(e);
      }
    });
    job.start();

    this.logger.debug(`Created task name=${name}, at def=${cronDefinition}`);
  }
}
