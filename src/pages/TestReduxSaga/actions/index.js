export const GET_GITHUB_AVATAR = "GET_GITHUB_AVATAR";
export const SET_GITHUB_AVATAR = "SET_GITHUB_AVATAR";

export const getGithubAvatar = username => {
  return { type: GET_GITHUB_AVATAR, username };
};

export const setGithubAvatar = avatar => {
  return { type: SET_GITHUB_AVATAR, avatar };
};
