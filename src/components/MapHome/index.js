import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker

} from "react-simple-maps";

import BrStates from "~assets/data/br-states.json";

/*const geoUrl =
  "https://gist.githubusercontent.com/ruliana/1ccaaab05ea113b0dff3b22be3b4d637/raw/196c0332d38cb935cfca227d28f7cecfa70b412e/br-states.json";*/

const geoUrl=BrStates;


const MapHome = ({ setTooltipContent }) => {
 

  function isMobile () {
    return window.innerWidth < 950;
  }

  console.log(isMobile());


  return (
    <>
      <ComposableMap  projection="geoMercator" data-tip="" 
        height={isMobile() ? 680 : 550 }
        style={{
              width: "100%", 
            }}
      projectionConfig={{ 
          scale:isMobile() ? 900 : 550,

         
        }}
         >
        <ZoomableGroup center={isMobile() ? [ -54,-13] :[ -54,-21]} disablePanning>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { nome } = geo.properties;
                    setTooltipContent(`${nome}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#3e3d46",
                      stroke: "#282731",
                      strokeWidth:2,
                      outline: "none",
                   },
                    hover: {
                      fill: "#ef7764",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>

               <Marker  coordinates={ [-44.3044,-2.5283]}
                   style={{
                     default: { fill: "#FF5722" },
                     hover: { fill: "#FFFFFF" },
                     pressed: { fill: "#FF5722" },
                   }}
                >
                  <circle
                      cx={0}
                      cy={0}
                      r={6}
                      style={{
                        stroke: "#EF5350",
                        fill: "#EF5350",
                        strokeWidth:30,
                        strokeOpacity: 0.7,
                      }}
                   />
                    <circle
                      cx={0}
                      cy={0}
                      r={7}
                      style={{
                        stroke: "#F5F5F5",
                        fill: "#ffca28",
                        strokeWidth:5,
                        strokeOpacity:1,
                      }}
                   />
      
                    <circle
                      cx={0}
                      cy={0}
                      r={5}
                      style={{
                        stroke: "#EF5350",
                        fill: "#EF5350",
                        strokeWidth:4,
                        strokeOpacity:1,
                      }}
                   />
                </Marker> 


        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapHome);
