import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import auth from './reducers/auth';

const persistConfig = {
  key: 'auth',
  whitelist: ['auth'],
  storage,
};

const rootReducer = combineReducers({
  auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export {
  store,
  persistor,
};
