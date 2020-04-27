import http from '~/utils/config/httpDonations';
import { API_URL_DONATION  as baseURL} from "~/utils/constants";

 


export interface Projects {
      id:number,
      name:string,
      about:string,
      goal:number,
      quota_total:number,
      quota_value: number,
}

 

interface DonationsProvider {
    findAllProjects(): Promise<Projects>,
    findProjects(id:number): Promise<Projects>, 
    DonationsProjects(id:number,param:any):Promise<Projects>,
    CheckoutProjects(param:any):Promise<Projects>
   
}


export default function DonationsService(casesBaseURL: string): DonationsProvider {

            async function findAllProjects() {
                try {
                    const resp = await http.get(`${baseURL}`+"/projects");                
                    return resp.data;
                }catch (error) {
                    console.log('error=>', error)
                    throw (error)
                }

            }


            async function findProjects(id:number) {                
                try {
                    const resp = await http.get(`${baseURL}`+"/projects/"+`${id}`);                
                    return resp.data;
                } catch (error) {
                     
                    throw (error)
                }

            } 

            async function DonationsProjects(id:any,param:any) {                
                try {
                    const resp = await http.post(`${baseURL}`+"/projects/"+`${id}`+"/donations",param);                
                    return resp.data;
                }catch (error) {
                     
                    throw (error)
                }

            }  

            async function CheckoutProjects(param:any) {                
                try {
                    const resp = await http.post(`${baseURL}`+"/donation_checkout/",param);                
                    return resp.data;
                } catch (error) {
                    
                    throw (error.response.data)
                }

            }             
            


            return {
                findAllProjects,
                findProjects,
                DonationsProjects,
                CheckoutProjects
            }
}