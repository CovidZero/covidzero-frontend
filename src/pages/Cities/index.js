import React, {Fragment} from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";

import { Header, ExpandableBox, Input, CardStats } from "~/components";

const Map = () => {
  const [t] = useTranslation();

  return (
    <Fragment>
      <Header title={t("header.map")} />

      <Grid>
        <Row style={{marginBottom:20}}>
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
            <Input/>
          </Cell>
        </Row>
        
        <Row>
          <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}> 
            <ExpandableBox
             header='teste'
             headerExpaned='aberto'
             body={
             <Grid style={{padding:0}}>
              <Row > 
                <Cell  desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats 
                  style={{padding:0}}
                    status="confirmed"
                    title={<div>Confirmados</div>}
                    count="{quantity}"
                  />
                </Cell>
                <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats
                    status="recovered"
                    title={<div>Recuperados</div>}
                    count="{quantity}"
                  />
                </Cell>
              </Row>
              <Row >
                <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats 
                    status="death"
                    title={<div>Óbitos</div>}
                    count="{quantity}"
                  />
                </Cell>
                <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats
                    status="suspect"
                    title={<div>Suspeitos</div>}
                    count="{quantity}"
                  />
                </Cell>
              </Row>
             </Grid>
            }
            />
          </Cell>

          <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}> 
            <ExpandableBox
             header='teste'
             headerExpaned='aberto'
             body={
             <Grid style={{padding:0}}>
               <Row > 
                <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats 
                    status="confirmed"
                    title={<div>Confirmados</div>}
                    count="{quantity}"
                  />
                </Cell>
                <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats
                    status="recovered"
                    title={<div>Recuperados</div>}
                    count="{quantity}"
                  />
                </Cell>
              </Row>
              <Row >
              <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats 
                    status="death"
                    title={<div>Óbitos</div>}
                    count="{quantity}"
                  />
                </Cell>
                <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                  <CardStats
                    status="suspect"
                    title={<div>Suspeitos</div>}
                    count="{quantity}"
                  />
                </Cell>
              </Row>
             </Grid>
            }
            />
          </Cell>

        </Row>
      </Grid>
      
    </Fragment>
  );
};

export default Map;
