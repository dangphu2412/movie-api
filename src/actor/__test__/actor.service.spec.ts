import { Test, TestingModule } from '@nestjs/testing';
import { ActorService, ActorServiceToken } from '../client/actor.service';
import { ActorRepository } from '../actor.repository';
import { ActorServiceImpl } from '../actor.service';
import { Actor } from '../entities/actor.entity';

describe('ActorService', () => {
  let service: ActorService;
  let repository: ActorRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ActorServiceToken,
          useClass: ActorServiceImpl,
        },
        {
          provide: ActorRepository,
          useValue: {
            findByIds: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(ActorServiceToken);
    repository = module.get(ActorRepository);
  });

  it('can find by ids', async () => {
    const result: Actor[] = [
      {
        name: 'test',
        movies: [],
        id: '1',
      },
    ];
    jest.spyOn(repository, 'findByIds').mockResolvedValue(result);
    expect(await service.findByIds(['id'])).toEqual(result);
  });

  it('can search by name', async () => {
    const result: Actor[] = [
      {
        name: 'test',
        movies: [],
        id: '1',
      },
    ];
    jest.spyOn(repository, 'find').mockResolvedValue(result);
    expect(await service.search('test')).toEqual(result);
  });
});
