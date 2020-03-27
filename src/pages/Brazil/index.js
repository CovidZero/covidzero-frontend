import React, { useState, useEffect } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import * as Styled from "./styles.js";

import { CardStats } from "~/components";
import { Header } from "~/components";
import { MapHome } from "~/components";
import API from "~/API";

const Brazil = () => {
  const [t] = useTranslation();
  const [content, setContent] = useState("");
  const initalCases = {
    confirmed: 0,
    suspected: 0,
    recovered: 0,
    deaths: 0
  }
  const [totalCases, setTotalCases] = useState(initalCases)

  const sumStateCases = (stateCases) => {
    let totalCases = initalCases;

    stateCases.map(stateCases => {
      totalCases.confirmed = totalCases.confirmed + stateCases.cases.confirmed;
      totalCases.suspect = totalCases.suspect + stateCases.cases.suspected;
      totalCases.recovered = totalCases.recovered + stateCases.cases.recovered;
      totalCases.deaths = totalCases.deaths + stateCases.cases.deaths;
    })
    console.log(totalCases)
    return totalCases;
  }

  useEffect(() => {
    (async () => {
      const stateCases = await API.cases.getStatesCases();
      setTotalCases(sumStateCases(stateCases))
    }
    )()
  }, [])

  return (
    <>
      <Header title={t("header.map")} />

      <Styled.Container>
        <Styled.ContainerMap>
          <MapHome setTooltipContent={setContent} />
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>

        <Styled.MobileBottomIndicators>
          <Grid>
            <Row style={{ marginBottom: "1em" }}>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={4}>
                <CardStats status="confirmed" title="Confirmados" count={totalCases.confirmed} />
              </Cell>
            </Row>
            <Row>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={2}>
                <CardStats status="recovered" title="Recuperados" count={totalCases.recovered} />
              </Cell>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={2}>
                <CardStats status="death" title="Óbitos" count={totalCases.deaths} />
              </Cell>
            </Row>
          </Grid>
        </Styled.MobileBottomIndicators>
      </Styled.Container>
    </>
  );
};

export default Brazil;