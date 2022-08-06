import { Test, TestingModule } from '@nestjs/testing';
import { ActorService, ActorServiceToken } from '../client/actor.service';

describe('ActorService', () => {
  let service: ActorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ActorServiceToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get(ActorServiceToken);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
