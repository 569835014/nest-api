import BaseDao from '../../base/BaseDao';
import { Injectable, Optional } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import { UserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserDao extends BaseDao<
  Repository<User>,
  UserDto,
  User
  > {
  constructor(
    @InjectRepository(User)
    private readonly programRepository: Repository<User>,
  ) {
    super(programRepository);
  }

  async create(createUserDto: UserDto): Promise<User> {
    return this.dao.create(createUserDto);
  }
}
