import { action } from "typesafe-actions";
import { CitiesTypes, Case, City, State } from "./types";

export const findAllCases = () => action(CitiesTypes.FIND_ALL_CASES);

export const setAllCases = (allCases: Case[]) =>
  action(CitiesTypes.SET_ALL_CASES, allCases);

export const findCitiesCases = () => action(CitiesTypes.FIND_CITIES_CASES);

export const setCitiesCases = (cities: City[]) =>
  action(CitiesTypes.SET_CITIES_CASES, cities);

export const findStatesCases = () => action(CitiesTypes.FIND_STATES_CASES);

export const setStatesCases = (states: State[]) =>
  action(CitiesTypes.SET_STATES_CASES, states);
