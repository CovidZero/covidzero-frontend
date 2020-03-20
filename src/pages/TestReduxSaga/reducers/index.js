import { GET_GITHUB_INFO, SET_GITHUB_INFO } from "../actions";

const initialState = {
  data: {}
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB_INFO:
      return { ...state };
    case SET_GITHUB_INFO:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
