import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ResourceService } from './Resource.service';

import { ResourceDto } from './dto';
import { IEntityPage, IPaging } from '../../../types';
import { Resource } from './Resource.entity';

@Controller('/app')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}
  @Post('/app_resource')
  queryResourcesByAppId(@Body() id: number): Promise<Resource[]> {
    return this.resourceService.queryResourcesByAppId(id);
  }
}
