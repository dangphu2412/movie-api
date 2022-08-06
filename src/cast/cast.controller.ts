import { Controller, Inject } from '@nestjs/common';
import { CastService, CastServiceToken } from './client/cast.service';

@Controller('cast')
export class CastController {
  constructor(
    @Inject(CastServiceToken)
    private readonly castService: CastService,
  ) {}
}
