import CasesService from './CasesService';

 function API() {

    const baseURLs = {
        cases: '"https://api.github.com',
    }

    return {
        cases: CasesService(baseURLs.cases),
    }

}

const apiInstance = API();
export default apiInstance;