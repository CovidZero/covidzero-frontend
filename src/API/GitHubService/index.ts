import axios from 'axios';

const URL = {
    repos: '/repos'
}

export interface GithubProvider {
    getRepos(): Promise<Repo[]>
}

export interface Repo {
    id: string,
    name: string,
    private: boolean,
    description: string,
}
export default function GitHubService(userBaseURL: string): GithubProvider {

    const axiosInstance = axios;

    async function getRepos(): Promise<Repo[]> {
        const response = await axiosInstance.get(
            `${userBaseURL}${URL.repos}`
        )

        const repos: Repo[] = convertResponseRepos(response.data);
        return repos;
    }

    return {
        getRepos,
    }

}

function convertResponseRepos (repos: any) : Repo[] {
    const convertedResponse = repos.map((repoData: any) => {
        const repo: Repo = {
            id: repoData.id.toString(),
            name: repoData.name,
            private: repoData.private,
            description: repoData.description

        }
        return repo;
    })

    return convertedResponse;
    
}