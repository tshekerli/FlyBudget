import knex from "../db/config.js";

const getLocations = async () => {
    return await knex('Locations').select();
}

export default {getLocations};