import React from 'react';
import { Style } from './styles';
import Dots from '../Dots'

const Circle = (props) => {
    return (
        <Style.CircleStyle type={props.type}>
            <Dots dot={props.type} />
        </Style.CircleStyle>
    );
};

export default Circle;
