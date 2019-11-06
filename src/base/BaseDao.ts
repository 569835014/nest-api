import { IDao, ID, IPaging, IEntityPage } from '../../types';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

export default class BaseDao<R extends Repository<E>, D, E>
  implements IDao<R, D, E> {
  public readonly dao: R;
  constructor(daoRepository: R) {
    this.dao = daoRepository;
  }
  async save(dto: D): Promise<E> {
    return this.dao.save(dto);
  }
  async findAll(): Promise<E[]> {
    return this.dao.find();
  }
  async findById(id: ID): Promise<E> {
    return this.dao.findOne({ where: { id } });
  }
  async findOne(where: any): Promise<E> {
    return this.dao.findOne(where);
  }
  async updateById(id: ID, dto: D): Promise<boolean> {
    try {
      await this.dao.update(id, dto);
    } catch (e) {
      Logger.warn(e);
      return false;
    }
    return true;
  }
  async findPage(page: IPaging): Promise<IEntityPage<E>> {
    const { pageSize, pageNumber } = page;
    const [entity, total] = await this.dao
      .createQueryBuilder()
      .offset(pageNumber - 1) // 从多少条开始
      .limit(pageSize) // 查询多少条数据
      .orderBy('id', 'DESC') // 排序
      .getManyAndCount(); // 查询到数据及个数，返回的是一个数组
    return {
      pageNumber,
      pageSize,
      value: entity,
      total,
    };
  }
}
