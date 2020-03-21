import { put } from "redux-saga/effects";
import http from "~/utils/config/http";

import { setGithubInfo } from "../actions";

export function* getGithubInfo({ username }) {
  try {
    const resp = yield http.get(`/users/${username}`);
    yield put(setGithubInfo(resp.data));
  } catch (error) {}
}
