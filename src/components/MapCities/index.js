import React, { memo,useState,useEffect} from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker

} from "react-simple-maps";

import { MapControl } from './styles';

import BrStates from "~assets/data/br-states.json";
import BrAll    from "~assets/data/brazil-map.json";
 
 

const MapCities = ({ setTooltipContent,setStateCases,setCityCases }) => {

  const [position, setPosition] = useState({ coordinates:isMobile() ? [-54, -13] : [-54, -15], zoom: 1 });


  const geoUrl = BrStates;


  let gradationColors = [
    { color: '#EE706E', range: [1, 10], label: '1 a 10' },
    { color: '#EE706E', range: [10, 24], label: '10 a 24' },
    { color: '#EE706E', range: [25, 49], label: '25 a 49' },
    { color: '#EE706E', range: [50, 10000], label: 'Acima de 50' },
  ];

  
  let markerSize = [
    { size: 1, range: [1, 10] },
    { size: 2, range: [10, 24] },
    { size: 3, range: [25, 49] },
    { size: 4, range: [50, 10000] },
  ];

  let pointsMarker = [];


  function isMobile() {
    return window.innerWidth < 950;
  }


  function getColor(numberCases) {

    let color = null

    gradationColors.forEach((item, ) => {
      const min = item.range[0]
      const max = item.range[1]

          if (numberCases > (min - 1) && numberCases < (max + 1)) {
            color = item.color
          }
    });

    if (!color) {
      color = '#efefef'
    }

    return color
  }


  function getMarkerSize(numberCases) {
    let size = 0

    markerSize.forEach((item, ) => {
      const min = item.range[0]
      const max = item.range[1]

            if (numberCases > (min - 1) && numberCases < (max + 1)) {
              size = item.size
              }
     });

    if (!isMobile()) {
      size *=0.01
    } else if (isMobile()) {
      size *= 0.01
    }


    return size
  }

  
 function getCityCases() {
    let cityCases = []

        setCityCases.map((cases,) => {
              if (cases.ibge_id && cityCases.indexOf(cases.ibge_id) === -1) {
                   cityCases.push(cases.ibge_id)
              }
        })

      return cityCases
  }



 function getCasesCity() {
          let cityCases = []

          const _getCityCases = getCityCases();
          const cityProp      = BrAll.objects.BR_LEVE.geometries;
       

          _getCityCases.map((idCity) => { 

              for (let _key in cityProp) {

                      if (idCity ===cityProp[_key].properties.id) {
                            let { id, centroide, NM_MUNICIP: cityName } = cityProp[_key].properties
                          
                             centroide = centroideFormat(centroide)
                             cityCases.push({ id, cityName,longitude:centroide[0],latitude:centroide[1] })
                      }
              }

          })

           return cityCases;
  }



 function  centroideFormat(value) {
       return value.replace('(', '').replace(')', '').split(',')
 }
 




   function handleZoomIn() {
      if (position.zoom >= 4) return;
         setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
    }

   function handleZoomOut() {
      if (position.zoom <= 1) return;
         setPosition(pos => ({ ...pos, zoom: pos.zoom /1.5 }));
    }
    
  
  return (
    <>
      <ComposableMap projection="geoMercator" data-tip=""
        height={isMobile() ? 680 : 550}
        style={{
          width: "100%",
          maxWidth: "1200px",
        }}
        projectionConfig={{
          scale: isMobile() ? 900 : 790,


        }}
      >
        


        <ZoomableGroup 
           zoom={position.zoom}
           center={position.coordinates} 
          >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { nome } = geo.properties;
                    const ret = setStateCases.find(({ stateName }) => stateName === nome);

                    setTooltipContent(`
                                          <strong>Estado:</strong> ${nome} <br>
                                          <strong>Casos:</strong> ${ret.cases.confirmed} <br>
                                          <strong>Óbitos:</strong> ${ret.cases.deaths} <br>
                                        `);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#3e3d46",
                      stroke: "#282731",
                      strokeWidth: 2,
                      outline: "none",
                    },
                    hover: {
                      fill: "#C9C9C9",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#C9C9C9",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>

          {
 
             getCasesCity().map((ret, index) => {

              return (
                <Marker
                  key={ret.longitude + ret.latitude}
                  coordinates={[ret.longitude, ret.latitude]}
                  style={{
                    default: { fill: "#FF5722" },
                    hover: { fill: "#FFFFFF" },
                    pressed: { fill: "#C9C9C9" },
                  }}
                >
                  <circle
                    cx={0}
                    cy={0}
                    r={getMarkerSize(50)}
                    style={{
                      stroke: getColor(50),
                      fill: getColor(50),
                      strokeWidth: 10,
                    }}
                     onMouseEnter={() => {
                      setTooltipContent(`
                                          <strong>Município:</strong> ${ret.cityName} <br>
                                           
                                        `);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}

                  />

                 </Marker>
              )
            }
            )
          }

        </ZoomableGroup>
      </ComposableMap>


     <MapControl>
            <button onClick={handleZoomIn}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button onClick={handleZoomOut}>
              <svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
      </MapControl>

    </>
  );
};

export default memo(MapCities);
