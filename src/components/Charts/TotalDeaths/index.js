import React, { useEffect, useState } from 'react';
import { Style } from '../styles';
import moment from 'moment';

import last30DaysService from '../../../services/last30Days';

import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

const TotalDeaths = (props) => {
    const [responseAPI, setResponseAPI] = useState([]);

    const [lastDayTDeaths, setLastDayTDeaths] = useState(null);
    const [lastDayFormatedTDeaths, setLastDayFormatedTDeaths] = useState(null);

    const [labelsTDeaths, setLabelsTDeaths] = useState([]);
    const [valuesTDeaths, setValuesTDeaths] = useState([]);

    const [graphicTDeaths, setGraphicTDeaths] = useState(null);

    useEffect(() => {
        getLastDay();
    }, []);

    useEffect(() => {
        
        if(!lastDayTDeaths || !lastDayFormatedTDeaths){
            return
        }

        const maxDays = 20;

        const daysYMD = [];
        const daysMD = [];

        for(let index = 0; index <= maxDays; index++){
            //pega o "i" dia antes do último retornado pela api 
            let day = moment(lastDayTDeaths).subtract(index, 'days');
            //coloca no array o dia no formato da api y-m-d
            daysYMD.push(moment(day).format('YYYY-MM-DD'));
            
            //coloca no array o dia no formato dd/m
            daysMD.push(moment(day._d).format('l').split('/').reverse().slice(1).join('/'));
            
        }

        const newValues = daysYMD.map(day => {
            let totalDeaths = responseAPI.reduce((currentTotal, item) => {
                if(item.date == day){
                    return currentTotal + item.totalDeaths
                }
                return currentTotal

            }, 0);

            return totalDeaths;
        });

        setLabelsTDeaths(daysMD);
        setValuesTDeaths(newValues);

    }, [lastDayTDeaths, lastDayFormatedTDeaths]);

    useEffect(() => {
        if(!labelsTDeaths.length > 0 || !valuesTDeaths.length > 0){
            return
        }


        setGraphicTDeaths(
            {
                labels: labelsTDeaths.reverse(),
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
                    data: valuesTDeaths.reverse(),
                }
                ]
            }
        );
    }, [labelsTDeaths, valuesTDeaths]);

    async function getLastDay(){
        const response = await last30DaysService.get().then(response => {
            return response.data;
        });

        setResponseAPI(response);

        const lastDay = response[0];

        const lastDayFormated = moment(lastDay.date).format('l').split('/').reverse().slice(1).join('/');

        setLastDayTDeaths(lastDay.date);
        setLastDayFormatedTDeaths(lastDayFormated);
        

    };
 

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                {graphicTDeaths && <Line
                    data={graphicTDeaths}
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

export default TotalDeaths;