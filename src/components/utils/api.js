import axios from "axios";

export const BASE_URL = "https://tailor.amaderthikana.com/api/1";



export const fetchDataFromApi = async (url, params) => {
    try {
      const { data } = await axios.get(BASE_URL + url, {
        params,
      });
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${BASE_URL + url}:`, error.message);
      throw error; // Re-throw the error to be handled by the calling code
    }
  };