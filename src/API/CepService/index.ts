import http from '~/utils/config/httpDonations';
import { API_URL_VIA_CEP  as baseURL} from "~/utils/constants";


export default function CepService(){
        
        async function findCep(_cep:string) {
                let cep = _cep.replace(/\D/g, '');
                try {
                    const  resp = await http.get(`${baseURL}${cep}/json/`);                
                    return resp.data;
                } catch (error) {
                    return [];
                }

        }

        return {
            findCep
        }
}