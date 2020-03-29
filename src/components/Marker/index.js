import React from 'react';
import { Style } from './styles';

import { ReactComponent as HospitalIcon } from "~assets/icons/hospital-marker.svg";

const Icon = ({ type }) => {
    switch (type) {
        case 'hospital':
            return <HospitalIcon />;
        default:
            return null;
    }
}

const Marker = (props) => {
    return (
        <Style.MarkerStyle onClick={props.onClick} type={props.type}>
            <Icon type={props.type} />
        </Style.MarkerStyle>
    );
};

export default Marker;
