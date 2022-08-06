import { Injectable } from '@nestjs/common';
import { MovieService } from './client/movie.service';
import { CreateMovieDto } from './entities/dtos/create-movie.dto';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieServiceImpl implements MovieService {
  constructor(private readonly movieRepository: MovieRepository) {}

  create(dto: CreateMovieDto): Promise<void> {
    return Promise.resolve(undefined);
  }
}
