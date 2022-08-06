import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MovieService } from './client/movie.service';
import { CreateMovieDto } from './entities/dtos/create-movie.dto';
import { MovieRepository } from './movie.repository';
import { ActorService, ActorServiceToken } from '../actor/client/actor.service';
import {
  ActorExceptionClient,
  MovieExceptionClient,
} from '../exception/exception-client-code.constant';
import { Movie } from './entities/movie.entity';
import { isEmpty } from 'class-validator';

@Injectable()
export class MovieServiceImpl implements MovieService {
  constructor(
    private readonly movieRepository: MovieRepository,
    @Inject(ActorServiceToken)
    private readonly actorService: ActorService,
  ) {}

  find(): Promise<Movie[]> {
    return this.movieRepository.find({
      relations: ['actors'],
    });
  }

  async create(dto: CreateMovieDto): Promise<void> {
    const actors = await this.actorService.findByIds(dto.actorIds);

    if (isEmpty(actors)) {
      throw new NotFoundException(ActorExceptionClient.NO_ACTOR_FOUND);
    }

    const isExisted = !!(await this.movieRepository.findOne({
      where: {
        title: dto.title,
      },
    }));

    if (isExisted) {
      throw new NotFoundException(MovieExceptionClient.NO_MOVIE_FOUND);
    }

    const newMovie = new Movie();
    newMovie.title = dto.title;
    newMovie.description = dto.description;
    newMovie.actors = actors;

    await this.movieRepository.save(newMovie);
  }
}
