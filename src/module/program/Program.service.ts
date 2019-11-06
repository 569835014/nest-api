import { Injectable, Logger, Module } from '@nestjs/common';
import Service from '../../base/Service';
import { Program } from './Program.entity';
import { ProgramDto } from './dto';
import { ProgramDao } from './Program.dao';
@Injectable()
export class ProgramService extends Service<ProgramDao, ProgramDto, Program> {
  constructor(private readonly programDao: ProgramDao) {
    super(programDao);
  }
}
