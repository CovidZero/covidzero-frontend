import { put } from "redux-saga/effects";
import http from "~/utils/config/http";

import { setGithubAvatar } from "../actions";

export function* getGithubAvatar({ username }) {
  try {
    const resp = yield http.get(`/${username}`);
    yield put(setGithubAvatar(resp.data));
  } catch (error) {}
}
