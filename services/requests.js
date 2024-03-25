

export const sendRequest = async (data) => {
    const queryParams = new URLSearchParams(data).toString();

    const response = await fetch(`${process.env.SEARCH_URL}?${queryParams}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': process.env.API_KEY
        }
    });
    return await response.json();
};