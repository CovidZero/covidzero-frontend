import { combineReducers } from "redux";

import { testReducer } from "../../pages/TestReduxSaga/reducers";

const appReducer = combineReducers({
  testReducer
});

export default appReducer;
