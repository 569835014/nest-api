import { Controller, Get, Param, Query } from '@nestjs/common';
import { MusicService } from './MusicService';
import axios from 'axios';

import { MusicData, SliderListData } from './type';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('/getDiscList')
  async getDiscList(): Promise<MusicData> {
    return this.musicService.getDiscList();
  }
  @Get('/slider')
  async getSliderList(): Promise<SliderListData> {
    return this.musicService.getSliderList();
  }
  @Get('/getDisc')
  async getDisc(@Query('id') id): Promise<any> {
    return this.musicService.getDisc(id);
  }
}
