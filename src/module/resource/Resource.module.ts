import { Module } from '@nestjs/common';
import { ResourceController } from './Resource.controller';
import { ResourceService } from './Resource.service';
import { ResourceDao } from './Resource.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from './Resource.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Resource])],
  controllers: [ResourceController],
  providers: [ResourceService, ResourceDao],
  exports: [ResourceService],
})
export class ResourceModule {}
