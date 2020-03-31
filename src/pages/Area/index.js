import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import usePosition from "~/services/usePosition";
import { Header } from "~/components";
import { MapArea } from "~/components";
import API from "~/API";

export default function Area() {
  const [t] = useTranslation();
  const { latitude, longitude } = usePosition();

  const initalCases = {
    cases: []
  }
  const [citiesCases, setTotalCases] = useState(initalCases)
  const [content, setContent] = useState("");

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
      <MapArea
        setTooltipContent={setContent}
        lat={latitude}
        lng={longitude}
        citiesCases={citiesCases.cases}>
        <ReactTooltip html={true}>{content}</ReactTooltip>
      </MapArea>
    </>
  );
}
