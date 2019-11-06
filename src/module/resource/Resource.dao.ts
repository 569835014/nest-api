import BaseDao from '../../base/BaseDao';
import { Injectable, Optional } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Resource } from './Resource.entity';
import { ResourceDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResourceDao extends BaseDao<
  Repository<Resource>,
  ResourceDto,
  Resource
  > {
  constructor(
    @InjectRepository(Resource)
    private readonly programRepository: Repository<Resource>,
  ) {
    super(programRepository);
  }
  queryResourcesByAppId(id: number): Promise<Resource[]> {
    return this.dao.find({ programId: id });
  }
}
