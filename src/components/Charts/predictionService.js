import axios from 'axios';

const apiPrediction = axios.create({
    baseURL: 'https://api.covidzero.com.br/data_api/v1/cases/predict_cases'
});

export default apiPrediction;