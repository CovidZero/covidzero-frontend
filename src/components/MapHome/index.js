import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker

} from "react-simple-maps";

import BrStates from "~assets/data/br-states.json";
import BrAll from "~assets/data/brazil-map.json";

import CasesBrazil from "~assets/data/casos_240320.json";



/*const geoUrl =
  "https://gist.githubusercontent.com/ruliana/1ccaaab05ea113b0dff3b22be3b4d637/raw/196c0332d38cb935cfca227d28f7cecfa70b412e/br-states.json";*/

const geoUrl = BrStates;



const MapHome = ({ setTooltipContent }) => {


  let gradationColors = [
    { color: '#2fe441', range: [1, 10], label: '1 a 10' },
    { color: '#ffca28', range: [10, 24], label: '10 a 24' },
    { color: '#ef5350', range: [25, 49], label: '25 a 49' },
    { color: '#ef5350', range: [50, 10000], label: 'Acima de 50' },
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
      size *= 1
    } else if (isMobile()) {
      size *= 2
    }


    return size
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
          scale: isMobile() ? 900 : 750,


        }}
      >
        <ZoomableGroup center={isMobile() ? [-54, -13] : [-54, -15]} disablePanning>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { nome } = geo.properties;
                    const ret = CasesBrazil.find(({ uf_nome }) => uf_nome === nome);

                    setTooltipContent(`
                                          <strong>Estado:</strong> ${nome} <br>
                                          <strong>Casos:</strong> ${ret.totalCases} <br>
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

            CasesBrazil.map((ret, index) => {

              return (
                <Marker
                  key={ret.long + ret.lat}
                  coordinates={[ret.long, ret.lat]}
                  style={{
                    default: { fill: "#FF5722" },
                    hover: { fill: "#FFFFFF" },
                    pressed: { fill: "#C9C9C9" },
                  }}
                >
                  <circle
                    cx={0}
                    cy={0}
                    r={getMarkerSize(ret.totalCases)}
                    style={{
                      stroke: getColor(ret.totalCases),
                      fill: getColor(ret.totalCases),
                      strokeWidth: 10,
                      strokeOpacity: 0.5,
                    }}
                    onMouseEnter={() => {
                      setTooltipContent(`
                                          <strong>Estado:</strong> ${ret.uf_nome} <br>
                                          <strong>Casos:</strong> ${ret.totalCases} <br>
                                        `);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  />

                  <circle
                    cx={0}
                    cy={0}
                    r={getMarkerSize(ret.totalCases)}
                    style={{
                      stroke: "#F5F5F5",
                      fill: "#F5F5F5",
                      strokeWidth: 3,
                    }}
                  />

                  <circle
                    cx={0}
                    cy={0}
                    r={getMarkerSize(ret.totalCases)}
                    style={{
                      stroke: getColor(ret.totalCases),
                      fill: getColor(ret.totalCases),
                      strokeWidth: 2,
                    }}
                  />

                </Marker>
              )
            }
            )
          }

        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapHome);
