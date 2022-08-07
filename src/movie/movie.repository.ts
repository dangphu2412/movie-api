import { EntityRepository, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async isTitleExisted(title: string): Promise<boolean> {
    return !!(await this.findOne({
      select: ['id'],
      where: {
        title,
      },
    }));
  }
}
