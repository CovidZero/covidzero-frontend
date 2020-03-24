import React from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid"; 
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://gist.githubusercontent.com/ruliana/1ccaaab05ea113b0dff3b22be3b4d637/raw/196c0332d38cb935cfca227d28f7cecfa70b412e/br-states.json";

const MapHome = () => {

  return  (
             
   <div>
        <ComposableMap
        projection="mercator"
        projectionConfig={{ 
          scale:600,
          rotation: [-8,0,0]
        }}
        width={450}
        height={450}
        style={{
          width: "100%",
         
       }}>
          <ZoomableGroup center={[ -54,-13]} disablePanning>
          <Geographies geography={geoUrl}>          
            {(geographies, projection) => geographies.map(geography => (
              <Geography
                key={ geography.id }
                geography={ geography }
                projection={ projection }
                style={{
        default: {
            fill: "#3e3d46",
            stroke: "#282731",
            strokeWidth:2,
            outline: "none",
         },
         hover: {
            fill: "#CFD8DC",
            stroke: "#607D8B",
            strokeWidth: 1,
            outline: "none",
         },
         pressed: {
            fill: "#FF5722",
            stroke: "#607D8B",
            strokeWidth: 1,
            outline: "none",
         }
      }}
                />
            ))}
          </Geographies>

          <Markers>
                <Marker
                   marker={{coordinates: [-44.3044,-2.5283]}}
                   style={{
                     default: { fill: "#FF5722" },
                     hover: { fill: "#FFFFFF" },
                     pressed: { fill: "#FF5722" },
                   }}
                >
  
                  <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#FFCA28",
                        fill: "#FFCA28",
                        strokeWidth:25,
                        strokeOpacity: 0.4,
                      }}
                   />
                    <circle
                      cx={0}
                      cy={0}
                      r={4}
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
                      r={3}
                      style={{
                        stroke: "#ffca28",
                        fill: "#ffca28",
                        strokeWidth:4,
                        strokeOpacity:1,
                      }}
                   />
                </Marker>

                <Marker
                   marker={{coordinates: [-47.9292, -15.7801]}}
                   style={{
                     default: { fill: "#FF5722" },
                     hover: { fill: "#FFFFFF" },
                     pressed: { fill: "#FF5722" },
                   }}
                >
  
                   <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#ef5350",
                        fill: "#ef5350",
                        strokeWidth:25,
                        strokeOpacity: 0.4,
                      }}
                   />
                    <circle
                      cx={0}
                      cy={0}
                      r={4}
                      style={{
                        stroke: "#F5F5F5",
                        fill: "#ef5350",
                        strokeWidth:5,
                        strokeOpacity:1,
                      }}
                   />
      
                    <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#ef5350",
                        fill: "#ef5350",
                        strokeWidth:4,
                        strokeOpacity:1,
                      }}
                   />
                </Marker>  
                
                <Marker
                   marker={{coordinates: [-46.6388,-23.5489]}}
                   style={{
                     default: { fill: "#FF5722" },
                     hover: { fill: "#FFFFFF" },
                     pressed: { fill: "#FF5722" },
                   }}
                >
  
                   <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#ef5350",
                        fill: "#ef5350",
                        strokeWidth:25,
                        strokeOpacity: 0.4,
                      }}
                   />
                    <circle
                      cx={0}
                      cy={0}
                      r={4}
                      style={{
                        stroke: "#F5F5F5",
                        fill: "#ef5350",
                        strokeWidth:5,
                        strokeOpacity:1,
                      }}
                   />
      
                    <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#ef5350",
                        fill: "#ef5350",
                        strokeWidth:4,
                        strokeOpacity:1,
                      }}
                   />
                </Marker>  
<Marker
                   marker={{coordinates: [-43.2096,-22.9035]}}
                   style={{
                     default: { fill: "#FF5722" },
                     hover: { fill: "#FFFFFF" },
                     pressed: { fill: "#FF5722" },
                   }}
                >
  
                   <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#ef5350",
                        fill: "#ef5350",
                        strokeWidth:25,
                        strokeOpacity: 0.4,
                      }}
                   />
                    <circle
                      cx={0}
                      cy={0}
                      r={4}
                      style={{
                        stroke: "#F5F5F5",
                        fill: "#ef5350",
                        strokeWidth:5,
                        strokeOpacity:1,
                      }}
                   />
      
                    <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#ef5350",
                        fill: "#ef5350",
                        strokeWidth:4,
                        strokeOpacity:1,
                      }}
                   />
                </Marker> 
<Marker
                   marker={{coordinates: [-51.2287,-30.0277]}}
                   style={{
                     default: { fill: "#FF5722" },
                     hover: { fill: "#FFFFFF" },
                     pressed: { fill: "#FF5722" },
                   }}
                >
  
                   <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#2fe441",
                        fill: "#2fe441",
                        strokeWidth:25,
                        strokeOpacity: 0.4,
                      }}
                   />
                    <circle
                      cx={0}
                      cy={0}
                      r={4}
                      style={{
                        stroke: "#F5F5F5",
                        fill: "#2fe441",
                        strokeWidth:5,
                        strokeOpacity:1,
                      }}
                   />
      
                    <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#2fe441",
                        fill: "#2fe441",
                        strokeWidth:4,
                        strokeOpacity:1,
                      }}
                   />
                </Marker>

                <Marker
                   marker={{coordinates: [-60.0261,-3.10719]}}
                   style={{
                     default: { fill: "#FF5722" },
                     hover: { fill: "#FFFFFF" },
                     pressed: { fill: "#FF5722" },
                   }}
                >
  
                   <circle
                      cx={0}
                      cy={0}
                      r={3}
                      style={{
                        stroke: "#ffca28",
                        fill: "#ffca28",
                        strokeWidth:25,
                        strokeOpacity: 0.4,
                      }}
                   />
                    <circle
                      cx={0}
                      cy={0}
                      r={4}
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
                      r={3}
                      style={{
                        stroke: "#ffca28",
                        fill: "#ffca28",
                        strokeWidth:4,
                        strokeOpacity:1,
                      }}
                   />
                </Marker>                                  
            </Markers>

          </ZoomableGroup>
        </ComposableMap>
      </div>
         
      );
  
};

export default MapHome;
