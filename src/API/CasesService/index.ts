import axios from 'axios';

const URL = {
    all: '/all'
}

export interface CasesProvider {
    getAll(): Promise<Cases[]>
    getByStateCode(stateCode: string): Promise<Cases[]>
}

export interface Cases {
    activeCases: number,
    suspectedCase: number,
    recoveredCases: number,
    deaths: number,
}
export default function CasesService(casesBaseURL: string): CasesProvider {

    const axiosInstance = axios;

    async function getAll(): Promise<Cases[]> {
        const response = await axiosInstance.get(
            `${casesBaseURL}${URL.all}`
        )

        const cases: Cases[] = response.data;
        return cases;
    }

    async function getByStateCode(stateCode: string): Promise<Cases[]> {
        const response = await axiosInstance.get(
            `${casesBaseURL}${URL.all}/${stateCode}`
        )

        const cases: Cases[] = response.data;
        return cases;
    }

    return {
        getAll,
        getByStateCode
    }

}