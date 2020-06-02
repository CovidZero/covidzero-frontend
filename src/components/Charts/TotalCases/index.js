import React, { useEffect, useState } from 'react';
import { Style } from '../styles';
import moment from 'moment';

import last30DaysService from '../../../services/last30Days';

import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

const TotalCases = (props) => {

    const [responseAPI, setResponseAPI] = useState([]);

    const [lastDayTCases, setLastDayTCases] = useState(null);
    const [lastDayFormatedTCases, setLastDayFormatedTCases] = useState(null);

    const [labelsTCases, setLabelsTCases] = useState([]);
    const [valuesTCases, setValuesTCases] = useState([]);

    const [graphicTCases, setGraphicTCases] = useState(null);

    useEffect(() => {
        getLastDay();
    }, []);

    useEffect(() => {
        if(!lastDayTCases || !lastDayFormatedTCases){
            return
        }

        const maxDays = 20;

        const daysYMD = [];
        const daysMD = [];

        for(let index = 0; index <= maxDays; index++){
            let day = moment(lastDayTCases).subtract(index, 'days');

            daysYMD.push(moment(day).format('YYYY-MM-DD'));

            daysMD.push(moment(day._d).format('l').split('/').reverse().slice(1).join('/'));
        }

        const newValues = daysYMD.map(day => {
            let totalNewCasesBr = responseAPI.reduce((currentTotal, item) => {
                if(item.date == day){
                    return currentTotal + item.totalCases
                }
                return currentTotal

            }, 0);

            return totalNewCasesBr
        });

        setLabelsTCases(daysMD);
        setValuesTCases(newValues);

    }, [lastDayTCases, lastDayFormatedTCases]);

    useEffect(() => {
        if(!labelsTCases.length > 0 || !valuesTCases.length > 0){
            return
        }

        setGraphicTCases(
            {
                labels: labelsTCases.reverse(),
                datasets: [
                {
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#EF5350',
                    borderColor: '#EF5350',
                    borderCapStyle: 'round',
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#EF5350',
                    pointBackgroundColor: '#EF5350',
                    borderWidth: 4,
                    pointBorderWidth: 2,
                    pointHoverRadius: 5,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    data: valuesTCases.reverse(),
                }
                ]
            }
        );
    }, [labelsTCases, valuesTCases]);

    async function getLastDay(){
        const response = await last30DaysService.get().then(response => {
            return response.data;
        });

        setResponseAPI(response);

        const lastDay = response[0];

        const lastDayFormated = moment(lastDay.date).format('l').split('/').reverse().slice(1).join('/');

        setLastDayTCases(lastDay.date);
        setLastDayFormatedTCases(lastDayFormated);

    };
 

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                { graphicTCases && <Line
                    data={graphicTCases}
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
                                    fontSize: 7
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
                />}
                
            </Style.CardBoxStatsDefault>
        </Style.CardBoxStyle>
    );

}

export default TotalCases;