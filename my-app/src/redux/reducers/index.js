import { combineReducers } from "redux";
import userDetails from "./userDetailsReducer";
import genders from "./genderReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  userDetails,
  genders,
  apiCallsInProgress
});

export default rootReducer;
