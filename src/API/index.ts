import CasesService from './CasesService';

function API() {

    const baseURLs = {
        cases: `https://api.covidzero.com.br/data_api/v1`
    }

    return {
        cases: CasesService(baseURLs.cases),
    }

}

const apiInstance = API();
export default apiInstance;