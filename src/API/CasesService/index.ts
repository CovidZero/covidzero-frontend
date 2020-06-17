import http from '~/utils/config/http';


const URL = {
    statesCases: '/cases/state',
    all: '/cases/state/report',
    cityCases:'/cases/city'
}
export interface Cases {
    confirmed: number;
    suspected: number;
    recovered: number;
    deaths: number;
}

export interface StateCases {
    stateName: string,
    stateCode: string,
    latitude: string,
    longitude: string,
    cases: Cases
}

export interface CityCases {}





interface CasesProvider {
    getStatesCases(): Promise<StateCases[]>,
    getAllCases(): Promise<Cases>
    getCityCases(): Promise<CityCases>
}

export default function CasesService(casesBaseURL: string): CasesProvider {

    async function getAllCases(): Promise<Cases> {
        try {
            const response = await http.get(`${casesBaseURL}${URL.all}`)
            const cases: Cases = convertCasesResponse(response.data)

            return cases;
        } catch (error) {
            console.log('error=>', error)
            throw (error)
        }
    }

    async function getStatesCases(): Promise<StateCases[]> {
        try {

            const response = await http.get(`${casesBaseURL}${URL.statesCases}`)
            const statesCases: StateCases[] = convertStateCasesResponse(response.data)
            return statesCases;
        } catch (error) {
            console.log('error=>', error)
            throw (error)
        }
    }


    async function getCityCases(): Promise<CityCases[]> {
        try {

            const response = await http.get(`${casesBaseURL}${URL.cityCases}`)
            const cityCases:CityCases[] = response.data
            return cityCases;
        } catch (error) {
            console.log('error=>', error)
            throw (error)
        }
    }


    return {
        getStatesCases,
        getAllCases,
        getCityCases
    }

}

interface CasesResponse {
    totalCases: number,
    suspectedCase?: number,
    recoveredCases?: number,
    deaths?: number,
}

interface stateCasesResponse {
    stateCode: string,
    stateName: string,
    lat: string,
    lng: string,
    cases: CasesResponse
}

//Utils para convertes o data do endpoint em Tipos mais amigáveis de serem escritos
function convertStateCasesResponse(statesCasesResponse: stateCasesResponse[]): StateCases[] {
    return statesCasesResponse.map(stateCasesResponse => {
        const cases = stateCasesResponse.cases;
        const _case: StateCases = {
            stateCode: stateCasesResponse.stateCode,
            stateName: stateCasesResponse.stateName,
            latitude: stateCasesResponse.lat,
            longitude: stateCasesResponse.lng,
            cases: {
                confirmed: cases.totalCases ? cases.totalCases : 0,
                recovered: cases.recoveredCases ? cases.recoveredCases : 0,
                suspected: cases.suspectedCase ? cases.suspectedCase : 0,
                deaths: cases.deaths ? cases.deaths : 0
            }
        }

        return _case
    })

}

function convertCasesResponse(casesResponse: CasesResponse): Cases {

    const _case: Cases = {
        confirmed: casesResponse.totalCases ? casesResponse.totalCases : 0,
        recovered: casesResponse.recoveredCases ? casesResponse.recoveredCases : 0,
        suspected: casesResponse.suspectedCase ? casesResponse.suspectedCase : 0,
        deaths: casesResponse.deaths ? casesResponse.deaths : 0
    }

    return _case;

}

//Util para tratar possíveis casos de undefined em valores que talvez não estejam incluidos
//no reponse.data dos endpoints
function calculateActiveCases(totalCases: number, deaths: number | undefined, recovered: number | undefined) {

    const _deaths = deaths ? deaths : 0;
    const _recovered = recovered ? recovered : 0;
    const activeCases = totalCases - _deaths - _recovered

    return activeCases;
}
