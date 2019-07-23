export const CREATE_SINGLE_USERDETAILS = "CREATE_SINGLE_USERDETAILS";
export const LOAD_ALL_USERDETAILS_SUCCESS = "LOAD_ALL_USERDETAILS_SUCCESS";
export const LOAD_GENDERS_SUCCESS = "LOAD_GENDERS_SUCCESS";
export const CREATE_SINGLE_USERDETAILS_SUCCESS =
  "CREATE_SINGLE_USERDETAILS_SUCCESS";
export const UPDATE_SINGLE_USERDETAILS_SUCCESS =
  "UPDATE_SINGLE_USERDETAILS_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

//Below hides the loading state of a delete, making users think it deletes instantly while it's still processing
//also named differently to above standard so apiCallsInProgress doesn't go < 0, due to us not incrementing the # upon calling this
export const DELETE_USERDETAILS_OPTIMISTIC = "DELETE_USERDETAILS_OPTIMISTIC";
