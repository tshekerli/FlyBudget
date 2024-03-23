import knex from "./config.js";
import db from "../frontend/src/db/db.json" assert { type: 'json' };

const init = async () => {
    const hasTable = await knex.schema.hasTable('Locations');
    if (!hasTable) {
        await knex.schema.createTable('Locations', table => {
            table.increments('id').primary();
            table.string('locationName');
            table.string('code');
        });


        const data = Object.entries(db).map(([locationName, code]) => ({ locationName, code }));

        await knex('Locations').insert(data);
    }
}

init().catch(console.error);