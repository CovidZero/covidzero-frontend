import React from 'react';
import { Style } from './styles';
import Dots from '../Dots'

const Chips = (props) => {
    return (
        <Style.ChipStyle onClick={props.onClick} height={props.height} theme={props.theme}>
            <Style.ColumnDot theme={props.theme}>
                <Dots theme={props.theme} dot={props.type} />
            </Style.ColumnDot>
            {props.text} {props.lastUpdate}
        </Style.ChipStyle>
    );
};

export default Chips;
