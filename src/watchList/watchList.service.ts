import { Injectable } from '@nestjs/common';
// import { Cron, CronExpression } from '@nestjs/schedule';
import { TelegramBotService } from 'src/telegramBot/telegramBot.service';
// import { InjectRepository } from '@nestjs/typeorm';
// import SupportPlatform from 'src/const/supportPlatform';
// import { Goods } from 'src/database/entities/goods.entity';
// import { Repository } from 'typeorm';
// import list from 'src/config';
// import axios from 'axios';
// import { JSDOM } from 'jsdom';

@Injectable()
export class WatchListService {
  constructor(
    // @InjectRepository(Goods)
    // private readonly goodsRepository: Repository<Goods>,
    private readonly telegramBotService: TelegramBotService,
  ) {}

  // async addWatchList(name: string, platform: SupportPlatform, link: string) {
  //   const goods = new Goods(name, platform, link);
  //   this.goodsRepository.save(goods);
  // }
}
