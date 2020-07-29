import axios from "axios";

const BASE_API_URL = "http://localhost:5000/apartment";

class ApartmentRankerAPI {

  static async fetchApartment() {
    const result = await axios.get(BASE_API_URL);
    return result.data;
  }
}

export default ApartmentRankerAPI;