import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { CitiesState } from "./ducks/cities/types";

import rootSaga from "./ducks/rootSaga";
import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  citiesReducer: CitiesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
