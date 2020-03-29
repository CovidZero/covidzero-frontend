import { Reducer } from "redux";
import { CitiesState, CitiesTypes } from "./types";

const INITIAL_STATE: CitiesState = {
  allCases: [],
  loadingAllCases: false,
  cities: [],
  loadingCities: false,
  states: [],
  loadingState: false
};

const citiesReducer: Reducer<CitiesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CitiesTypes.FIND_CITIES_CASES:
      return { ...state, loadingCities: true };
    case CitiesTypes.SET_CITIES_CASES:
      return {
        ...state,
        loadingCities: false,
        cities: action.payload
      };

    case CitiesTypes.FIND_STATES_CASES:
      return { ...state, loadingState: true };
    case CitiesTypes.SET_STATES_CASES:
      return {
        ...state,
        loadingState: false,
        states: action.payload
      };

    case CitiesTypes.FIND_ALL_CASES:
      return { ...state, loadingAllCases: true };
    case CitiesTypes.SET_ALL_CASES:
      return { ...state, loadingAllCases: false, allCases: action.allCases };
    default:
      return { ...state };
  }
};

export default citiesReducer;
