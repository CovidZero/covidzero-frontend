import appReducer from "./reducers";
import { compose, createStore } from 'redux';

const store = createStore(
    appReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;
