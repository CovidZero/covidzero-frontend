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

    const apiIsLoaded = (map, maps) => {
        mapRef.current = map;

        var directionsService = new maps.DirectionsService();
        var directionsRenderer = new maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        directionsService.route(
            {
                origin: { query: 'americana, sp - brazil' },
                destination: { query: 'são paulo, sp - brazil' },
                travelMode: 'DRIVING'
            },
            function (response, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });

    };

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 150, maxZoom: 20 }
    });

    function createMapOptions(maps) {
        // next props are exposed at maps
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
        // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
        return {
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_CENTER,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControlOptions: {
                position: maps.ControlPosition.TOP_RIGHT
            },
            mapTypeControl: true
        };
    }


    return (
        <Style.ContainerMap>
            {props.lat && props.lng &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GMAP_KEY }}
                    defaultCenter={[props.lat, props.lng]}
                    defaultZoom={11}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
                    onChange={({ zoom, bounds }) => {
                        setZoom(zoom);
                        setBounds([
                            bounds.nw.lng,
                            bounds.se.lat,
                            bounds.se.lng,
                            bounds.nw.lat
                        ])
                    }}
                    options={createMapOptions}
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