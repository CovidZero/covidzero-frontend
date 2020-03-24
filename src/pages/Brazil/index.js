import React from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";

import { CardStats } from "~/components";
import { Header } from "~/components";
import { MapHome } from "~/components";

const Brazil = () => {
  const [t] = useTranslation();

  return (
    <>
      <Header title={t("header.map")} />

      <MapHome/>



      <Grid>
        <Row>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="confirmed"
              title={<div>Confirmados</div>}
              count="{quantity}"
            />
          </Cell>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="suspect"
              title={<div>Suspeitos</div>}
              count="{quantity}"
            />
          </Cell>
        </Row>

        <Row>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="recovered"
              title={<div>Recuperados</div>}
              count="{quantity}"
            />
          </Cell>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={6}>
            <CardStats
              status="death"
              title={<div>Óbitos</div>}
              count="{quantity}"
            />
          </Cell>
        </Row>
      </Grid>
    </>
  );
};

export default Brazil;
