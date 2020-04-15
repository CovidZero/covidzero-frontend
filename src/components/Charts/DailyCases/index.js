import React, { useEffect, useState } from 'react';
import { Style } from '../styles';
import moment from 'moment';

import api from '../api';

import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js';

const DailyCases = (props) => {
   
    const [responseAPI, setResponseAPI] = useState([]);

    const [lastDay, setLastDay] = useState(null);
    const [lastDayFormated, setLastDayFormated] = useState(null);

    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);

    const [graphic, setGraphic] = useState(null);


    useEffect(() => {
        getLastDay();
    }, []);

    useEffect(() => {
        
        if(!lastDay || !lastDayFormated){
            return
        }

        const maxDays = 20;

        const daysYMD = [];
        const daysMD = [];

        for(let index = 0; index <= maxDays; index++){
            //pega o "i" dia antes do último retornado pela api 
            let day = moment(lastDay).subtract(index, 'days');

            //coloca no array o dia no formato da api y-m-d
            daysYMD.push(moment(day).format('YYYY-MM-DD'));

            //coloca no array o dia no formato dd/m
            daysMD.push(moment(day._d).format('l').split('/').reverse().slice(1).join('/'));
        }

        const newValues = daysYMD.map(day => {
            let totalNewCases = responseAPI.reduce((currentTotal, item) => {
                if(item.date == day){
                    return currentTotal + item.newcases
                }
                return currentTotal

            }, 0);

            return totalNewCases;
        });

        setLabels(daysMD);
        setValues(newValues);

    }, [lastDay, lastDayFormated]);

    useEffect(() => {
        if(!labels.length > 0 || !values.length > 0){
            return
        }


        setGraphic(
            {
                labels: labels.reverse(),
                datasets: [
                    {
                    backgroundColor: '#EF5350',
                    hoverbackgroundColor: '#EF5350',
                    data: values.reverse(),
                    }
                ]
            }
        );
    }, [labels, values]);

    async function getLastDay(){
        const response = await api.get(`https://api.covidzero.com.br/data_api/v1/cases/datasus`);

        const resultsData = response.data.sus_list;

        setResponseAPI(resultsData);

        const lastItem = resultsData.pop();

        const lastItemFormated = moment(lastItem.date).format('l').split('/').reverse().slice(1).join('/');

        setLastDay(lastItem.date);
        setLastDayFormated(lastItemFormated);
        

    };
    

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                { graphic && <Bar
                    data={graphic}
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

export default DailyCases;