import { In, MigrationInterface, QueryRunner } from 'typeorm';
import { Actor } from '../../actor/entities/actor.entity';

export class InitActorsForTesting1659800839637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const actorRepository = queryRunner.manager.getRepository(Actor);
    await actorRepository.insert([
      {
        name: 'Amber Heard',
      },
      {
        name: 'Johny Deep',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const actorRepository = queryRunner.manager.getRepository(Actor);
    await actorRepository.delete({
      name: In(['Amber Heard', 'Johny Deep']),
    });
  }
}
