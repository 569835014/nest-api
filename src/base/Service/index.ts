import { Injectable } from '@nestjs/common';
import { ID, IEntityPage, IPaging } from '../../../types';
import { Repository } from 'typeorm';
import BaseDao from '../BaseDao';

/**
 * D dao层实例
 * T 前端传来的dto
 * E 后端数据库实体
 */
export default class Service<D extends BaseDao<Repository<E>, T, E>, T, E> {
  protected readonly repository;
  constructor(serviceDao: D) {
    this.dao = serviceDao;
    this.repository = serviceDao.dao;
  }
  public dao: D;
  async save(dto: T): Promise<E> {
    return this.dao.save(dto);
  }
  async findAll(): Promise<E[]> {
    return this.dao.findAll();
  }
  async findById(id: ID): Promise<E> {
    return this.dao.findById(id);
  }
  async fineOne(where): Promise<E> {
    return this.dao.findById(where);
  }
  async updateById(id: ID, dto: T): Promise<boolean> {
    return this.dao.updateById(id, dto);
  }
  async findPage(page: IPaging): Promise<IEntityPage<E>> {
    return this.dao.findPage(page);
  }
}
