import { useState } from "react";

const Form = (callback) => {


    const inital = {
        
                first_name:"",
                surname:"",
                cpf: "",
                birthdate:"",
                email: "",
                phone: "",
                address: {
                        street:"",
                        number:"",
                        zipcode:"",
                        district:"",
                        city: "",
                        state: "",
                        country: "BRL"
                        }
          
   }

  const [values, setValues] = useState(inital);
 

  return [{ values }];
};

export default Form;