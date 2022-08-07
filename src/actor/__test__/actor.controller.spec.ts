import { Test, TestingModule } from '@nestjs/testing';
import { ActorController } from '../actor.controller';
import { ActorService, ActorServiceToken } from '../client/actor.service';
import { Actor } from '../entities/actor.entity';

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

  it('can search author by search query', async () => {
    const result: Actor[] = [
      {
        name: 'test',
        movies: [],
        id: '1',
      },
    ];
    jest.spyOn(service, 'search').mockResolvedValue(result);
    expect(await controller.search('test')).toEqual(result);
  });
});
