import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1653792980606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'id', type: 'varchar', isPrimary: true },
                    { name: 'name', type: 'varchar' },
                    { name: 'email', type: 'varchar', isUnique: true },
                    { name: 'senha', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
