import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: '12345',
        database: 'FlyBudget'
    }
});

export default db;