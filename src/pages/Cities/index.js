import React, { useState, useEffect,useMemo } from "react";
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

import BrUF from "~assets/data/brazil-states.json";
import API from "~/API";

const Cities = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const {cities, loadingCities, states, loadingState } = useSelector(
    state => getCitiesStates(state.citiesReducer)    
  );

  const [content, setContent] = useState("");
  const [filter, setFilter] = useState("");

  const [getCases, setCases] = useState({UfCases:[],cityCases:[]})
  const [getStadeCases, setStateCases] = useState([])

  const [loadingStatus, setloadingStatus] = useState(true)
 

  const citiesByFilter = () => { 
 
    
    let cityCases =!!filter                             
                    ? getCases.cityCases.filter(item => rawText(item.city).includes(rawText(filter)))
                    : getCases.cityCases;

                
      return {cityCases:cityCases,stateCases:getState(cityCases)};
 
  };

 
  function getState(cases){
        let cityIdentifiers = []

        Object.values(cases).map((elem,) => { cityIdentifiers[elem.NM_SIGLA]=elem;})

       return Object.values(cityIdentifiers);
  }


  const statesByFilter = () => { 
      
      /*return !!filter
      ? getCases.UfCases.filter(item => rawText(item.NM_ESTADO).includes(rawText( filter )))
      : getCases.UfCases; */

      return [];
 
  };

   

  
  

  function rawText(text) {
    return lowerCase(deburr(text));
  }


  

  function  getCitiesStates(state) { 
     
       let   cityCases = [];
       let   UfCases = [];


       if(Object.keys(state.cities).length>0){
 
          
          const cityProp = BrUF.UF;

                  
          state.cities.map(city => { 
                    
                  for (let _key in cityProp) { 
                    if(city.ibge_id.substring(0,2) === cityProp[_key].CD_GEOCUF) {
                        let {NM_ESTADO,NM_REGIAO,NM_SIGLA} = cityProp[
                            _key
                        ]; 

                        const {cases: UF_CASES} = state.states.find(
                          ({ stateCode }) => stateCode === NM_SIGLA
                        ); 

                         

                        cityCases.push({...city,NM_ESTADO,NM_REGIAO,NM_SIGLA,UF_CASES}); 
                    }
                }
            }); 


             

              cityCases= cityCases.sort(function(a, b) {
                      return  b.totalcases-a.totalcases;
              });
        }  
     

     
 

         
        

      return {cityCases};
 
        //return {...state,'cities':cityCases}; 
}
 

   

  /*useEffect(() => {
       //dispatch(findCitiesCases()); 
       //dispatch(findStatesCases());
  }, []);*/

  useEffect(() => {
    (async () => {
      const cityCases = await API.cases.getCityCases();
      const stateCases = await API.cases.getStatesCases();
      let cases={
                cities:cityCases.cases,
                states:stateCases
      }

      setCases(getCitiesStates(cases));

      setloadingStatus(false);
      
    }
    )()
  }, [])
 

  return (
    <>
      <Loading spinning={loadingStatus} />
      <Header title={t("header.map")} />

      <Styled.Container>
        <Styled.ContainerMap>
          <MapCities
            setTooltipContent={setContent}
            citiesCases={getCases.cityCases}
          />
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>
        <Grid className="cities-grid">
          <Row style={{ marginBottom: 20 }}>
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
              <Input
                placeholder="Digite aqui" 
                onChange={e => setFilter(e.target.value)}
              />
            </Cell>
          </Row>
           
          <div><p>Estados</p></div>

          <div className="cities-scroller states-scroller">
            {citiesByFilter().stateCases.map((state, index) => (
                 

              <Row key={index} style={{ marginBottom: 10 }}>
                <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
                  <ExpandableBox
                    header={
                      <>
                        <div style={{ marginRight: 20 }}>{state.NM_ESTADO}</div>
                         
                        <div
                          style={{
                            color: "red",
                            marginLeft: "auto",
                            marginRight: 30, 
                            fontSize: '15px',
                            lineHeight: '15px',
                            fontWeight: 'bold'
                          }}
                        >
                          {state.UF_CASES.confirmed.toLocaleString()}
                        </div>
                      </>
                    }
                    headerExpaned={
                      <>
                        <div style={{ marginRight: 20 }}>{state.NM_ESTADO}</div>
                        
                        <div
                          style={{
                            color: "red",
                            marginLeft: "auto",
                            marginRight: 30,
                            fontSize: '15px',
                            lineHeight: '15px',
                            fontWeight: 'bold'
                          }}
                        >
                          {state.UF_CASES.confirmed.toLocaleString()}
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
                              count={state.UF_CASES.confirmed.toLocaleString()}
                            />
 
                          </Cell>
                          <Cell
                            desktopColumns={6}
                            phoneColumns={2}
                            tabletColumns={3}
                          >
                             
                            <CardStats
                              style={{ padding: 0 }}
                              status="death"
                              title={<div>Óbitos</div>}
                              count={state.UF_CASES.deaths.toLocaleString()}
                            />
                          </Cell>
                        </Row>
 
                      </Grid>
                    }
                  />
                </Cell>
              </Row>
            ))}
                  </div> 

         
                  <div><p>Cidades</p></div>
           
           <div className="cities-scroller">
             {citiesByFilter().cityCases.slice(0,15).map((city, index) => (
               <Row key={index} style={{ marginBottom: 10 }}>
                 <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
                   <ExpandableBox
                     header={
                       <>
                         <div style={{ marginRight: 20 }}>{city.city}, {city.NM_SIGLA}</div>
                         <div>{city.stateCode}</div>
                         <div
                           style={{
                             color: "red",
                             marginLeft: "auto",
                             marginRight: 30, 
                             fontSize: '15px',
                             lineHeight: '15px',
                             fontWeight: 'bold'
                           }}
                         >
                           {city.totalcases.toLocaleString()}
                         </div>
                       </>
                     }
                     headerExpaned={
                       <>
                         <div style={{ marginRight: 20 }}>{city.city}, {city.NM_SIGLA}</div>
                         <div>{city.stateCode}</div>
                         <div
                           style={{
                             color: "red",
                             marginLeft: "auto",
                             marginRight: 30,
                             fontSize: '15px',
                             lineHeight: '15px',
                             fontWeight: 'bold'
                           }}
                         >
                           {city.totalcases.toLocaleString()}
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