import axios from "axios";
import {ADD_APARTMENT, LOAD_APARTMENTS, LOAD_USER, UPDATE_RANKINGS} from "./actionTypes";

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

export function loadUser(user) {
  return {
    type: LOAD_USER,
    user: user
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
      let res = await axios.patch(`${BASE_URL}/${ranking_id}`, {formData})
      console.log("this is the response to update the rankings:", res.data)
      dispatch(updateRankings(res.data.apartment_rankings))
      
      

    }
    catch (err) {
      console.log("Could not PATCH rankings.")
    }
  }
}