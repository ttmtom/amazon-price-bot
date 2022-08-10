import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { WatchListService } from 'src/watchList/watchList.service';
import { TelegramBotService } from './telegramBot.service';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        token: configService.get('TELEGRAM_BOT_TOKEN'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [TelegramBotService, WatchListService],
  exports: [TelegramBotService],
})
export class TelegramBotModule {}
