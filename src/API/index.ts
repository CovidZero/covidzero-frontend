import { API_URL_DONATION} from "~/utils/constants";

import CasesService     from './CasesService';
import DonationService  from './DonationService';
import CepService       from './CepService';


function API() {

    const baseURLs = {
        cases: `https://api.covidzero.com.br/data_api/v1`,
        donations:API_URL_DONATION
    }

    return {
        cases: CasesService(baseURLs.cases),
        donations: DonationService(baseURLs.donations),
        cep:CepService()
    }

}

const apiInstance = API();
export default apiInstance;