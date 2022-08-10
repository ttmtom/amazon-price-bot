import { Injectable } from '@nestjs/common';
import { Command, Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { MyUserId } from 'src/const/env';
// import { WatchListService } from 'src/watchList/watchList.service';
import { Context, Telegram } from 'telegraf';

@Update()
@Injectable()
export class TelegramBotService {
  private readonly bot: Telegram = new Telegram(process.env.TELEGRAM_BOT_TOKEN);
  // constructor(private readonly watchListService: WatchListService) {}

  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: Context) {
    await ctx.reply('Hey there');
  }

  //   @Hears('/watch')
  //   async addWatch(ctx: Context) {
  //     console.log('---- ctx');
  //     await ctx.reply('Hey there');
  //   }

  //   {
  //     update_id: 938213253,
  // server-dev |   message: {
  // server-dev |     message_id: 65,
  // server-dev |     from: {
  // server-dev |       id: 5243168930,
  // server-dev |       is_bot: false,
  // server-dev |       first_name: 'Tm',
  // server-dev |       language_code: 'en'
  // server-dev |     },
  // server-dev |     chat: { id: 5243168930, first_name: 'Tm', type: 'private' },
  // server-dev |     date: 1660138641,
  // server-dev |     text: '/watch temp test',
  // server-dev |     entities: [ [Object] ]
  // server-dev |   }
  //   }

  @Command('watch')
  async addWatch(ctx: Context) {
    console.log('---- ctx');
    console.log(ctx.editedMessage);
    if (ctx.from.id !== MyUserId) {
      await ctx.reply('Not For You~~');
      return;
    }
    // const [command, platform, link] = ctx.match;
    await ctx.reply('Hey there');
  }

  async sendMsg(message: string) {
    this.bot.sendMessage(MyUserId, message);
  }
}
