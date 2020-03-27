import { put } from "redux-saga/effects";
import http from "~/utils/config/http";

import { setFindedCities } from "../actions";

export function* findCities() {
  try {
    const resp = yield http.get('/cities');
    yield put(setFindedCities(resp.data));
  } catch (error) {
    yield put(setFindedCities([]));
  }
}
