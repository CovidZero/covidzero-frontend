import React, {Fragment, useState} from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import * as Styled from "./styles.js";

import { Header, ExpandableBox, Input, CardStats, MapHome } from "~/components";

const Map = () => {
  const [t] = useTranslation();
  const [content, setContent] = useState("");

  return (
    <Fragment>
      <Header title={t("header.map")} />

      <Styled.Container>

        <Styled.ContainerMap>
          <MapHome setTooltipContent={setContent} />
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>
        <Grid>
          <Row style={{marginBottom:20}}>
            <Cell desktopColumns={10} phoneColumns={4} tabletColumns={6}>
              <Input
                placeholder='Digite aqui'
              />
            </Cell>
          </Row>
          <p>CIDADES</p>
          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>

          <Row style={{marginBottom:10}}> 
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}> 
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
          </Row>
        </Grid>
      </Styled.Container>
      
    </Fragment>

  );
};

export default Map;
