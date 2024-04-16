import {sendRequest} from "../services/requests.js";

const parseResponse = (response) => {
    console.log(response)
    return response.data.map(item => {
        const routes = item.route.map(route => ({
            cityFrom: route.cityFrom,
            cityTo: route.cityTo,
            localDeparture: route.local_departure,
            localArrival: route.local_arrival,
        }));
        const [currency, value] = Object.entries(item.conversion)[0];


        return {
            
            
            routes: routes,
            currency: currency,
            value: value,
            adultFare: item.fare.adults,
            childFare: item.fare.children,
            infantFare: item.fare.infants,
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