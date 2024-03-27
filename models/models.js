import knex from "../db/config.js";

const getLocations = async () => {
    return await knex('Locations').select();
}


const registerUser = async (email, password) => {
    return await knex('Users').insert({email, password});
}

const getUser = async (email) => {
    return await knex('Users').where({email}).first();
}



export default {getLocations, registerUser, getUser};



