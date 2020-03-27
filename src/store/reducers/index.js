import { combineReducers } from "redux";

import { citiesReducer } from "../../pages/Cities/reducers";

const appReducer = combineReducers({
  citiesReducer
});

export default appReducer;
