import axios from "axios";

export const Get = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error("Error fetching data:", error); 
        throw error;
    }
};
