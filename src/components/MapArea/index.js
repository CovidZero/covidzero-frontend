import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

import { GMAP_KEY } from "~/utils/constants";
import { Circle } from "~/components";
import { Style } from './styles';

const confirmed = require('~/assets/data/casos_240320.json');
const suspect = [];
const recovered = [];

const MapArea = (props) => {

    const mapRef = useRef();
    const [zoom, setZoom] = useState(11);
    const [bounds, setBounds] = useState(null);

    confirmed.map(item => {
        item['type'] = 'confirmed'
    })

    const markers = [...confirmed, ...suspect, ...recovered]

    const points = markers.map((marker, index) => ({
        type: "Feature",
        properties: { cluster: false, category: marker.type, id: index },
        geometry: {
            type: "Point",
            coordinates: [
                marker.long,
                marker.lat
            ]
        }
    }))

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 150, maxZoom: 20 }
    });

    return (
        <Style.ContainerMap>
            {props.lat && props.lng &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GMAP_KEY }}
                    defaultCenter={[props.lat, props.lng]}
                    defaultZoom={11}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map }) => {
                        mapRef.current = map;
                    }}
                    onChange={({ zoom, bounds }) => {
                        setZoom(zoom);
                        setBounds([
                            bounds.nw.lng,
                            bounds.se.lat,
                            bounds.se.lng,
                            bounds.nw.lat
                        ])
                    }}
                >

                    {clusters.map(cluster => {
                        const [longitude, latitude] = cluster.geometry.coordinates;
                        const { cluster: isCluster, point_count: pointCount, category, id } = cluster.properties

                        if (isCluster) {
                            return (
                                <Circle id={id} isCluster={isCluster} pointCount={pointCount} type="confirmed"
                                    lat={latitude}
                                    lng={longitude}
                                    onClick={() => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id), 20
                                        );
                                        mapRef.current.setZoom(expansionZoom);
                                        mapRef.current.panTo({ lat: latitude, lng: longitude })
                                    }}
                                />
                            )
                        }

                        return (
                            <Circle id={id} type={category}
                                lat={latitude}
                                lng={longitude}
                            />
                        )

                    })}

                    <Circle type='you'
                        lat={props.lat}
                        lng={props.lng}
                    />
                </GoogleMapReact>
            }
        </Style.ContainerMap>
    );
}

export default MapArea;