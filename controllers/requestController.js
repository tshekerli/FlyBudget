import {sendRequest} from "../services/requests.js";

const search = async (req, res) => {
    try {
        const response = await sendRequest(req.query);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export {search};