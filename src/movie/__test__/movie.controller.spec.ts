import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from '../movie.controller';
import { MovieService, MovieServiceToken } from '../client/movie.service';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDto } from '../entities/dtos/create-movie.dto';

describe('MovieController', () => {
  let controller: MovieController;
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        {
          provide: MovieServiceToken,
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MovieController>(MovieController);
    service = module.get<MovieService>(MovieServiceToken);
  });

  it('can find all movies', async () => {
    const result: Movie[] = [
      {
        title: 'title',
        actors: [],
        description: 'desc',
        id: '1',
      },
    ];
    jest.spyOn(service, 'find').mockResolvedValue(result);
    expect(await controller.findMovies()).toEqual(result);
  });

  it('can create a movie', async () => {
    const dto: CreateMovieDto = {
      title: 'test',
      description: 'desc',
      actorIds: [],
    };
    jest.spyOn(service, 'create').mockResolvedValue(undefined);
    await controller.createMovie(dto);
    expect(service.create).toBeCalledTimes(1);
    expect(service.create).toBeCalledWith(dto);
  });
});
