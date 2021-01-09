// file index store untuk menginisialisasi middleware

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  rootReducers, // file index.js dari folder reducer
  composeWithDevTools(applyMiddleware(...middleware)) // mengkoneksikan middleware dengan extensi browser
);

export default store;
