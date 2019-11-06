import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {IProgram} from '../../../types';

@Entity('app')
export class Program implements IProgram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
    length: 20,
    name: 'name',
    comment: '应用名称',
  })
  name: string;

  @Column({
    nullable: true,
    comment: '描述',
  })
  description: string;

  @Column({
    name: 'c_name',
  })
  CName: string;

  @Column({
    nullable: true,
    comment: '用户组',
  })
  userGroup: string;

  @Column({
    nullable: false,
    length: 20,
    name: 'code',
    comment: '应用编码',
  })
  code: string;

  @Column('tinyint', {
    nullable: false,
    default: 0,
    comment: '是否可用',
    name: 'is_active',
  })
  isActive: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_at',
    comment: '创建时间',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_at',
    comment: '最后更新时间',
  })
  updateAt: Date;
}
