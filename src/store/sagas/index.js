import { takeLatest, all } from "redux-saga/effects";

import { GET_GITHUB_INFO } from "~/pages/TestReduxSaga/actions";
import { getGithubInfo } from "~/pages/TestReduxSaga/sagas";

export function* root() {
  yield all([takeLatest(GET_GITHUB_INFO, getGithubInfo)]);
}
