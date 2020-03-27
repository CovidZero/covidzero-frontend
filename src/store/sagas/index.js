import { takeLatest, all } from "redux-saga/effects";

import { FIND_CITIES } from "~/pages/Cities/actions";
import { findCities } from "~/pages/Cities/sagas";

export function* root() {
  yield all([
    takeLatest(FIND_CITIES, findCities),
  ]);
}
