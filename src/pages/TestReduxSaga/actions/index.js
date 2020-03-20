export const GET_GITHUB_INFO = "GET_GITHUB_INFO";
export const SET_GITHUB_INFO = "SET_GITHUB_INFO";

export const getGithubInfo = username => {
  return { type: GET_GITHUB_INFO, username };
};

export const setGithubInfo = data => {
  return { type: SET_GITHUB_INFO, data };
};
