import http from '~/utils/config/httpDonations';
import { 
    RIBON_USERNAME,
    RIBON_PASSWORD
} from "~/utils/constants"; 


export interface Projects {
      storeId:number,
      customerId:number,
      token:string,
      orderNumber:string
     
}

 


interface DonationsProvider {
    Authentication(): Promise<Projects>,
    CreateCustomer(param:Projects,data:Object): Promise<Projects>, 
    ListCustomers(param:Projects): Promise<Projects>, 
    ListCustomer(param:Projects,cpf:string): Promise<Projects>, 
    CreateCard(param:Projects,data:Object):Promise<Projects>,
    CreateOrder(param:Projects,data:Object):Promise<Projects>,
    ListOrder(param:Projects):Promise<Projects>
   
}


export default function DonationsPremeService(baseURL: string): DonationsProvider {

            async function Authentication() {
                try {
                    let param={ 
                            "username": RIBON_USERNAME,
                            "password": RIBON_PASSWORD
                    };

                    

                    const resp = await http.post(`${baseURL}`+"/authentication",param);                
                    return resp.data;
                }catch (error) {
                    console.log('error=>', error)
                    throw (error)
                }

            }
     
            
            async function CreateCustomer(param:Projects,data:object) {                
                try {
                    const resp = await http.post(`${baseURL}/stores/${param.storeId}/customers`,data,{
                        headers: {
                            Authorization:`Bearer ${param.token}`,
                        }
                        });         

                    return resp.data;
                } catch (error) {
                     
                    throw (error)
                }

            } 

            async function ListCustomers(param:Projects) {                
                try {
                    const resp = await http.get(`${baseURL}/stores/${param.storeId}/customers`,{
                        headers: {
                            Authorization:`Bearer ${param.token}`,
                        }
                        });         

                    return resp.data;
                } catch (error) {
                     
                    throw (error)
                }

            } 
 

            async function ListCustomer(param:Projects,cpf:string) {                
                try {
                    const resp = await http.get(`${baseURL}/stores/${param.storeId}/customers?cpf=${cpf}`,{
                        headers: {
                            Authorization:`Bearer ${param.token}`,
                        }
                        });         

                    return resp.data;
                } catch (error) {
                     
                    throw (error)
                }

            }             

            async function CreateCard(param:Projects,data:object) {                
                try {
                    const resp = await http.post(`${baseURL}/stores/${param.storeId}/customers/${param.customerId}/cards`,data, {
                        headers: {
                            Authorization: `Bearer ${param.token}` ,
                        }
                    });
                    
                    return resp.data;

                }catch (error) {
                     
                    throw (error)
                }

            }  


            async function CreateOrder(param:Projects,data:object) {                
                try {
                    const resp = await http.post(`${baseURL}/stores/${param.storeId}/customers/${param.customerId}/orders`,data, {
                        headers: {
                            Authorization: `Bearer ${param.token}` ,
                        }
                    });
                    
                    return resp.data;

                }catch (error) {
                     
                    throw (error)
                }

            }  
            
            
            async function ListOrder(param:Projects) {                
               
                try {
                    const resp = await http.get(`${baseURL}/stores/${param.storeId}/orders/${param.orderNumber}`,{
                        headers: {
                            Authorization:`Bearer ${param.token}`,
                        }
                    });         

                    return resp.data;

                } catch (error) {
                     
                    throw (error)
                }

            }             


            return {
                Authentication,
                CreateCustomer,
                ListCustomers,
                ListCustomer,
                CreateCard,
                CreateOrder,
                ListOrder
            }
}