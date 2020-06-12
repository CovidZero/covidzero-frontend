import axios from 'axios';

const totalCasesService = axios.create({
  baseURL: 'https://api.covidzero.com.br/data_api/v1/cases/datasus/graphs/total_cases'
});

export default totalCasesService;