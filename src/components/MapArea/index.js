import React, { useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import ReactTooltip from "react-tooltip";

import { GMAP_KEY } from "~/utils/constants";
import { Circle } from "~/components";
import { Marker } from "~/components";
import BrAll from "~assets/data/brazil-map.json";
import * as Styled from "./styles.js";

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

    const getCityCases = () => {
        let cityCases = [];

        citiesCases.map(cases => {
            if (cases.ibge_id && cityCases.indexOf(cases.ibge_id) === -1) {
                cityCases.push(cases);
            }
        });

        return cityCases;
    }

    const getCasesCity = () => {
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

    const centroideFormat = value => {
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
        properties: { cluster: false, category: marker.type, id: index, totalCases: marker.totalCases, cityName: marker.cityName },
        geometry: {
            type: "Point",
            coordinates: [
                marker.longitude,
                marker.latitude
            ]
        }
    }))

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 150, maxZoom: 20 }
    });

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

    const getHospitals = () => {

        const map = mapRef.current;
        const maps = mapsRef.current;

        if (!map || !maps) return
        //let bounds = map.getBounds()

        let pyrmont = new maps.LatLng(map.getCenter().lat(), map.getCenter().lng());
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

    useEffect(() => {
        if (zoom <= 10) {
            setMarkersHospital([])
        } else {
            getHospitals();
        }
    }, [bounds, zoom]);

    const isOpen = async (placeId) => {

        const maps = mapsRef.current
        const map = mapRef.current

        let request = {
            placeId,
        }

        let places = new maps.places.PlacesService(map);

        let isOpen = await places.getDetails(request, (place, status) => {
            if (status == maps.places.PlacesServiceStatus.OK) {
                return (place.opening_hours && place.opening_hours.isOpen())
            } else {
                return false
            }
        });

        return isOpen

    }

    const _onChange = ({ zoom, bounds }) => {
        setZoom(zoom);
        setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
        ])
    }

    const _apiIsLoaded = (map, maps) => {
        mapRef.current = map;
        mapsRef.current = maps;
        getHospitals()
        //createRoute(map, maps, 'ChIJC_-xjJ-QyJQR1yqVAokq4GY')

    };

    const _createMapOptions = (maps) => {
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
            minZoom: 4,
            maxZoom: 16
        };
    }

    const _onChildClick = () => {

    }

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: GMAP_KEY, libraries: ['places'] }}
            defaultCenter={[lat, lng]}
            defaultZoom={defaultOptions.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => _apiIsLoaded(map, maps)}
            onChange={_onChange}
            options={_createMapOptions}
            onChildClick={_onChildClick}
        >

            {clusters.map(cluster => {
                const [longitude, latitude] = cluster.geometry.coordinates;
                const { cluster: isCluster, point_count: pointCount, category, id, cityName, totalCases } = cluster.properties

                if (isCluster) {
                    return (
                        <Circle key={cluster.id} isCluster={isCluster} pointCount={pointCount} type="confirmed"
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

                    <Styled.ContainerMarker
                        lat={latitude}
                        lng={longitude}
                        key={id}
                        data-tip={`
                        <strong>Cidade:</strong> ${cityName} <br>
                        <strong>Casos:</strong> ${totalCases} <br>
                        `}
                    >
                        <Circle type={category} />
                        <ReactTooltip html={true} />
                    </Styled.ContainerMarker>

                )

            })}

            <Styled.ContainerMarker
                lat={lat}
                lng={lng}
                key={-1}
                data-tip='Você'
            >
                <Circle type='you' />
                <ReactTooltip />
            </Styled.ContainerMarker>

            {markersHospital.map((hospital) => {
                const { lat, lng } = hospital.geometry.location;
                return (
                    <Styled.ContainerMarker
                        lat={lat()}
                        lng={lng()}
                        key={hospital.id}
                        data-tip={`
                        ${hospital.name} </br>
                        ${hospital.opening_hours && hospital.opening_hours.open_now ? "Aberto" : ''} <!-- deprecated -->
                        `}
                    >
                        <Marker type='hospital' />
                        <ReactTooltip html={true} />
                    </Styled.ContainerMarker>

                )
            })}

        </GoogleMapReact>
    );
}

export default MapArea;