import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module/database/Database.module';
import { ProgramModule } from './module/program/Program.module';
import { UserModule } from './module/user/User.module';
import { MusicModule} from './module/music/MusicModule';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    DatabaseModule,
    ProgramModule,
    UserModule,
    MusicModule,
  ],
})
export class AppModule {}
