import Models from "../models/models.js";

const getLocationsController = async (req, res) => {
    try {

        
        const locations = await Models.getLocations();
        res.status(200).send(locations);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export {getLocationsController};