import { takeLatest, all } from "redux-saga/effects";

import { GET_GITHUB_AVATAR } from "~/pages/TestReduxSaga/actions";
import { getGithubAvatar } from "~/pages/TestReduxSaga/sagas";

export function* root() {
  yield all([takeLatest(GET_GITHUB_AVATAR, getGithubAvatar)]);
}
