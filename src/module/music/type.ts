import { AxiosData } from '../../../types';

export interface Music {
  imgurl: string;
  creator: MusicCreator;
  dissid: string;
}

export interface Slider {
  linkUrl: string;
  id: number;
  picUrl: string;
}

export interface SliderList {
  slider: Slider[];
}

export interface MusicCreator {
  type?: number;
  qq?: number;
  encrypt_uin?: string;
  name: string;
  isVip: number;
  avatarUrl?: number;
}

export interface MusicList {
  uin?: number;
  categoryId?: number;
  sortId?: number;
  sum?: number;
  sin: number;
  ein: number;
  list: Music[];
}

export interface MusicData extends AxiosData<MusicList> {}
export interface SliderListData extends AxiosData<SliderList> {}
