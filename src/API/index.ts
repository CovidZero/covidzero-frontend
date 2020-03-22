
import GitHubService from './GitHubService';
import CasesService from './CasesService';

 function API() {

    const baseURLs = {
        cases: '"https://api.github.com',
        gitHub: "https://api.github.com/users/CovidZero"
    }

    return {
        cases: CasesService(baseURLs.cases),
        gitHub: GitHubService(baseURLs.gitHub),
    }

}

const apiInstance = API();
export default apiInstance;