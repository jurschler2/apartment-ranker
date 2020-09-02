import axios from "axios";
import {ADD_APARTMENT, LOAD_APARTMENTS} from "./actionTypes";

const BASE_URL = "http://localhost:5000/apartment";

export function addApartment (newApartment) {
  return {
    type: ADD_APARTMENT,
    apartment: newApartment
  }
}

export function loadApartments(apartmentData) {
  return {
    type: LOAD_APARTMENTS,
    apartments: apartmentData
  }
}

export function addApartmentToAPI(url) {
  return async function(dispatch) {
    try {
      let res = await axios.post(BASE_URL, {url});
      console.log("This is the response object for adding one:", res.data)
      dispatch(addApartment(res.data))
    }

    catch(err) {
      console.log("could not add apartment")
    }
  }
}

// API call made inside home
export function getApartmentsFromAPI() {
  return async function(dispatch) {

    try {
      let res = await axios.get(`${BASE_URL}/all`);
      console.log("This is the response data:", res.data.apartments)
      dispatch(loadApartments(res.data.apartments));
    }

    catch(err) {
      console.log("Could not GET all apartments.")
    }
  }
}