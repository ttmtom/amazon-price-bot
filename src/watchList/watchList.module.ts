import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TelegramBotModule } from 'src/telegramBot/telegramBot.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Goods } from 'src/database/entities/goods.entity';
import { WatchListService } from './watchList.service';
// import { connectionName } from 'src/database/connection';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Goods], connectionName),
    ScheduleModule.forRoot(),
    TelegramBotModule,
  ],
  providers: [WatchListService],
  exports: [WatchListService],
})
export class WatchListModule {}
