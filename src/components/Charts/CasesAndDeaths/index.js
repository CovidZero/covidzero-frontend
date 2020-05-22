import React, { useEffect, useState } from 'react';
import { Style } from '../styles';
import moment from 'moment';

import api from '../api';

import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

const CasesAndDeaths = (props) => {
    const [responseAPI, setResponseAPI] = useState([]);

    const [lastDayCasesAndDeaths, setLastDayCasesAndDeaths] = useState(null);
    const [lastDayFormatedCasesAndDeaths, setLastDayFormatedCasesAndDeaths] = useState(null);

    const [labelsCasesAndDeaths, setLabelsCasesAndDeaths] = useState([]);
    const [valuesDeaths, setValuesDeaths] = useState([]);
    const [valuesCases, setValuesCases] = useState([]);

    const [graphicCasesAndDeaths, setGraphicCasesAndDeaths] = useState(null);

    useEffect(() => {
        getLastDay();
    }, []);

    useEffect(() => {
        
        if(!lastDayCasesAndDeaths || !lastDayFormatedCasesAndDeaths){
            return
        }

        const maxDays = 20;

        const daysYMD = [];
        const daysMD = [];

        for(let index = 0; index <= maxDays; index++){
            //pega o "i" dia antes do último retornado pela api 
            let day = moment(lastDayCasesAndDeaths).subtract(index, 'days');
            //coloca no array o dia no formato da api y-m-d
            daysYMD.push(moment(day).format('YYYY-MM-DD'));
            //coloca no array o dia no formato dd/m
            daysMD.push(moment(day._d).format('l').split('/').reverse().slice(1).join('/'));
        }

        const newValuesDeath = daysYMD.map(day => {
            let totalDeaths = responseAPI.reduce((currentTotal, item) => {
                if(item.date == day){
                    return currentTotal + item.totaldeaths
                }
                return currentTotal
            }, 0);
            return totalDeaths;
        });

        const newValuesCases = daysYMD.map(day => {
          let totalCases = responseAPI.reduce((currentTotal, item) => {
              if(item.date == day){
                  return currentTotal + item.totalcases
              }
              return currentTotal
          }, 0);
          
          return totalCases;
      });
        
        setLabelsCasesAndDeaths(daysMD);
        setValuesDeaths(newValuesDeath);
        setValuesCases(newValuesCases);

    }, [lastDayCasesAndDeaths, lastDayFormatedCasesAndDeaths]);

    useEffect(() => {
        if(!labelsCasesAndDeaths.length > 0 || !valuesDeaths.length > 0 || !valuesCases.length > 0){
            return
        }

        setGraphicCasesAndDeaths(
            {
              labels: labelsCasesAndDeaths.reverse(),
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
                  data: valuesDeaths.reverse(),
                },
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
                  data: valuesCases.reverse(),
                }
              ]
            }
        );
    }, [labelsCasesAndDeaths, valuesDeaths, valuesCases]);

    async function getLastDay(){
        const response = await api.get(`https://api.covidzero.com.br/data_api/v1/cases/datasus`);

        const resultsData = response.data.sus_list;

        setResponseAPI(resultsData);

        const lastItem = resultsData[resultsData.length - 1];

        const lastItemFormated = moment(lastItem.date).format('l').split('/').reverse().slice(1).join('/');

        setLastDayCasesAndDeaths(lastItem.date);
        setLastDayFormatedCasesAndDeaths(lastItemFormated);
    };
 

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                {graphicCasesAndDeaths && <Line
                    data={graphicCasesAndDeaths}
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

export default CasesAndDeaths;