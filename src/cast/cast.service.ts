import { Injectable } from '@nestjs/common';
import { CastService } from './client/cast.service';
import { Cast } from './entities/cast.entity';

@Injectable()
export class CastServiceImpl implements CastService {
  findByIds(ids: string[]): Promise<Cast[]> {
    return Promise.resolve([]);
  }

  search(value: string): Promise<Cast[]> {
    return Promise.resolve([]);
  }
}
