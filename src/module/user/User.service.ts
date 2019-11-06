import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import Service from '../../base/Service';
import { User } from './User.entity';
import { UserDto } from './dto';
import { UserDao } from './User.dao';
import {UserRep} from './dto/UserRepDto';

@Injectable()
export class UserService extends Service<UserDao, UserDto, User> {
  constructor(private readonly userDao: UserDao) {
    super(userDao);
  }
  async register(createUserDto: UserDto): Promise<UserRep> {
    const { account } = createUserDto;
    let user: User = await this.userDao.findOne({ where: { account } });
    if (user) {
      throw new HttpException(
        { message: '用户名已经存在' },
        HttpStatus.BAD_REQUEST,
      );
    }
    user = await this.dao.create(createUserDto);
    await this.dao.save(user);
    return user.toResponseObject(false);
  }
}
