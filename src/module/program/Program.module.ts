import { Module } from '@nestjs/common';
import { ProgramController } from './Program.controller';
import { ProgramService } from './Program.service';
import { ProgramDao } from './Program.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from './Program.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  controllers: [ProgramController],
  providers: [ProgramService, ProgramDao],
  exports: [ProgramService],
})
export class ProgramModule {}
