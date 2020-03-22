import React from 'react';
import { Style } from './styles';
import Dots from '../Dots'

const Chips = (props) => {
    return (
        <Style.ChipStyle>
            <Style.ColumnDot>
                <Dots dot={props.type} />
            </Style.ColumnDot>
            {props.text}
        </Style.ChipStyle>
    );
};

export default Chips;
