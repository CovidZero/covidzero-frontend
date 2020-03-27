import { FIND_CITIES, SET_FINDED_CITIES } from '../actions';

const initialState = {
  cities: []
}

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CITIES:
      return { ...state }
    case SET_FINDED_CITIES:
      return { ...state, cities: action.cities }
    default:
      return { ...state }
  }
}