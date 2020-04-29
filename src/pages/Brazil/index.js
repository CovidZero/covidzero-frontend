import React, { useState, useEffect } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import * as Styled from "./styles.js";

import { CardStats, DailyCases, TotalCases, RegionCases, TotalDeaths } from "~/components";
import { Header } from "~/components";
import { MapBrazil } from "~/components";
import { Chips } from "~/components";
import API from "~/API";

const Brazil = () => {
  const now = new Date();
  const [t] = useTranslation();
  const [content, setContent] = useState("");
  const initalCases = {
    confirmed: 0,
    suspected: 0,
    recovered: 0,
    deaths: 0,
    cases: []
  }
  const [totalCases, setTotalCases] = useState(initalCases)

  const sumStateCases = (stateCases) => {
    let totalCases = {
      confirmed: 0,
      suspected: 0,
      recovered: 0,
      deaths: 0,
      cases: stateCases
    };

    stateCases.map(stateCases => {
      totalCases.confirmed = totalCases.confirmed + stateCases.cases.confirmed;
      totalCases.suspected = totalCases.suspected + stateCases.cases.suspected;
      totalCases.recovered = totalCases.recovered + stateCases.cases.recovered;
      totalCases.deaths = totalCases.deaths + stateCases.cases.deaths;
    })

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
        <Styled.ContainerMap className="box-map">
          <MapBrazil
            initialZoom={7}
            setStateCases={totalCases.cases}
            setTooltipContent={setContent}
          />
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>

        <Styled.MobileBottomIndicators>
          <Grid>
            <Row style={{ marginBottom: "1em" }}>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={4}>
                <CardStats status="confirmed" title="Confirmados" count={totalCases.confirmed.toLocaleString()} />
              </Cell>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={4}>
                <CardStats status="death" title="Óbitos" count={totalCases.deaths.toLocaleString()} />
              </Cell>
            </Row>
            {/*<Row>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={4}>
                <CardStats status="death" title="Óbitos" count={totalCases.deaths} />
              </Cell>
            </Row>*/}
            <Row style={{ marginBottom: "1em" }}>
              <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
                <DailyCases title="Novos casos confirmados diários" />
              </Cell>
            </Row>
            <Row style={{ marginBottom: "1em" }}>
              <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
                <TotalCases title="Casos confirmados totais no Brasil" />
              </Cell>
            </Row>
            <Row style={{ marginBottom: "1em" }}>
              <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
                <RegionCases title="Casos confirmados por Região" />
              </Cell>
            </Row>
            <Row style={{ marginBottom: "1em" }}>
              <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
                <TotalDeaths title="Óbitos totais no Brasil" />
              </Cell>
            </Row>
          </Grid>
        </Styled.MobileBottomIndicators>
      </Styled.Container>
    </>
  );
};

export default Brazil;
