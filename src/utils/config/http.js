import axios from "axios";

import { API_URL } from "../constants";

const http = axios.create({
  baseURL: API_URL
});

/**
 * Interceptor for all requests
 */
http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    /**
     * Add your error handlers here
     */
    return Promise.reject(error);
  }
);

/**
 * Interceptor for all responses
 */
http.interceptors.response.use(null, error => {
  return Promise.reject(error);
});

export default http;
