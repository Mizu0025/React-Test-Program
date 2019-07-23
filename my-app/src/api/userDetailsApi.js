import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/alluserdetails/";

export function getAllUserDetails() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveSingleUsersDetails(userdetails) {
  return fetch(baseUrl + (userdetails.id || ""), {
    method: userdetails.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userdetails)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSingleUsersDetails(userdetailsId) {
  return fetch(baseUrl + userdetailsId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
