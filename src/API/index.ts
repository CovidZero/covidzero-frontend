import { 
    API_URL_DONATION_CAPTABLE,
    API_URL_DONATION_PREME
} from "~/utils/constants";

import CasesService     from './CasesService';
import DonationsCapTableService  from './DonationCaptableService';
import DonationPremeService     from './DonationPremeService';
import CepService       from './CepService';


function API() {

    const baseURLs = {
        cases: `https://api.covidzero.com.br/data_api/v1`,
        donationsCaptable:API_URL_DONATION_CAPTABLE,
        donationsPreme:API_URL_DONATION_PREME
    }

    return {
        cases: CasesService(baseURLs.cases),
        donationsCaptable: DonationsCapTableService(baseURLs.donationsCaptable),
        donationsPreme:    DonationPremeService(baseURLs.donationsPreme),
        cep:CepService()
    }

}

const apiInstance = API();
export default apiInstance;