import { CreateMovieDto } from '../entities/dtos/create-movie.dto';

export const MovieServiceToken = 'MovieServiceToken';

export interface MovieService {
  create(dto: CreateMovieDto): Promise<void>;
}
