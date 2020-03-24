import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng }) => {
    console.log({ lat, lng})
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {lat && lng &&
                <GoogleMapReact
                    //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={[lat, lng]}
                    defaultZoom={11}
                >
                    <AnyReactComponent
                        lat={lat}
                        lng={lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            }
        </div>
    );
}

export default Map;