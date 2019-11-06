import { IEntity } from '../../../../types';

export class UserRep implements IEntity {
  id: number;
  uuid: string;
  name?: string;
  email?: string;
  mobile: string;
  gender: number;
  isActive: number;
  createAt: Date;
  updateAt: Date;
  token?: string;
  nickName?: string;
}
