import { EntityRepository, Repository } from 'typeorm';
import { Cast } from './entities/cast.entity';

@EntityRepository(Cast)
export class CastRepository extends Repository<Cast> {}
