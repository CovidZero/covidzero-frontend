import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
import { lowerCase, deburr } from 'lodash';

import * as Styled from "./styles.js";

import { Header, ExpandableBox, Input, CardStats, MapHome } from "~/components";

import { findCities } from './actions';

const Cities = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { cities } = useSelector(state => state.citiesReducer);

  const [content, setContent] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(findCities())
  }, []);

  const citiesByFilter = () => {
    lowerCase(deburr())
    return !!filter ? cities.filter(item =>
      rawText(item.city).includes(rawText(filter))) : cities;
  }

  function rawText(text) {
    return lowerCase(deburr(text))
  }

  return (
    <>
      <Header title={t("header.map")} />

      <Styled.Container>

        <Styled.ContainerMap>
          <MapHome setTooltipContent={setContent} />
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>
        <Grid>
          <Row style={{ marginBottom: 20 }}>
            <Cell desktopColumns={10} phoneColumns={4} tabletColumns={6}>
              <Input
                placeholder='Digite aqui'
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
            </Cell>
          </Row>
          <p>CIDADES</p>
          {
            citiesByFilter().map(city =>
              <Row key={city.id} style={{ marginBottom: 10 }}>
                <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
                  <ExpandableBox
                    header={
                      <>
                        <div style={{ marginRight: 20 }}>{city.city}</div>
                        <div>{city.stateCode}</div>
                        <div style={{ color: 'red', marginLeft: 'auto', marginRight: 30 }}>{city.quantity}</div>
                      </>
                    }
                    headerExpaned={
                      <>
                        <div style={{ marginRight: 20 }}>{city.city}</div>
                        <div>{city.stateCode}</div>
                        <div style={{ color: 'red', marginLeft: 'auto', marginRight: 30 }}>{city.quantity}</div>
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
                              count={city.confirmed}
                            />
                          </Cell>
                          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={3}>
                            <CardStats
                              status="death"
                              title={<div>Óbitos</div>}
                              count={city.deaths}
                            />
                          </Cell>
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
