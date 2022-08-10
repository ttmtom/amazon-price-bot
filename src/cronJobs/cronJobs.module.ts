import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TelegramBotModule } from 'src/telegramBot/telegramBot.module';
import { CronJobsService } from './cronJobs.service';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Goods], connectionName),
    ScheduleModule.forRoot(),
    TelegramBotModule,
  ],
  providers: [CronJobsService],
  exports: [CronJobsService],
})
export class CronJobsModule {}
