import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {IResource, ResourceType} from '../../../types';

@Entity('resource')
export class Resource implements IResource {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'program_id',
    comment: '所属应用',
  })
  programId: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'code',
    comment: '资源编码',
  })
  code: string;

  // 资源权重越小越往前
  @Column({
    type: 'int',
    default: 10,
    name: 'level',
    comment: '资源权重',
  })
  level: number;

  @Column('int', {
    default: () => 0,
    name: 'type',
    comment: '资源类型',
  })
  type: ResourceType;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'name',
    comment: '资源名称',
  })
  name: string;

  @Column('tinyint', {
    nullable: false,
    default: 1,
    name: 'is_active',
    comment: '是否可用',
  })
  isActive: number;

  @Column('int', {
    nullable: false,
    default: 0,
    name: 'parent_id',
    comment: '父资源id',
  })
  parentId: number;

  @CreateDateColumn({
    name: 'create_at',
    comment: '创建时间',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    comment: '最后更新时间',
  })
  updateAt: Date;
}
