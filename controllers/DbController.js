import models from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getLocationsController = async (req, res) => {
    try {

        
        const locations = await models.getLocations();
        res.status(200).send(locations);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const registerUserController = async (req, res) => {
    try {
        const {email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await models.registerUser(email, hashedPassword);
        res.status(201).send("User created");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const checkPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await models.getUser(email);
        if (!user) {
            return res.status(401).send("Invalid credentials");
        }
        if (!await checkPassword(password, user.password)) {
            return res.status(401).send("Invalid credentials");
        }
        const token = jwt.sign({email}, process.env.SECRET_KEY, {expiresIn: "1h"});
        res.status(200).send({token});
    } catch (error) {
        res.status(500).send(error.message);
    }
}




// const checkToken = async (req, res, next) => {
//     const token = req.headers.authorization;
//     console.log('Token:', token);
//     if (!token) {
//         return res.status(401).send("Access denied");
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//         req.user = decoded;
//         next(); 
//     } catch (error) {
//         console.log('Error:', error.message);
//         res.status(400).send("Invalid token");
//     }
// }

const checkToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send("Access denied");
    }

    // Split the authHeader string into an array ['Bearer', 'token']
    const parts = authHeader.split(' ');

    // Check if the authHeader is in correct format
    if (!parts.length === 2) {
        return res.status(401).send("Access denied");
    }

    const [ scheme, token ] = parts;

    // Check if the authHeader contains the Bearer keyword
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send("Access denied");
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next(); 
    } catch (error) {
        console.log('Error:', error.message);
        res.status(400).send("Invalid token");
    }
}



export {getLocationsController, registerUserController, loginController, checkToken};