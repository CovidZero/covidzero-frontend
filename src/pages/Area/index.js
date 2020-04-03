import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import * as Styled from "./styles.js";
import usePosition from "~/services/usePosition";
import { Header } from "~/components";
import { MapArea } from "~/components";
import API from "~/API";

export default function Area() {
  const [t] = useTranslation();
  let { latitude, longitude, error } = usePosition();

  let initialZoom

  if (error) {
    /* se não conseguir pegar o lat e lng do usário coloca do Brasil */
    initialZoom = 4
    latitude = -14.2350044
    longitude = -51.9252815
  } else {
    initialZoom = 14
  }

  const initalCases = {
    cases: []
  }
  const [citiesCases, setTotalCases] = useState(initalCases)

  useEffect(() => {
    async function fetchData() {
      const citiesCases = await API.cases.getCityCases();
      setTotalCases(citiesCases)
    }
    fetchData();
  }, []);

  return (
    <>
      <Header title={t("header.area")} />
      <Styled.Container>
        {((latitude && longitude) || error) &&
          <Styled.ContainerMap>
            <MapArea
              error={error}
              userLat={latitude}
              userLng={longitude}
              initialZoom={initialZoom}
              citiesCases={citiesCases.cases} />
          </Styled.ContainerMap>
        }
      </Styled.Container>
    </>
  );
}
