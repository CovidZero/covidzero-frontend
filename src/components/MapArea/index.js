import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

import { GMAP_KEY } from "~/utils/constants";
import { Circle } from "~/components";
import { Marker } from "~/components";
import { Style } from './styles';
import BrAll from "~assets/data/brazil-map.json";

const suspect = [];
const recovered = [];

const MapArea = ({ lat, lng, citiesCases, setTooltipContent }) => {

    const defaultOptions = {
        zoom: 14,
        southAmericaBounds: {
            west: -103.8386805338,
            south: -43.054008204,
            east: -15.3869376826,
            north: 16.2780526563,
        }
    }

    const mapRef = useRef();
    const mapsRef = useRef();
    const [zoom, setZoom] = useState(defaultOptions.zoom);
    const [bounds, setBounds] = useState(null);
    const [markersHospital, setMarkersHospital] = useState([]);

    function getCityCases() {
        let cityCases = [];

        citiesCases.map(cases => {
            if (cases.ibge_id && cityCases.indexOf(cases.ibge_id) === -1) {
                cityCases.push(cases);
            }
        });

        return cityCases;
    }

    function getCasesCity() {
        let cityCases = [];

        const _getCityCases = getCityCases();
        const cityProp = BrAll.objects.BR_LEVE.geometries;

        _getCityCases.map(city => {
            for (let _key in cityProp) {
                if (city.ibge_id === cityProp[_key].properties.id) {
                    let { id, centroide, NM_MUNICIP: cityName } = cityProp[
                        _key
                    ].properties;

                    centroide = centroideFormat(centroide);
                    cityCases.push({
                        id,
                        cityName,
                        totalCases: city.totalcases,
                        longitude: centroide[0],
                        latitude: centroide[1]
                    });
                }
            }
        });

        return cityCases;
    }

    function centroideFormat(value) {
        return value
            .replace("(", "")
            .replace(")", "")
            .split(",");
    }

    let confirmed = getCasesCity()

    confirmed.map(item => {
        item['type'] = 'confirmed'
    })

    const markers = [...confirmed, ...suspect, ...recovered]

    const points = markers.map((marker, index) => ({
        type: "Feature",
        properties: { cluster: false, category: marker.type, id: index, totalCases: marker.totalCases },
        geometry: {
            type: "Point",
            coordinates: [
                marker.longitude,
                marker.latitude
            ]
        }
    }))

    const createRoute = (map, maps, placeId) => {

        var directionsService = new maps.DirectionsService();
        var directionsRenderer = new maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        let origin = new maps.LatLng(lat, lng);

        directionsService.route(
            {
                origin,
                destination: { placeId },
                travelMode: 'DRIVING'
            },
            function (response, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });


    }

    const _onChange = ({ zoom, bounds }) => {

        getHospitals()

        setZoom(zoom);
        setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
        ])

    }

    const getHospitals = () => {

        const map = mapRef.current;
        const maps = mapsRef.current;

        if (!map || !maps) return
        //let bounds = map.getBounds()

        let pyrmont = new maps.LatLng(lat, lng);
        let places = new maps.places.PlacesService(map);

        var request = {
            location: pyrmont,
            //bounds,
            radius: '5000',
            type: ['hospital'],
        };

        places.nearbySearch(
            request,
            function (results, status, pagination) {
                if (status !== 'OK') return;
                setMarkersHospital(results)
            });

    }

    const _apiIsLoaded = (map, maps) => {
        mapRef.current = map;
        mapsRef.current = maps;
        getHospitals()
        //createRoute(map, maps, 'ChIJC_-xjJ-QyJQR1yqVAokq4GY')

    };

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 150, maxZoom: 20 }
    });

    function _createMapOptions(maps) {
        // next props are exposed at maps
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
        // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
        return {
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_BOTTOM,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControlOptions: {
                position: maps.ControlPosition.TOP_RIGHT
            },
            mapTypeControl: true,
            fullscreenControl: false,
            restriction: {
                latLngBounds: defaultOptions.southAmericaBounds,
                strictBounds: false
            },
        };
    }

    const _onChildMouseEnter = (key, marker) => {
        //const markerId = childProps.marker.get('id');
        //console.log(marker)
        //const index = this.props.markers.findIndex(m => m.get('id') === markerId);
        //if (this.props.onMarkerHover) {
        //    this.props.onMarkerHover(index);
        // }
    }

    return (
        <Style.ContainerMap>
            {lat && lng &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GMAP_KEY, libraries: ['places'] }}
                    defaultCenter={[lat, lng]}
                    defaultZoom={defaultOptions.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => _apiIsLoaded(map, maps)}
                    onChange={_onChange}
                    options={_createMapOptions}
                    onChildMouseEnter={_onChildMouseEnter}
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
                        lat={lat}
                        lng={lng}
                    />

                    {markersHospital.map((hospital, index) => {
                        const { lat, lng } = hospital.geometry.location;
                        return (
                            <Marker key={index} type='hospital'
                                lat={lat()}
                                lng={lng()}
                            />
                        )
                    })}

                </GoogleMapReact>
            }
        </Style.ContainerMap>
    );
}

export default MapArea;