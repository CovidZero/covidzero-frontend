import axios from 'axios';

const URL = {
    all: '/all',
    state: '/state',
    coordinates: '/coordinates',
    city: '/city',

}

export enum CaseStatus {
    ACTIVE = 'ACTIVE',
    SUSPECTED = 'SUSPECTED',
    RECOVERED = 'RECOVERED',
    DEAD = 'DEAD'
}
export interface Coordinates {
    latitude: string,
    longitude: string
}
export interface Cases {
    activeCases: number,
    suspectedCase: number,
    recoveredCases: number,
    deaths: number,
}

export interface CasesByCity {
    city: string,
    stateCode: string,
    cases: Cases[]
}

export interface CasesByCoordinates {
    caseStatus: CaseStatus,
    location: Coordinates
}

interface CasesProvider {
    getAll(): Promise<Cases[]>
    getByStateCode(stateCode: string): Promise<Cases[]>
    getByCity(city: string): Promise<CasesByCity>
    getByCoordinates(coordinates: Coordinates): Promise<CasesByCoordinates[]>
}

export default function CasesService(casesBaseURL: string): CasesProvider {

    const axiosInstance = axios;

    async function getAll(): Promise<Cases[]> {
        try {
            const response = await axiosInstance.get(
                `${casesBaseURL}${URL.all}`
            )

            const cases: Cases[] = response.data;
            return cases;

        } catch (error) {
            throw (error);
        }
    }

    async function getByStateCode(stateCode: string): Promise<Cases[]> {
        try {
            const response = await axiosInstance.get(
                `${casesBaseURL}${URL.state}`,
                {
                    params: { stateCode: stateCode }
                }
            )

            return response.data;
        } catch (error) {
            throw (error)
        }
    }

    async function getByCity(city: string): Promise<CasesByCity> {
        try {
            const response = await axiosInstance.get(
                `${casesBaseURL}${URL.city}`,
                {
                    params: { search: city }
                }
            )

            return response.data;
        } catch (error) {
            throw (error)
        }
    }

    async function getByCoordinates(coordinates: Coordinates): Promise<CasesByCoordinates[]> {
        try {
            const response = await axiosInstance.get(
                `${casesBaseURL}${URL.coordinates}`,
                {
                    params: {
                        latitude: coordinates.latitude,
                        longitude: coordinates.longitude
                    }
                }
            )

            const cases: CasesByCoordinates[] = response.data;
            return cases;
        } catch (error) {
            throw (error)
        }
    }

    return {
        getAll,
        getByStateCode,
        getByCity,
        getByCoordinates
    }

}