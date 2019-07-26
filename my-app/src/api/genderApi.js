import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/userGenders/";

export function getGenders() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
