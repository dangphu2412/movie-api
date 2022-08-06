import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Actor } from '../../actor/entities/actor.entity';

@Entity({
  name: 'movies',
})
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    nullable: false,
    unique: true,
  })
  title: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
  })
  description: string;

  @ManyToMany(() => Actor)
  @JoinTable()
  actors: Actor[];
}
