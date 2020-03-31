import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import usePosition from "~/services/usePosition";
import { Header } from "~/components";
import { MapArea } from "~/components";

import { findCitiesCases } from "~/store/ducks/cities/actions";

export default function Area() {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const { latitude, longitude } = usePosition();
  
  const { cities, loadingCities, states, loadingState } = useSelector(
    state => state.citiesReducer
  );

  const initalCases = {
    confirmed: 0,
    suspected: 0,
    recovered: 0,
    deaths: 0,
    cases: []
  }
  const [cityCases, setTotalCases] = useState(initalCases)

  useEffect(() => {
    dispatch(findCitiesCases());
  }, []);

  /*
  useEffect(() => {
    
    (async () => {
      const cityCases = await API.cases.getStatesCases();
      console.log(cityCases)
      setTotalCases(cityCases)
    }
    )()
  }, [])
  */

  return (
    <>
      <Header title={t("header.area")} />
      <MapArea lat={latitude} lng={longitude} citiesCases={cities} />
    </>
  );
}
