import { all, takeLatest } from "redux-saga/effects";

import { CitiesTypes } from "./cities/types";
import { findAllCases, findCitiesCases, findStatesCases } from "./cities/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(CitiesTypes.FIND_ALL_CASES, findAllCases),
    takeLatest(CitiesTypes.FIND_CITIES_CASES, findCitiesCases),
    takeLatest(CitiesTypes.FIND_STATES_CASES, findStatesCases)
  ]);
}
