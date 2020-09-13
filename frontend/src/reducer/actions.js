import axios from "axios";
import {ADD_APARTMENT, LOAD_APARTMENTS, UPDATE_RANKINGS} from "./actionTypes";

const BASE_URL = "http://localhost:5000/api/apartments";

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

export function updateRankings(rankingsData) {
  return {
    type: UPDATE_RANKINGS,
    rankings: rankingsData
  }
}

export function addApartmentToAPI(url) {
  return async function(dispatch) {
    try {
      let res = await axios.post(BASE_URL, {url});

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
      let res = await axios.get(BASE_URL);
    
      let apartmentURLstoApartments = {};
      res.data.apartments.forEach(a => apartmentURLstoApartments[a.apartment_url] = a)
      dispatch(loadApartments(apartmentURLstoApartments));
    }

    catch(err) {
      console.log("Could not GET all apartments.")
    }
  }
}

export function patchRankingsToAPI(formData) {
  return async function (dispatch) {

    try {
      const ranking_id = formData.ranking_id
      dispatch(updateRankings(formData))
      let res = await axios.patch(`${BASE_URL}/${ranking_id}`)
      console.log("These are the updated rankings:",res.data);


    }
    catch (err) {
      console.log("Could not PATCH rankings.")
    }
  }
}