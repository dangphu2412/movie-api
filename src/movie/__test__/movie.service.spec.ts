import { Test, TestingModule } from '@nestjs/testing';
import { MovieService, MovieServiceToken } from '../client/movie.service';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDto } from '../entities/dtos/create-movie.dto';
import { MovieRepository } from '../movie.repository';
import { MovieServiceImpl } from '../movie.service';
import {
  ActorService,
  ActorServiceToken,
} from '../../actor/client/actor.service';
import { Actor } from '../../actor/entities/actor.entity';
import {
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

describe('MovieService', () => {
  let movieService: MovieService;
  let actorService: ActorService;
  let repository: MovieRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: MovieServiceToken,
          useClass: MovieServiceImpl,
        },
        {
          provide: ActorServiceToken,
          useValue: {
            findByIds: jest.fn(),
          },
        },
        {
          provide: MovieRepository,
          useValue: {
            findByIds: jest.fn(),
            find: jest.fn(),
            save: jest.fn(),
            isTitleExisted: jest.fn(),
          },
        },
      ],
    }).compile();

    movieService = module.get<MovieService>(MovieServiceToken);
    actorService = module.get(ActorServiceToken);
    repository = module.get(MovieRepository);
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
    jest.spyOn(repository, 'find').mockResolvedValue(result);
    expect(await movieService.find()).toEqual(result);
  });

  it('can create a movie success', async () => {
    const dto: CreateMovieDto = {
      title: 'test',
      description: 'desc',
      actorIds: ['1'],
    };
    const mockActors: Actor[] = [
      {
        name: 'mock',
        id: '1',
        movies: [],
      },
    ];
    const mockSavedResult = {
      title: 'test',
      description: 'desc',
      actors: mockActors,
    };
    jest.spyOn(actorService, 'findByIds').mockResolvedValue(mockActors);
    jest.spyOn(repository, 'isTitleExisted').mockResolvedValue(false);

    await movieService.create(dto);

    expect(actorService.findByIds).toBeCalledTimes(1);
    expect(actorService.findByIds).toBeCalledWith(['1']);

    expect(repository.isTitleExisted).toBeCalledTimes(1);
    expect(repository.isTitleExisted).toBeCalledWith('test');

    expect(repository.save).toBeCalledTimes(1);
    expect(repository.save).toBeCalledWith(mockSavedResult);
  });

  it('cannot create a movie because of no author found', async () => {
    const dto: CreateMovieDto = {
      title: 'test',
      description: 'desc',
      actorIds: ['1'],
    };

    jest.spyOn(actorService, 'findByIds').mockResolvedValue([]);

    await expect(movieService.create(dto)).rejects.toEqual(
      new NotFoundException({
        errorCode: 'ACTOR__NO_ACTOR_FOUND',
        message: 'No actor(s) found',
      }),
    );

    jest.spyOn(actorService, 'findByIds').mockResolvedValue(undefined);

    await expect(movieService.create(dto)).rejects.toEqual(
      new NotFoundException({
        errorCode: 'ACTOR__NO_ACTOR_FOUND',
        message: 'No actor(s) found',
      }),
    );

    jest.spyOn(actorService, 'findByIds').mockResolvedValue(null);

    await expect(movieService.create(dto)).rejects.toEqual(
      new NotFoundException({
        errorCode: 'ACTOR__NO_ACTOR_FOUND',
        message: 'No actor(s) found',
      }),
    );
  });

  it('cannot create a movie because of title conflicted', async () => {
    const dto: CreateMovieDto = {
      title: 'test',
      description: 'desc',
      actorIds: ['1'],
    };
    const mockActors: Actor[] = [
      {
        name: 'mock',
        id: '1',
        movies: [],
      },
    ];
    jest.spyOn(actorService, 'findByIds').mockResolvedValue(mockActors);
    jest.spyOn(repository, 'isTitleExisted').mockResolvedValue(true);

    await expect(movieService.create(dto)).rejects.toEqual(
      new UnprocessableEntityException({
        errorCode: 'MOVIE__DUPLICATED_TITLE',
        message: 'This title has been existed',
      }),
    );
  });
});
