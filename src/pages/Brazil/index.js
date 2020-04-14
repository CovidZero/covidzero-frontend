import React, { useState, useEffect } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import * as Styled from "./styles.js";

import { CardStats } from "~/components";
import { Header } from "~/components";
import { MapHome } from "~/components";
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

      <Styled.ContainerChips>
        <Chips height="10" type="confirmed" text="Confirmados" />
        <Chips height="10" text="Óbitos" />
        {/*<Chips height="10" type="hidden" text="Atualizado em: " lastUpdate={now.getHours()+':'+now.getMinutes()} />*/}
        <Styled.ContainerDiv>Atualizado as: 18:30</Styled.ContainerDiv>
      </Styled.ContainerChips>

      <Styled.Container>
        <Styled.ContainerMap className="box-map">
          <MapHome setTooltipContent={setContent}  setStateCases={totalCases.cases}/>
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
          </Grid>
        </Styled.MobileBottomIndicators>
      </Styled.Container>
    </>
  );
};

export default Brazil;
