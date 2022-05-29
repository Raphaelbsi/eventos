import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEvents1653793008753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'events',
                columns: [
                    { name: 'id', type: 'varchar', isPrimary: true },
                    { name: 'date', type: 'timestamp' },
                    { name: 'price', type: 'decimal' },
                    { name: 'local', type: 'varchar' },
                ],
                foreignKeys: [
                    {
                        name: 'fk_events_users',
                        columnNames: ['id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
    }

}
