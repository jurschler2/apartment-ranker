import axios from "axios";

const AUTH_BASE_URL = "http://localhost:5000/api/users";

/**
 * setAuthHeader
 *
 * - adds JWT from localStorage to axios default Authorization header
 */
const setAuthHeader = () => {
  if (window?.localStorage?.getItem("_token")) {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "_token"
    );
  }
};

/**
 * checkToken
 *
 * - checks localStorage for a key of _token
 * - This does no validation, it merely checks localStorage
 */
const checkToken = () => {
  if (localStorage.getItem("_token")) return true;
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
const verifyToken = async () => {
  if (!localStorage.getItem("_token")) {
    return { status: "error", message: "This is an incorrect token." };
  }

  return await axios.get(`${AUTH_BASE_URL}/confirm`);
};


const signup = async () => {

  const res = await axios.post(`${AUTH_BASE_URL}/signup`);

  if (res.status === "success") {
    localStorage.setItem("_token", res.message.token);
    setAuthHeader();
  }
}