import { combineReducers } from "redux";
import AllUserDetails from "./userDetailsReducer";
import genders from "./genderReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  AllUserDetails,
  genders,
  apiCallsInProgress
});

export default rootReducer;
