import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ProgramService } from './Program.service';

import { ProgramDto } from './dto';
import { IEntityPage, IPaging } from '../../../types';
import { Program } from './Program.entity';

@Controller('/app')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}
  @Post('/create')
  async createProgram(@Body() programDto: ProgramDto): Promise<Program> {
    return this.programService.save(programDto);
  }
  @Post('/app_list')
  async findAppList(@Body() page: IPaging): Promise<IEntityPage<Program>> {
    return this.programService.findPage(page);
  }
}
