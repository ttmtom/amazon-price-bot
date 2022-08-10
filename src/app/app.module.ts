import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { connectionName } from 'src/database/connection';
// import entities from 'src/database/entities';
import { TelegramBotModule } from 'src/telegramBot/telegramBot.module';
import { TelegramBotService } from 'src/telegramBot/telegramBot.service';
import { WatchListModule } from 'src/watchList/watchList.module';
import { CronJobsModule } from 'src/cronJobs/cronJobs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot({
    //   name: connectionName,
    //   type: 'postgres',
    //   host: 'postgres',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'password',
    //   database: 'workspace',
    //   entities,
    //   synchronize: true,
    // }),
    TelegramBotModule,
    WatchListModule,
    CronJobsModule,
  ],
  controllers: [AppController],
  providers: [AppService, TelegramBotService],
})
export class AppModule {}
