import React, { useState, useEffect } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";

import { CardStats } from "~/components";
import { Header } from "~/components";
import API from "~/API";
import { StateCases } from "~/API/CasesService";

const Map = () => {
  const [t] = useTranslation();
  let initalCases = {
    active: 0,
    suspect: 0,
    recovered: 0,
    death: 0
  }
  const [totalCases, setTotalCases] = useState(initalCases)

  const sumStateCases = (stateCases) => {
    let totalCases = {
      active: 0,
      suspect: 0,
      recovered: 0,
      death: 0
    }

    stateCases.map(stateCases => {
      totalCases.active = totalCases.active + stateCases.cases.active;
      totalCases.suspect = totalCases.suspect + stateCases.cases.suspected;
      totalCases.recovered = totalCases.recovered + stateCases.cases.recovered;
      totalCases.death = totalCases.death + stateCases.cases.deaths;
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

      <Grid>
        <Row>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="confirmed"
              title={<div>Confirmados</div>}
              count={totalCases.active}
            />
          </Cell>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="suspect"
              title={<div>Suspeitos</div>}
              count={totalCases.suspect}
            />
          </Cell>
        </Row>

        <Row>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="recovered"
              title={<div>Recuperados</div>}
              count={totalCases.recovered}
            />
          </Cell>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="death"
              title={<div>Óbitos</div>}
              count={totalCases.death}
            />
          </Cell>
        </Row>
      </Grid>
    </>
  );
};

export default Map;
