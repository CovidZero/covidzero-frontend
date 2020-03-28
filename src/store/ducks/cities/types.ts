/**
 * Action types
 */
export enum CitiesTypes {
  FIND_ALL_CASES = "@cities/FIND_ALL_CASES",
  SET_ALL_CASES = "@cities/SET_ALL_CASES",
  FIND_CITIES_CASES = "@cities/FIND_CITIES_CASES",
  SET_CITIES_CASES = "@cities/SET_CITIES_CASES",
  FIND_STATES_CASES = "@cities/FIND_STATES_CASES",
  SET_STATES_CASES = "@cities/SET_STATES_CASES"
}

/**
 * Data types
 */
export interface Case {
  totalCases: number;
  deaths: number;
}

export interface City {
  id: number;
  city: string;
  ibge_id: string;
  country: string;
  state_id: number;
  totalcases: number;
}

export interface State {
  stateCode: string;
  stateName: string;
  lat: string;
  lng: string;
  cases: Case[];
}

/**
 * State types
 */
export interface CitiesState {
  readonly allCases: Case[];
  readonly loadingAllCases: boolean;
  readonly cities: City[];
  readonly loadingCities: boolean;
  readonly states: State[];
  readonly loadingState: boolean;
}
