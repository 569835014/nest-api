import { Module } from '@nestjs/common';
import { MusicController } from './MusicController';
import { MusicService } from './MusicService';

@Module({
  controllers: [MusicController],
  providers: [MusicService],
})
export class MusicModule {}
