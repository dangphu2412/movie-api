import { EntityRepository, Repository } from 'typeorm';
import { Actor } from './entities/actor.entity';

@EntityRepository(Actor)
export class ActorRepository extends Repository<Actor> {}
