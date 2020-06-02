import axios from 'axios';

const regionCasesService = axios.create({
  baseURL: 'https://api.covidzero.com.br/data_api/v1/cases/datasus/regions'
});

export default regionCasesService;