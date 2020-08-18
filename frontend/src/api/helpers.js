import axios from "axios";

/**
 *
 * Returns first digit of statusCode
 */
const statusCategory = (statusCode) => Math.floor(statusCode / 100);

/**
 * makeRequest
 *
 * generic helper function interface for making api calls to backend
 *
 * expects:
 * - { url, method, ...other options}
 *
 * returns => { status, message }
 *
 */
const _request = async ({ ...options }) => {
  try {
    const response = await axios(options);

    return {
      status: "success",
      message: response.data,
    };
  } catch (err) {
    const message =
      statusCategory(err?.response?.status) === 4
        ? err.response.data.errors
        : { serverError: "Something went wrong. Please try again later." };
    return {
      status: "error",
      message,
    };
  }
};

export default _request;
export { statusCategory };