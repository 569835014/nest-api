import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jtzm1237',
      database: 'program',
      entities: [ path.join(__dirname, '..') + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
