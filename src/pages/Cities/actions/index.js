export const FIND_CITIES = "FIND_CITIES";
export const SET_FINDED_CITIES = "SET_FINDED_CITIES";

export const findCities = () => {
  return { type: FIND_CITIES }
}

export const setFindedCities = cities => {
  return { type: SET_FINDED_CITIES, cities }
}