import React, { memo, useState, useRef, useEffect, useContext, createRef } from "react";
import GoogleMapReact from "google-map-react";
import ReactTooltip from "react-tooltip";
import { ThemeContext } from 'styled-components';
import _ from "lodash";

import { GMAP_KEY } from "~/utils/constants";
import GoogleMapsStyle from "~assets/data/google-maps-style.json";
import GeoJsonStates from "~assets/data/brazil-geojson-states.json";
import * as Styled from "./styles.js";

const MapBrazil = ({ setStateCases, setTooltipContent }) => {

    const defaultOptions = {
        zoom: isMobile() ? 3 : 4,
        /*limites mapa*/
        southAmericaBounds: {
            west: -83.8386805338,
            south: -43.054008204,
            east: -25.3869376826,
            north: 16.2780526563,
        },
        /*centro Brasil*/
        latitude: -14.2350044,
        longitude: -51.9252815
    }

    const mapRef = useRef();
    const mapsRef = useRef();
    const statesRef = useRef([])

    const [apiIsLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        if (apiIsLoaded && _.size(setStateCases)) {
            const map = mapRef.current

            if (map) {
                map.data.setStyle(function (feature) {

                    const state = _.find(setStateCases, state => {
                        return state.stateCode == feature.getProperty('sigla')
                    })
                    let { cases: { confirmed, deaths } } = state

                    var color = getColor(confirmed);
                    return ({
                        fillColor: color,
                        strokeColor: "#999",
                        strokeWeight: 1,
                    });
                });
            }


        }
    }, [apiIsLoaded, setStateCases]);

    const _apiIsLoaded = (map, maps) => {
        mapRef.current = map;
        mapsRef.current = maps;

        map.data.addGeoJson(GeoJsonStates, { idPropertyName: 'sigla' });

        map.data.setStyle(function (feature) {
            return ({
                strokeWeight: 1,
            });
        });

        map.data.addListener('mouseover', function (event) {
            map.data.revertStyle();
            map.data.overrideStyle(event.feature, { fillColor: '#fff' });
            ReactTooltip.show(statesRef.current[event.feature.getProperty('sigla')])
        });

        map.data.addListener('mouseout', function (event) {
            ReactTooltip.hide()
            map.data.revertStyle();
        });

        setApiLoaded(true)

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
                position: isMobile() ? maps.ControlPosition.TOP_RIGHT : maps.ControlPosition.LEFT_CENTER,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false,
            fullscreenControl: false,
            restriction: {
                latLngBounds: defaultOptions.southAmericaBounds,
                strictBounds: false
            },
            minZoom: 3,
            maxZoom: 16,
            styles: GoogleMapsStyle,
            draggableCursor: 'default',
            gestureHandling: 'greedy'
        };
    }

    /* functions MapBrazil.js */
    let gradationColors = [
        { color: "#F4C2C2", range: [1, 300], label: "1 a 300" },
        { color: "#FF5C5C", range: [301, 600], label: "301 a 600" },
        { color: "#FF0800", range: [601, 1200], label: "601 a 1200" },
        { color: "#CD5C5C", range: [1201, 2400], label: "1201 a 2400" },
        { color: "#D73B3E", range: [2401, 4800], label: "2401 a 4800" },
        { color: "#CC0000", range: [4801, 9600], label: "4801 a 9600" },
        { color: "#B31B1B", range: [9601, 27000], label: "9601 a 27000" },
        { color: "#800000", range: [27001, 54000], label: "27001 a 54000" },
        { color: "#3C1414", range: [54001, 100000], label: "54001 a 100000" },
        { color: "#321414", range: [100001, 1000000], label: "Acima de 100000" }
    ];

    function getColor(numberCases) {
        let color = null;

        gradationColors.forEach(item => {
            const min = item.range[0];
            const max = item.range[1];

            if (numberCases > min - 1 && numberCases < max + 1) {
                color = item.color;
            }
        });

        if (!color) {
            color = "#efefef";
        }

        return color;
    }

    function isMobile() {
        return window.innerWidth < 950;
    }
    /* */

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: GMAP_KEY, libraries: ['places'] }}
            defaultCenter={[defaultOptions.latitude, defaultOptions.longitude]}
            defaultZoom={defaultOptions.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => _apiIsLoaded(map, maps)}
            options={_createMapOptions}
        >

            {
                setStateCases.map((ret, index) => {
                    const { latitude, longitude, stateName, stateCode, cases: { confirmed, deaths } } = ret;
                    return (
                        <Styled.ContainerMarker
                            lat={latitude}
                            lng={longitude}
                            id={stateCode}
                            key={index}
                            ref={el => (statesRef.current[stateCode] = el)}
                            data-tip={`
                                          <strong>Estado:</strong> ${stateName} <br>
                                          <strong>Casos:</strong> ${confirmed.toLocaleString()} <br>
                                          <strong>Óbitos:</strong> ${deaths.toLocaleString()} <br>
                        `}
                        >
                        </Styled.ContainerMarker>

                    )
                })}


        </GoogleMapReact>
    );
}

export default memo(MapBrazil);