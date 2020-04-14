import React from 'react';
import { Style } from './styles';
import Dots from '../Dots'

const Circle = (props) => {
    return (
        <Style.CircleStyle onClick={props.onClick} width={props.width} height={props.height} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} type={props.type}>
            {props.isCluster
                ? <Style.CirclePointsText type={props.type}>{props.pointCount}</Style.CirclePointsText>
                : (
                    props.type === 'you' &&
                    <Dots dot={props.type} />
                )
            }
        </Style.CircleStyle>
    );
};

export default Circle;