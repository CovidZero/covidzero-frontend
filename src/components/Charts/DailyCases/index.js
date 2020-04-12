import React from 'react';
import { Style } from '../styles';

import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js';

const DailyCases = (props) => {
 
    const data = {
        labels: ['01/4', '02/4', '03/4', '04/4', '05/4', '06/4', '07/4', '08/4', '09/4', '10/4'],
        datasets: [
          {
            backgroundColor: '#EF5350',
            hoverbackgroundColor: '#EF5350',
            data: [65, 59, 80, 70, 59, 80, 90, 70, 100, 65, 65, 65],
          }
        ]
    };

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                <Bar
                    data={data}
                    height={100}
                    options={{
                        maintainAspectRatio: false,
                        legend:{
                            display: false,
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:false
                                },
                                ticks:{
                                    fontFamily: 'Ubuntu',
                                    fontColor: '#BDBDBD',
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                },
                                ticks:{
                                    display: false
                                }, 
                            }],
                        },
                        
                    }}
                />
            </Style.CardBoxStatsDefault>
        </Style.CardBoxStyle>
    );

}

export default DailyCases;