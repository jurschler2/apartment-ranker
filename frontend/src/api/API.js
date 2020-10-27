import axios from "axios";

import _request from "./helpers";

const BASE_API_URL = "http://localhost:5000/apartment";

class ApartmentRankerAPI {

  static async fetchApartment() {
    const result = await axios.get(BASE_API_URL);
    return result.data;
  }

  static async fetchAllApartment() {
    const result = await axios.get(`${BASE_API_URL}/all`);
    return result.data;
  }

  static async addApartment(url) {
    const result = await axios.post(BASE_API_URL, {url})
    return result.data;
  }
}

export default ApartmentRankerAPI;