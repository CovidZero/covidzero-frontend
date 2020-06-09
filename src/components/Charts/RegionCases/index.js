import React, { useEffect, useState } from 'react';
import { Style } from '../styles';
import moment from 'moment';

import regionCasesService from '../../../services/regionCases';

import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';

const RegionCases = (props) => {
    const [responseAPI, setResponseAPI] = useState([]);

    const [lastDay, setLastDay] = useState(null);

    const [sul, setSul] = useState([]);
    const [sudeste, setSudeste] = useState([]);
    const [centroOeste, setCentroOeste] = useState([]);
    const [nordeste, setNordeste] = useState([]);
    const [norte, setNorte] = useState([]);

    const [graphic, setGraphic] = useState(null);

    useEffect(() => {
        getRegionCases();
    }, [getRegionCases]);

    useEffect(() => {

        if(!lastDay){
            return
        }

        const sulValue = responseAPI.reduce((currentTotal, item) => {

            if(item.date == lastDay && item.region == 'Sul' && item.codmun == null){
                return currentTotal + item.totalCases
            }
            return currentTotal;
        }, 0);

        const sudesteValue = responseAPI.reduce((currentTotal, item) => {
            if(item.date == lastDay && item.region == 'Sudeste' && item.codmun == null){
                return currentTotal + item.totalCases
            }
            return currentTotal;
        }, 0);

        const centroOesteValue = responseAPI.reduce((currentTotal, item) => {
            if(item.date == lastDay && item.region === 'Centro-Oeste' && item.codmun == null){
                return currentTotal + item.totalCases;
            }
            return currentTotal;
        }, 0);

        const nordesteValue = responseAPI.reduce((currentTotal, item) => {
            if(item.date == lastDay && item.region == 'Nordeste' && item.codmun == null){
                return currentTotal + item.totalCases
            }
            return currentTotal;
        }, 0);

        const norteValue = responseAPI.reduce((currentTotal, item) => {
            if(item.date == lastDay && item.region == 'Norte' && item.codmun == null){
                return currentTotal + item.totalCases
            }
            return currentTotal;
        }, 0);

        setSul(sulValue);
        setSudeste(sudesteValue);
        setCentroOeste(centroOesteValue);
        setNordeste(nordesteValue);
        setNorte(norteValue);

    }, [lastDay, responseAPI]);

    useEffect(() => {

        setGraphic(
            {
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
                    data: [sul, sudeste, centroOeste, nordeste, norte],

                }
                ],
            }
        );
    }, [sul, sudeste, centroOeste, nordeste, norte]);

    async function getRegionCases(){
        const response = await regionCasesService.get().then(response => {
            return response.data;
        });

        setResponseAPI(response);

        // const lastDay = response[1].date;

        setLastDay(lastDay);
    };

    return(
        <Style.CardBoxStyle>
            <Style.Title>{props.title}</Style.Title>
            <Style.CardBoxStatsDefault>
                { graphic && <Doughnut
                    data={graphic}
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
                /> }

            </Style.CardBoxStatsDefault>
        </Style.CardBoxStyle>
    );

}

export default RegionCases;
