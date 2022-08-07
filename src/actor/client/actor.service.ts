import { Actor } from '../entities/actor.entity';

export const ActorServiceToken = 'ActorServiceToken';

export interface ActorService {
  search(value: string): Promise<Actor[]>;
  findByIds(ids: string[]): Promise<Actor[]>;
}
