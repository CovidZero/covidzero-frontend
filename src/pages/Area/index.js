import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
    addScript('https://d2smc9x58xj6ns.cloudfront.net/neoron.js');
  }, []);

  let _loaded = {};
  function addScript(url) {
    if (!_loaded[url]) {
      let s = document.createElement('script');
      s.src = url;
      document.head.appendChild(s);
      _loaded[url] = true;
    }
  }

  return (
    <>
      <link rel="stylesheet" type="text/css" href="https://d2smc9x58xj6ns.cloudfront.net/neoron.css"></link>
      <div id="neoron"></div>
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