
import CasesService from './CasesService';
export default function API() {

    const baseURLs = {
        cases: '"https://api.github.com'
    }

    return {
        cases: CasesService(baseURLs.cases)
    }

}