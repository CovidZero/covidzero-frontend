import React from "react";
import GoogleMapReact from "google-map-react";

import { GMAP_KEY } from "~/utils/constants";
import { Circle } from "~/components";


const Map = (props) => {
    console.log(props)
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {props.lat && props.lng &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GMAP_KEY }}
                    defaultCenter={[props.lat, props.lng]}
                    defaultZoom={11}
                >
                    <Circle type="you"
                        lat={props.lat}
                        lng={props.lng}
                    />
                </GoogleMapReact>
            }
        </div>
    );
}

export default Map;