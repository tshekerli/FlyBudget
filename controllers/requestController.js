import {sendRequest} from "../services/requests.js";

const parseResponse = (response) => {
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
const search = async (req, res) => {
    try {
        const response = await sendRequest(req.query);
        const parsedResponse = parseResponse(response);
        res.status(200).json(parsedResponse);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export {search};