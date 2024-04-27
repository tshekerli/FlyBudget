import knex from 'knex';
import 'dotenv/config';


const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_URL,
        port: '5432',
        user: 'postgres',
        password: process.env.DB_PASS,
        database: 'postgres'
    }
});

export default db;

