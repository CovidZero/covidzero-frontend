import React from 'react';
import { Style } from '../styles';

import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

const TotalDeaths = (props) => {
 
    const data = {
        labels: ['01/4', '02/4', '03/4', '04/4', '05/4', '06/4', '07/4', '08/4', '09/4', '10/4', '11/4', '12/4', '13/4'],
        datasets: [
          {
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#BDBDBD',
            borderColor: '#BDBDBD',
            borderCapStyle: 'round',
            borderJoinStyle: 'miter',
            pointBorderColor: '#BDBDBD',
            pointBackgroundColor: '#BDBDBD',
            borderWidth: 4,
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [20, 50, 65, 102, 125, 153, 200, 260, 350, 400, 460, 530, 600],
          }
        ]
    };

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                <Line
                    data={data}
                    height={130}
                    options={{
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

export default TotalDeaths;