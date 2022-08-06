import { Test, TestingModule } from '@nestjs/testing';
import { ActorController } from '../actor.controller';
import { ActorService, ActorServiceToken } from '../client/actor.service';

describe('CastController', () => {
  let controller: ActorController;
  let service: ActorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActorController],
      providers: [
        {
          provide: ActorServiceToken,
          useValue: {
            search: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ActorController>(ActorController);
    service = module.get(ActorServiceToken);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
