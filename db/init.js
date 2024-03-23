import knex from "./config";
import db from "../frontend/src/db/db.json"

// stringify db json and check if the database has a table called locations if not create locations table and insert key and value pairs from db.json. It has one key value pair. Key is location and value is the code for the location.

const init = async () => {
    const hasTable = await knex.schema.hasTable('Locations');
    if (!hasTable) {
        await knex.schema.createTable('Locations', table => {
            table.increments('id').primary();
            table.string('location');
            table.string('code');
        });
        await knex('locations').insert(db);
    }
}