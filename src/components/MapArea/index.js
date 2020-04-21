import React, { memo, useState, useRef, useEffect, useContext } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import ReactTooltip from "react-tooltip";
import ReactDOM from 'react-dom';
import { ThemeContext } from 'styled-components';

import { GMAP_KEY } from "~/utils/constants";
import { Circle } from "~/components";
import { Marker } from "~/components";
import BrAll from "~assets/data/brazil-map.json";
import * as Styled from "./styles.js";
import { Chips } from "~/components";

const suspect = [];
const recovered = [];

const MapArea = ({ userLat, userLng, initialZoom, citiesCases, error }) => {

    const themeContext = useContext(ThemeContext);

    const defaultOptions = {
				zoom: initialZoom,
				gestureHandling: 'greedy',
        /*limites mapa*/
        southAmericaBounds: {
            west: -103.8386805338,
            south: -43.054008204,
            east: -15.3869376826,
            north: 16.2780526563,
        },
    }

    const mapRef = useRef();
    const mapsRef = useRef();
    const [zoom, setZoom] = useState(defaultOptions.zoom);
    const [bounds, setBounds] = useState(null);
    const [markersHospital, setMarkersHospital] = useState([]);
    const [circleSize, setCircleSize] = useState(80);

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

        let origin = new maps.LatLng(userLat, userLng);

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

        let minPixelSize = 80;
        let maxPixelSize = 350;

        let relativePixelSize = Math.round(Math.pow(zoom, 2.1));

        if (relativePixelSize > maxPixelSize)
            relativePixelSize = maxPixelSize;

        if (relativePixelSize < minPixelSize)
            relativePixelSize = minPixelSize;

        setCircleSize(relativePixelSize)

    }, [bounds, zoom]);

    const isOpen = async (placeId) => {

        const maps = mapsRef.current
        const map = mapRef.current

        let request = {
            placeId,
        }

        let places = new maps.places.PlacesService(map);

        let isOpen = await places.getDetails(request, (place, status) => {
            if (status === maps.places.PlacesServiceStatus.OK) {
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

    const _youClick = () => {
        const map = mapRef.current
        map.setZoom(14);
        map.panTo({ lat: userLat, lng: userLng })
    }

    const _apiIsLoaded = (map, maps) => {
        mapRef.current = map;
        mapsRef.current = maps;
        getHospitals()
        //createRoute(map, maps, 'ChIJC_-xjJ-QyJQR1yqVAokq4GY')

        /* */
        const legendsDiv = document.createElement('div');
        ReactDOM.render(
            <Styled.ContainerChips>
                <Chips height={10} onClick={_youClick} theme={themeContext} text="Você" type="you" />
                <Chips height={10} theme={themeContext} text="Confirmados" type="confirmed" />
            </Styled.ContainerChips>
            , legendsDiv);
        map.controls[maps.ControlPosition.BOTTOM_CENTER].push(legendsDiv);
        /**/

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
            defaultCenter={[userLat, userLng]}
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
                        <Circle key={cluster.id} width={circleSize} height={circleSize} isCluster={isCluster} pointCount={pointCount} type="confirmed"
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
                        <Circle width={circleSize} height={circleSize} type={category} />
                        <ReactTooltip html={true} />
                    </Styled.ContainerMarker>

                )

            })}

            {userLat && userLng && !error &&
                <Styled.ContainerMarker
                    lat={userLat}
                    lng={userLng}
                    key={-1}
                    data-tip='Você'
                >
                    <Circle type='you' />
                    <ReactTooltip />
                </Styled.ContainerMarker>
            }

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

export default memo(MapArea);