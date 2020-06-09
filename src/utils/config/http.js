import axios from 'axios';

import { API_URL } from "../constants";

const http = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
  },
});


export default http;



