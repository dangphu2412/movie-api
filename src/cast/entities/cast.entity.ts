import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "../../movie/entities/movie.entity";

@Entity({
  name: 'casts',
})
export class Cast {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    nullable: false,
  })
  title: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
  })
  description: string;

  @ManyToMany(() => Movie)
  movies: string;
}
