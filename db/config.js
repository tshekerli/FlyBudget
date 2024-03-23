// create knex config object of postgresql database

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: '12345',
        database: 'FlyBudget'
    }
});

module.exports = knex;