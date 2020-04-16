import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.covidzero.com.br/data_api/v1/cases/datasus'
});

export default api;