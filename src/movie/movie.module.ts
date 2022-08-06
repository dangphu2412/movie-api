import { Module } from '@nestjs/common';
import { MovieServiceImpl } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieRepository } from './movie.repository';
import { MovieServiceToken } from './client/movie.service';
import { ActorModule } from '../actor/actor.module';

@Module({
  imports: [ActorModule, TypeOrmModule.forFeature([MovieRepository])],
  controllers: [MovieController],
  providers: [
    {
      provide: MovieServiceToken,
      useClass: MovieServiceImpl,
    },
  ],
})
export class MovieModule {}
