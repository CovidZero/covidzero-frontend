import React from 'react';
import { Style } from './styles.js';


const DailyCases = (props) => {
    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>

            </Style.CardBoxStatsDefault>
        </Style.CardBoxStyle>
    );

}

export default DailyCases;