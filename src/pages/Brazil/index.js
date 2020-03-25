import React,{ useState }from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation }  from "react-i18next";
import ReactTooltip        from "react-tooltip"; 

import * as Styled from './styles.js';

import { CardStats } from "~/components";
import { Header } from "~/components";
import { MapHome } from "~/components";

const Brazil = () => {
  const [t] = useTranslation();
  const  [content, setContent] = useState("");
  
 

  return (
    <>
      <Header title={t("header.map")} />

      <Styled.Container>


     <Styled.ContainerMap>
        <MapHome setTooltipContent={setContent}/>
        <ReactTooltip html="true">{content}</ReactTooltip>
     </Styled.ContainerMap>

      <Grid>
        <Row style={{marginBottom: "1.5em"}}>
          <Cell desktopColumns={12} phoneColumns={12} tabletColumns={12}>
            <CardStats
              status="confirmed"
              title={<div>Confirmados</div>}
              count="{quantity}"
            />
          </Cell>

        </Row>

        <Row style={{marginBottom: "1.5em"}}>
          <Cell desktopColumns={12} phoneColumns={2} tabletColumns={12}>
            <CardStats
              status="recovered"
              title={<div>Recuperados</div>}
              count="{quantity}"
            />
          </Cell>
          <Cell desktopColumns={12} phoneColumns={2} tabletColumns={12}>
            <CardStats
              status="death"
              title={<div>Óbitos</div>}
              count="{quantity}"
            />
          </Cell>
        </Row>
          <Row>
          <Cell desktopColumns={12} phoneColumns={12} tabletColumns={12}>
            <CardStats 
               title={<div>Confira de existe casos confirmado próximo a você</div>}               
            />
          </Cell> 
        </Row>

      </Grid>
      </Styled.Container>
    </>

  );
};

export default Brazil;
