import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(
  state = initialState.userDetails,
  action
) {
  switch (action.type) {
    case types.CREATE_SINGLE_USERDETAILS_SUCCESS:
      return [...state, { ...action.userDetails }];
    case types.UPDATE_SINGLE_USERDETAILS_SUCCESS:
      return state.map(userDetails =>
        userDetails.id == action.course.id ? action.userDetails : userDetails
      );
    case types.LOAD_ALL_USERDETAILS_SUCCESS:
      return action.userDetails;
    case types.DELETE_USERDETAILS_OPTIMISTIC:
      return state.filter(
        userDetails => userDetails.id !== action.userDetails.id
      );
    default:
      return state;
  }
}
