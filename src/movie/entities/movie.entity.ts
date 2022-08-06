import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cast } from '../../cast/entities/cast.entity';

@Entity({
  name: 'movies',
})
export class Movie {
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

  @ManyToMany(() => Cast)
  @JoinTable()
  cast: Cast[];
}
