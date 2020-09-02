import axios from "axios";
import {ADD_APARTMENT, LOAD_APARTMENTS} from "./actionTypes";

const BASE_URL = "http://localhost:5000/apartment";

export function addApartment (formData) {
  console.log(formData);
}

export function loadApartments(apartments) {
  return {
    type: LOAD_APARTMENTS,
    apartments: apartments
  }
}

// API call made inside home
export function getApartmentsFromAPI() {
  return async function(dispatch) {

    try {
      let res = await axios.get(`${BASE_URL}/all`);
      console.log("This is the response data:", res.data)
      dispatch(loadApartments(res.data.apartments));
    }

    catch(err) {
      console.log("Could not GET all apartments.")
    }
  }
}