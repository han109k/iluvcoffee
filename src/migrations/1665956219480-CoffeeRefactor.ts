import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1665956219480 implements MigrationInterface {
  name: 'CoffeeRefactor1665956219480';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "name"`,
    );
  }
}
