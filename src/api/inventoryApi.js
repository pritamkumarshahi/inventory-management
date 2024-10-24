import axios from 'axios';

import { mockInventoryData } from "../mock/mockInventryData"

const API_URL = 'https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory';

export const fetchInventoryData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch inventory data. Returning mock data instead.", error);
        
        // API' is failing too much, had to put MOCK data when it fails, Not a good practice it's just to get the data
        return mockInventoryData;
    }
};
