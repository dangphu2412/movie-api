import { Injectable } from '@nestjs/common';
import { ActorService } from './client/actor.service';
import { Actor } from './entities/actor.entity';
import { ActorRepository } from './actor.repository';
import { ILike } from 'typeorm';

@Injectable()
export class ActorServiceImpl implements ActorService {
  constructor(private readonly actorRepository: ActorRepository) {}

  findByIds(ids: string[]): Promise<Actor[]> {
    return this.actorRepository.findByIds(ids);
  }

  search(value: string): Promise<Actor[]> {
    return this.actorRepository.find({
      where: [
        {
          name: ILike(`%${value}%`),
        },
      ],
    });
  }
}
