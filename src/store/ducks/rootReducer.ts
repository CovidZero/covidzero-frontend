import { combineReducers } from "redux";

import citiesReducer from "./cities";

const appReducer = combineReducers({
  citiesReducer
});

export default appReducer;
