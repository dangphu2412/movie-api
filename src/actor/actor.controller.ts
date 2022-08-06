import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ActorService, ActorServiceToken } from './client/actor.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('actors')
@ApiTags('actors')
export class ActorController {
  constructor(
    @Inject(ActorServiceToken)
    private readonly actorService: ActorService,
  ) {}

  @Get()
  search(@Query('search') value: string) {
    return this.actorService.search(value);
  }
}
