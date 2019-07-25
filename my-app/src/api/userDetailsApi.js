import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/alluserdetails/";

export function getAllUserDetails() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveSingleUsersDetails(userDetails) {
  return fetch(baseUrl + (userDetails.id || ""), {
    method: userDetails.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userDetails)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSingleUsersDetails(userDetails) {
  return fetch(baseUrl + userDetails.id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
