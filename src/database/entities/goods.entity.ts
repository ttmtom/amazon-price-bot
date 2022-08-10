import SupportPlatform from 'src/const/supportPlatform';
import { Column, Entity } from 'typeorm';
import { BaseDbObj } from '../util/baseDbObj';

@Entity('goods')
export class Goods extends BaseDbObj {
  constructor(name: string, platform: SupportPlatform, link: string) {
    super();
    this.platform = platform;
    this.name = name;
    this.link = link;
  }

  @Column({
    type: 'enum',
    enum: SupportPlatform,
    default: SupportPlatform.AMAZON_JP,
  })
  platform: SupportPlatform;

  @Column({ unique: true })
  name: string;

  @Column()
  link: string;
}
