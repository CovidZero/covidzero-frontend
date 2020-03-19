import axios from 'axios';
import { get } from 'lodash';

import { store } from '../store';

let requestToken;
axios.defaults.baseURL = process.env.REACT_APP_PUBLIC_URL;

const getToken = state => get(state, 'auth.requestToken');

const tokenListener = () => {
  requestToken = getToken(store.getState());
};

store.subscribe(tokenListener);

export default {
  send: (route, method, payload) => (
    axios[method](
      route,
      payload,
      {
        headers: {
          Authorization: `Bearer ${requestToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
  ),
};
