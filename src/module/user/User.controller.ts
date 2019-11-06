import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { UserService } from './User.service';

import { UserDto } from './dto';
import {UserRep} from './dto/UserRepDto';

@Controller('/app')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/register')
  async register(@Body() createUserDto: UserDto): Promise<UserRep> {
    return this.userService.register(createUserDto);
  }
}
