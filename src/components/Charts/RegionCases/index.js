import React from 'react';
import { Style } from '../styles';

import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';

const RegionCases = (props) => {

    const data = {
        labels: ['Sul', 'Sudeste', 'Centro-oeste', 'Nordeste', 'Norte'],
        datasets: [
          {
            backgroundColor: [
                '#EF9350',
                '#50EFC9',
                '#6650EF',
                '#CC00FF',
                '#61DD27',
                ],
            borderWidth: 0.6,
            data: [20, 50, 65, 102, 125],
            
          }
        ],
    };

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                <Doughnut
                    data={data}
                    options={{
                    cutoutPercentage: 80,
                        
                        legend:{
                            display: true,
                            labels: {
                                fontFamily: 'Ubuntu',
                                fontColor: 'white',
                                boxWidth: 8,
                                fontSize: 11,
                                padding: 4,
                            },
                            borderWidth: 0,
                            position: 'right',
                        },
                    }}
                />
            </Style.CardBoxStatsDefault>
        </Style.CardBoxStyle>
    );

}

export default RegionCases;