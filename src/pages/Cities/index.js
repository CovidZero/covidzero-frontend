import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
import { lowerCase, deburr } from 'lodash';

import * as Styled from "./styles.js";

import { Header, ExpandableBox, Input, CardStats, MapCities } from "~/components";
import API from "~/API";
 



const Cities = () => {
  const [t] = useTranslation();

  const [getStatesCases, setStatesCases] = useState([])
  const [getCityCases, setCityCases]    = useState([])
 

  const [content, setContent] = useState("");
  const [filter, setFilter] = useState("");
 



  const citiesByFilter = () => {
    lowerCase(deburr())

       const cases= getCityCases.sort(function(a, b) {
                        return  a.totalcases < b.totalcases ? 1  : (a.totalcases > b.totalcases ? -1 : 0);                     
                   });

    return !!filter ? getCityCases.filter(item => rawText(item.city).includes(rawText(filter))) : getCityCases;
  }

  function rawText(text) {
    return lowerCase(deburr(text))
  }
 


    useEffect(() => {
          (async () => {
                const stateCases = await API.cases.getStatesCases();
                setStatesCases(stateCases);

                const cityCases = await API.cases.getCityCases();
                setCityCases(Object.values(cityCases.cases));
          }
          )()
  }, [])

  


  return (
    <>
      <Header title={t("header.map")} />

      <Styled.Container>

        <Styled.ContainerMap>
          <MapCities setTooltipContent={setContent} setStateCases={getStatesCases}  setCityCases={getCityCases}/>
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>
        <Grid>
          <Row style={{ marginBottom: 20 }}>
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
              <Input
                placeholder='Digite aqui'
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
            </Cell>
          </Row>
          <p>CIDADES</p>
          {
            citiesByFilter().map((city,index) =>
              <Row key={index} style={{ marginBottom: 10 }}>
                <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
                  <ExpandableBox
                    header={
                      <>
                        <div style={{ marginRight: 20 }}>{city.city}</div>
                        <div>{city.stateCode}</div>
                        <div style={{ color: 'red', marginLeft: 'auto', marginRight: 30 }}>{city.totalcases}</div>
                      </>
                    }
                    headerExpaned={
                      <>
                        <div style={{ marginRight: 20 }}>{city.city}</div>
                        <div>{city.stateCode}</div>
                        <div style={{ color: 'red', marginLeft: 'auto', marginRight: 30 }}>{city.totalcases}</div>
                      </>
                    }
                    body={
                      <Grid style={{ padding: 0 }}>
                        <Row >
                          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                            <CardStats
                              style={{ padding: 0 }}
                              status="confirmed"
                              title={<div>Confirmados</div>}
                              count={city.totalcases}
                            />
                          </Cell>
                        {/*<Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                            <CardStats
                              status="death"
                              title={<div>Óbitos</div>}
                              count={city.deaths}
                            />
                          </Cell>*/}

                        </Row>
                        {/*<Row >
                          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                            <CardStats
                              status="recovered"
                              title={<div>Recuperados</div>}
                              count={city.recovered}
                            />
                          </Cell>
                          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                            <CardStats
                              status="suspect"
                              title={<div>Suspeitos</div>}
                              count={city.suspected}
                            />
                          </Cell>
                        </Row>*/}
                      </Grid>
                    }
                  />
                </Cell>
              </Row>
            )
          }
        </Grid>
      </Styled.Container>
    </>
  );
};

export default Cities;