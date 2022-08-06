import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from '../../movie/entities/movie.entity';

@Entity({
  name: 'actors',
})
export class Actor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    nullable: false,
  })
  name: string;

  @ManyToMany(() => Movie)
  movies: string;
}
