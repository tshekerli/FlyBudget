import {sendRequest} from "../services/requests.js";

const parseResponse = (response) => {
    console.log(response)
    const currency_name = response.currency
    return response.data.map(item => {
        const routes = item.route.map(route => ({
            cityFrom: route.cityFrom,
            cityTo: route.cityTo,
            localDeparture: route.local_departure,
            localArrival: route.local_arrival,
        }));
        


        return {
            
            price: item.price,
            routes: routes,
            currency: currency_name,
            bagPrice: item.bags_price[0],
            link: item.deep_link
        };
    });
};
const search = async (query) => {
    try {
        const response = await sendRequest(query);
        
        const parsedResponse = parseResponse(response);
        return parsedResponse;
    } catch (error) {
        throw new Error(error.message);
    }
};

const receiveRequest = async (req, res) => {
    try {
        const response = await search(req.body);
        
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export  {search, receiveRequest};