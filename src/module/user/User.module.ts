import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { UserService } from './User.service';
import { UserDao } from './User.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserDao],
  exports: [UserService],
})
export class UserModule {}
