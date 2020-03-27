import CasesService from './CasesService';

//utilziando a URL https://cors-anywhere.herokuapp.com/
//para contornar o problema com o CORS
const CORS_FIX = 'https://cors-anywhere.herokuapp.com/'
function API() {

    const baseURLs = {
        cases: `${CORS_FIX}https://api.covidzero.com.br/data_api/v1/data`
    }

    return {
        cases: CasesService(baseURLs.cases),
    }

}

const apiInstance = API();
export default apiInstance;