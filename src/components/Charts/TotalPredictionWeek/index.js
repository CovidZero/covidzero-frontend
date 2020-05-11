import React, { useEffect, useState } from 'react';
import { Style } from '../styles';
import moment from 'moment';

import apiPrediction from '../predictionService';

import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

const TotalPredictionWeek = (props) => {
    const [responseAPI, setResponseAPI] = useState([]);

    const [lastDayPrediction, setLastDayPrediction] = useState(null);
    const [lastDayPredictionFormated, setLastPredictionDayFormated] = useState(null);

    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);

    let valuesAccumulateds = [];

    const [graphic, setGraphic] = useState(null);


    useEffect(() => {
      getLastDay();
      valuesAccumulateds = [];
    }, []);

    useEffect(() => {
        
      if(!lastDayPrediction || !lastDayPredictionFormated){
        return
      }

      const maxDays = 7;

      const daysYMD = [];
      const daysMD = [];

      for(let index = 0; index <= maxDays; index++){
        //pega o "i" dia antes do último retornado pela api 
        let day = moment(lastDayPrediction).subtract(index, 'days');
        //coloca no array o dia no formato da api y-m-d
        daysYMD.push(moment(day).format('YYYY-MM-DD'));
        
        //coloca no array o dia no formato dd/m
        daysMD.push(moment(day._d).format('l').split('/').reverse().slice(1).join('/'));
          
      }

      const newValues = daysYMD.map(day => {
        let totalNewCases = responseAPI.reduce((currentTotal, item) => {
          if(item.date == day){
            return currentTotal + item.predictcases
          }
          return currentTotal

        }, 0);

        return totalNewCases;
      });

      setLabels(daysMD);
      setValues(newValues);
    }, [lastDayPrediction, lastDayPredictionFormated]);

    useEffect(() => {
      if(!labels.length > 0 || !values.length > 0){
          return
      }

      setGraphic(
        {
          labels: labels.reverse(),
          datasets: [
            {
              fill: false,
              lineTension: 0.1,
              borderColor: '#FFCC00',
              borderCapStyle: 'round',
              borderJoinStyle: 'miter',
              pointBorderColor: '#FFCC00',
              pointBackgroundColor: '#FFCC00',
              borderWidth: 4,
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointRadius: 0,
              pointHitRadius: 10,
              backgroundColor: '#FFCC00',
              data: valuesAccumulateds,
            }
          ]
        }
      );
      getAccumulatedValues();
    }, [labels, values]);

    async function getLastDay(){
      const response = await apiPrediction.get();
      console.log(response);
      const resultsData = response.data;
      setResponseAPI(resultsData);

      const lastItem = resultsData[resultsData.length - 1];

      const lastItemFormated = moment(lastItem.date).format('l').split('/').reverse().slice(1).join('/');

      setLastDayPrediction(lastItem.date);
      setLastPredictionDayFormated(lastItemFormated);
    };

    
    function getAccumulatedValues(){
      let i = 0;
      console.log("antes do while");
      while(i < values.length-1){
        
        if(i == 0){
          console.log(valuesAccumulateds);
          valuesAccumulateds.push(values[i]);
        }else{
          valuesAccumulateds.push(values[i] + valuesAccumulateds[i - 1]);
          console.log(valuesAccumulateds);
        }
        i++;
      }
      
      return valuesAccumulateds;
    }

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                { graphic && <Line
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

export default TotalPredictionWeek;