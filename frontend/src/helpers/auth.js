import axios from "axios";

const AUTH_BASE_URL = "https://apartment-ranker-backend.herokuapp.com/api/users";

/**
 * setAuthHeader
 *
 * - adds JWT from localStorage to axios default Authorization header
 */
export const setAuthHeader = () => {
  if (window?.localStorage?.getItem("_apartmentRankerToken")) {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "_apartmentRankerToken"
    );
  }
};

/**
 * checkToken
 *
 * - checks localStorage for a key of _apartmentRankerToken
 * - This does no validation, it merely checks localStorage
 */
export const checkToken = () => {
  if (localStorage.getItem("_apartmentRankerToken")) {
    
    setAuthHeader();
    return true
  };
  return false;
};

/**
 * verifyToken
 *
 * - pings the server to verify the token in localStorage
 *
 * returns => {
 *   {status}
 * }
 */
export const verifyToken = async () => {
  if (!localStorage.getItem("_apartmentRankerToken")) {
    return { status: "error", message: "No token found." };
  }
  setAuthHeader();

  let res = await axios.get(`${AUTH_BASE_URL}/confirm`)
  if (res.data.status === "confirmed") {
    return true;
  } else {
    localStorage.removeItem("_apartmentRankerToken")
    return false
  }
};

// export const checkUser = async () => {

//   const res = await axios.get(`${AUTH_BASE_URL}/check`);
//   console.log("This is the response to check:", res)

//   if (res.data.token) {
//     localStorage.setItem("_apartmentRankerToken", res.data.token);
//     setAuthHeader();
//     return true;
//   }
//   return false;
// }


export const generateToken = async () => {

  // REMINDER: Commenting out checkUser - there is not a way to identify the unique user IP address when using Heroku, so there is not a way to look up a user
  //           without some kind of account creation. Therefore, if the token is gone we must just generate a brand new one.

  // const existingUser = await checkUser();

  // console.log("This is the existing user check:", existingUser)

  // if (!existingUser) {
    
    const res = await axios.post(`${AUTH_BASE_URL}/signup`);
  
    if (res.status === 200) {
      localStorage.setItem("_apartmentRankerToken", res.data.token);
      setAuthHeader();
    }
  // }

}

//TODO: add a method that checks whether there is an existing account - could be that this is just an add to the generateToken method.

//      flow of it could be - check for token, if token, verify, if invalid, generateToken which either gets from existing account or registers