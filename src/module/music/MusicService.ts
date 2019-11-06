import { Injectable } from '@nestjs/common';
import { MusicData, SliderListData } from './type';
import { decompression } from '../../util';
import axios from 'axios';

@Injectable()
export class MusicService {
  private commonParams = {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp',
  };

  async getDiscList(): Promise<MusicData> {
    const result = await axios.get(
      'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
      {
        headers: {
          referer: 'https://c.y.qq.com',
          host: 'c.y.qq.com',
        },
        params: {
          platform: 'yqq',
          outCharset: 'utf-8',
          hostUin: 0,
          sin: 0,
          ein: 50,
          sortId: 5,
          needNewCode: 0,
          categoryId: 10000000,
          rnd: Math.random(),
          format: 'json',
        },
      },
    );
    return decompression<MusicData>(result);
  }

  async getDisc(disstid): Promise<any> {
    const result = await axios.get(
      'http://ustbhuangyi.com/music/api/getCdInfo',
      {
        headers: {
          referer: 'http://ustbhuangyi.com/music/',
          host: 'ustbhuangyi.com',
        },
        params: {
          g_tk: 1928093487,
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          format: 'jsonp',
          disstid,
          type: 1,
          json: 1,
          utf8: 1,
          onlysong: 0,
          platform: 'yqq',
          hostUin: 0,
          needNewCode: 0,
        },
      },
    );
    return decompression<any>({
      data: {
        ...result.data,
      },
      code: 0,
    });
  }

  async getSliderList(): Promise<SliderListData> {
    const result = await axios.get(
      'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
      {
        headers: {
          referer: 'https://c.y.qq.com',
          host: 'c.y.qq.com',
        },
        params: {
          platform: 'h5',
          uin: 0,
          needNewCode: 1,
          ...this.commonParams,
        },
      },
    );
    return decompression<SliderListData>(result);
  }
}
