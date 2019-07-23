import * as types from "./actionTypes";
import * as genderApi from "../../api/genderApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadGendersSuccess(genders) {
  return { type: types.LOAD_GENDERS_SUCCESS, genders: genders };
}

export function loadGenders() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return genderApi
      .getAuthors()
      .then(genders => {
        dispatch(loadGendersSuccess(genders));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
