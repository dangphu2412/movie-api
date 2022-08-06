import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { MovieService, MovieServiceToken } from './client/movie.service';
import { CreateMovieDto } from './entities/dtos/create-movie.dto';
import { Identified } from '../authentication/decorators/identified.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('movies')
@ApiTags('movies')
export class MovieController {
  constructor(
    @Inject(MovieServiceToken)
    private readonly movieService: MovieService,
  ) {}

  @Get()
  findMovie() {
    return this.movieService.find();
  }

  @Identified
  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }
}
