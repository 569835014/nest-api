import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import {  IUser } from '../../../types';
import { Exclude, Expose } from 'class-transformer';
import NodeAuth from 'node-auth0';
import * as jwt from 'jsonwebtoken';
import {UserRep} from './dto/UserRepDto';
@Entity('user')
export class User implements IUser {
  constructor() {
    this.nodeAuth = new NodeAuth(8, 10, true);
  }
  private nodeAuth: NodeAuth;
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 150,
    name: 'uuid',
    generated: 'uuid',
    comment: 'uuid',
  })
  uuid: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 26,
    name: 'account',
    comment: '用户名',
  })
  account: string;

  @Exclude() // 表示排除字段不返回给前端
  @Column('varchar', {
    nullable: false,
    name: 'password',
    comment: '密码',
  })
  password: string;

  @Column('tinyint', {
    nullable: true,
    default: () => 1,
    name: 'is_active',
    comment: '是否活跃',
  })
  isActive: number;

  @Column('varchar', {
    length: 100,
    name: 'email',
    comment: 'email',
  })
  email?: string;

  @Column('varchar', {
    nullable: true,
    length: 11,
    name: 'mobile',
    comment: '手机号码',
  })
  mobile: string;

  @Column('tinyint', {
    nullable: true,
    default: () => 0,
    comment: '性别',
    name: 'gender',
  })
  gender: number;

  @CreateDateColumn({
    type: 'datetime',
    comment: '创建时间',
    name: 'create_at',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    comment: '更新时间',
    name: 'update_at',
  })
  updateAt: Date;

  @Expose() // 表示根据现有的字段生成一个新的字段
  get gender1(): string {
    return this.gender ? '男' : '女';
  }

  /**
   * @Description: 插入数据前钩子函数进行加密
   * @param {type}
   * @return:
   */
  @BeforeInsert()
  async makePassword() {
    this.password = await this.nodeAuth.makePassword(this.password);
  }
  /**
   * @Description: 检查密码
   */
  async checkPassword(password: string, sqlPassword: string) {
    return await this.nodeAuth.checkPassword(password, sqlPassword);
  }

  /**
   * @Description: 定义数据返回格式
   * @Date: 2019-07-30 16:10:06
   */
  toResponseObject(isShowToken: boolean = true): UserRep {
    const { password, token, nodeAuth, ...params } = this;
    if (isShowToken) {
      return {
        token,
        ...params,
      };
    }
    return {
      ...params,
    };
  }

  /**
   * @Description: 生成token签名
   */
  private get token() {
    const { id, uuid, account, mobile, email } = this;
    // 生成签名
    return jwt.sign(
      {
        id,
        uuid,
        account,
        mobile,
        email,
      },
      'nest', // 加盐
      {
        expiresIn: '7d', // 过期时间
      },
    );
  }
}
