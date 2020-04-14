import React, { useEffect, useState } from 'react';
import { Style } from '../styles';
import moment from 'moment';

import api from '../api';

import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js';

const DailyCases = (props) => {
    const [twentyDaysAgo, setTwentyDaysAgo] = useState('');
    const [lastDayUsed, setLastDayUsed] = useState();
    let daysAgo = {};
    const [arrayDM, setArrayDM] = useState([]);
    const [arrayYMD, setArrayYMD] = useState([]);
    let dayDM = [];
    let dayYMD = [];
    let lastDayReturned = '';
    let lastDayReturnedFormated = '';

    useEffect(() => {
        async function loadCases(){
            
            const response = await api.get(`https://api.covidzero.com.br/data_api/v1/cases/datasus`);

            const resultsData = response.data.sus_list;

            const days = resultsData.map(item => {
                console.log(item.newcases);
                
                //deixa data no formato dd/m
                const formatedDate = moment(item.date).format('l').split('/').reverse().slice(1).join('/');
                console.log(formatedDate);
                
                //retorna ultimo dia computado na api - consequentemente é o ultimo item retornado da chamada (pensar outra forma de pegar ele)
                lastDayReturned = item.date;

                //ultimo dia computado no formato dd/m
                lastDayReturnedFormated = formatedDate;
                return (item);
            });

            //seta no estado do react o ultimo dia formatado ja em dd/m
            setLastDayUsed(lastDayReturnedFormated);

            //pega o 21 dia antes do último dia retornado pela api
            daysAgo = moment(lastDayReturned).subtract(20, 'days');

            let i = 20;
            let day = [{}];
            //retorna hoje e os ultimos 20 dias
            while(i >= 0){
                day = moment(lastDayReturned).subtract(i, 'days');

                //coloca no array o dia no formato da api y-m-d
                dayYMD.push(moment(day).format('YYYY-MM-DD'));

                //coloca no array o dia no formato dd/m
                dayDM.push(moment(day._d).format('l').split('/').reverse().slice(1).join('/'));
                setArrayDM(dayDM);
                setArrayYMD(dayYMD);
                i--;
            };



            //seta o 21º dia antes do último no formato dd/m
            setTwentyDaysAgo(moment(daysAgo._d).format('l').split('/').reverse().slice(1).join('/'));

        }

        loadCases();

    }, []);

    
    console.log(lastDayUsed);
    console.log(twentyDaysAgo);
    console.log(arrayDM);
    console.log(arrayYMD);
 
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