import { GET_GITHUB_AVATAR, SET_GITHUB_AVATAR } from "../actions";

const initialState = {
  avatar: undefined
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB_AVATAR:
      return { ...state };
    case SET_GITHUB_AVATAR:
      return { ...state, avatar: action.avatar };
    default:
      return state;
  }
};
