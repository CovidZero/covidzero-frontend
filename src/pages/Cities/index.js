import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
import { lowerCase, deburr } from "lodash";

import * as Styled from "./styles.js";

import {
  Header,
  ExpandableBox,
  Input,
  CardStats,
  MapCities
} from "~/components";

import Loading from "~/components/Loading/index.js";

import { findCitiesCases, findStatesCases } from "~/store/ducks/cities/actions";

const Cities = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const { cities, loadingCities, states, loadingState } = useSelector(
    state => state.citiesReducer
  );

  const [content, setContent] = useState("");
  const [filter, setFilter] = useState("");

  const citiesByFilter = () => {
    return !!filter
      ? cities.filter(item => rawText(item.city).includes(rawText(filter)))
      : cities;
  };

  function rawText(text) {
    return lowerCase(deburr(text));
  }

  useEffect(() => {
    dispatch(findCitiesCases());
    dispatch(findStatesCases());
  }, []);

  return (
    <>
      <Loading spinning={loadingCities || loadingState} />
      <Header title={t("header.map")} />

      <Styled.Container>
        <Styled.ContainerMap>
          <MapCities
            setTooltipContent={setContent}
            statesCases={states}
            citiesCases={cities}
          />
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>
        <Grid className="cities-grid">
          <Row style={{ marginBottom: 20 }}>
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
              <Input
                placeholder="Digite aqui"
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
            </Cell>
          </Row>
          <p>CIDADES</p>
          <div className="cities-scroller">
            {citiesByFilter().map((city, index) => (
              <Row key={index} style={{ marginBottom: 10 }}>
                <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
                  <ExpandableBox
                    header={
                      <>
                        <div style={{ marginRight: 20 }}>{city.city}</div>
                        <div>{city.stateCode}</div>
                        <div
                          style={{
                            color: "red",
                            marginLeft: "auto",
                            marginRight: 30
                          }}
                        >
                          {city.totalcases}
                        </div>
                      </>
                    }
                    headerExpaned={
                      <>
                        <div style={{ marginRight: 20 }}>{city.city}</div>
                        <div>{city.stateCode}</div>
                        <div
                          style={{
                            color: "red",
                            marginLeft: "auto",
                            marginRight: 30
                          }}
                        >
                          {city.totalcases}
                        </div>
                      </>
                    }
                    body={
                      <Grid style={{ padding: 0 }}>
                        <Row>
                          <Cell
                            desktopColumns={6}
                            phoneColumns={2}
                            tabletColumns={3}
                          >
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
                      </Grid>
                    }
                  />
                </Cell>
              </Row>
            ))}
          </div>
        </Grid>
      </Styled.Container>
    </>
  );
};

export default Cities;
