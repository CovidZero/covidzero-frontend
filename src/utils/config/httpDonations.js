import axios from 'axios';

import { API_URL_DONATION_CAPTABLE } from "../constants";

const http = axios.create({
  baseURL: API_URL_DONATION_CAPTABLE,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
  },
});


export default http;



