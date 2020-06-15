import axios from 'axios';

const last30DaysService = axios.create({
  baseURL: 'https://api.covidzero.com.br/data_api/v1/cases/datasus/graphs/last30days'
});

export default last30DaysService;

