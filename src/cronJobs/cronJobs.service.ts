import { Injectable } from '@nestjs/common';
import { TelegramBotService } from 'src/telegramBot/telegramBot.service';
import list from 'src/config';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronJobsService {
  constructor(private readonly telegramBotService: TelegramBotService) {}

  private async checkAmazonJp() {
    const allList = list.amazonJp;
    allList.forEach((link) => {
      axios.get(link).then((res) => {
        const dom = new JSDOM(res.data);
        const buyboxs = dom.window.document.getElementsByClassName(
          'tabular-buybox-text',
        );
        if (buyboxs.length) {
          for (let i = 0; i < buyboxs.length; i += 1) {
            const ele = buyboxs.item(i);
            const soldByEle = ele.getElementsByTagName('a');

            if (soldByEle.length) {
              const soldBy = soldByEle.item(0);
              if (soldBy.textContent.includes('Amazon')) {
                const title =
                  dom.window.document.getElementById('productTitle');
                this.telegramBotService.sendMsg(
                  `${title.textContent}: ${link}`,
                );
                break;
              }
            }
          }
        }
      });
    });
  }

  @Cron(CronExpression.EVERY_MINUTE)
  watchAllGoods() {
    this.checkAmazonJp();
  }
}
