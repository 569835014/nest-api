import { Injectable, Logger, Module } from '@nestjs/common';
import Service from '../../base/Service';
import { Resource } from './Resource.entity';
import { ResourceDto } from './dto';
import { ResourceDao } from './Resource.dao';
@Injectable()
export class ResourceService extends Service<ResourceDao, ResourceDto, Resource> {
  constructor(private readonly resourceDao: ResourceDao) {
    super(resourceDao);
  }
  queryResourcesByAppId(id: number): Promise<Resource[]> {
    return this.resourceDao.queryResourcesByAppId(id);
  }
}
