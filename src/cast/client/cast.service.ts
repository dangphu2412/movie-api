import { Cast } from '../entities/cast.entity';

export const CastServiceToken = 'CastServiceToken';

export interface CastService {
  search(value: string): Promise<Cast[]>;
  findByIds(ids: string[]): Promise<Cast[]>;
}
