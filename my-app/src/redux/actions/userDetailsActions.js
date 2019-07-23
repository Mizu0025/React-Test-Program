import * as types from "./actionTypes";
import * as userDetailsApi from "../../api/userDetailsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAllUsersDetailsSuccess(userDetails) {
  return {
    type: types.LOAD_ALL_USERDETAILS_SUCCESS,
    userDetails: userDetails
  };
}

export function createSingleUserDetailsSuccess(userDetails) {
  return { type: types.CREATE_SINGLE_USERDETAILS_SUCCESS, userDetails };
}

export function updateSingleUserDetailsSuccess(userDetails) {
  return { type: types.UPDATE_SINGLE_USERDETAILS_SUCCESS, userDetails };
}

export function deleteSingleUserDetailsOptimistic(userDetails) {
  return { type: types.DELETE_USERDETAILS_OPTIMISTIC, userDetails };
}

export function loadAllUsersDetails() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userDetailsApi
      .getAllUserDetails()
      .then(allUsersDetails => {
        dispatch(loadAllUsersDetailsSuccess(allUsersDetails));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveSingleUsersDetails(UserDetails) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userDetailsApi
      .saveSingleUsersDetails(UserDetails)
      .then(savedUserDetails => {
        UserDetails.id
          ? dispatch(updateSingleUserDetailsSuccess(savedUserDetails))
          : dispatch(createSingleUserDetailsSuccess(savedUserDetails));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteSingleUsersDetails(UserDetails) {
  return function(dispatch) {
    dispatch(deleteSingleUserDetailsOptimistic(UserDetails));
    return userDetailsApi.deleteSingleUsersDetails(UserDetails.id);
  };
}
