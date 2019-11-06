import BaseDao from '../../base/BaseDao';
import { Injectable, Optional } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Program } from './Program.entity';
import { ProgramDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProgramDao extends BaseDao<
  Repository<Program>,
  ProgramDto,
  Program
  > {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
  ) {
    super(programRepository);
  }
}
