import { combineReducers } from "redux";

import { testReducer } from "../../pages/TestReducer/reducers";

const appReducer = combineReducers({
  testReducer
});

export default appReducer;
