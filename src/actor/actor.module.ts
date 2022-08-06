import { Module } from '@nestjs/common';
import { ActorController } from './actor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorRepository } from './actor.repository';
import { ActorServiceToken } from './client/actor.service';
import { ActorServiceImpl } from './actor.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActorRepository])],
  controllers: [ActorController],
  providers: [
    {
      provide: ActorServiceToken,
      useClass: ActorServiceImpl,
    },
  ],
  exports: [ActorServiceToken],
})
export class ActorModule {}
