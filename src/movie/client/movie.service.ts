import { CreateMovieDto } from '../entities/dtos/create-movie.dto';
import { Movie } from '../entities/movie.entity';

export const MovieServiceToken = 'MovieServiceToken';

export interface MovieService {
  find(): Promise<Movie[]>;
  create(dto: CreateMovieDto): Promise<void>;
}
