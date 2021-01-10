import { combineReducers } from "redux";
import authUser from "./authUser";
import authClinic from "./authClinic";

import message from "./message";

export default combineReducers({
  authUser,
  authClinic,
  message,
});
