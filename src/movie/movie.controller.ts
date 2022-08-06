import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MovieService, MovieServiceToken } from './client/movie.service';
import { CreateMovieDto } from './entities/dtos/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(
    @Inject(MovieServiceToken)
    private readonly movieService: MovieService,
  ) {}

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }
}
