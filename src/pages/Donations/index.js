import React,{useEffect,useState} from "react";
import { useTranslation } from "react-i18next";
import history from "~/services/history";
import { Header,Button, CardDonations } from "~/components";

import * as Styled from "./styles.js";

import API from "~/API";

export default function Donations() {
    const [t] = useTranslation();

    const [allProjects, setAllProjects]     = useState([])

       
     
    useEffect(() => {
        (async () => {          
            API.donations.findAllProjects().then(response => setAllProjects(response));
         }
        )()
 
       
     },[]);

     
 
     
      
 
  return (
    <>
      <Header title={t("header.donations")} rightIcon={Notification} />

     
            <Styled.Container>
                  
            {allProjects.map((ret, index) => (
                  <CardDonations
                      title={ret.name} 
                      content={<p>{ret.about}</p>}
                      footer={
                        <Button 
                            styleButton='sm-light-btn'  
                            textButton='Doar'   
                            onClick={() => history.push("/donations/details/"+`${ret.id}`)}                       
                         />
                      } 
                    />
              ))}


          </Styled.Container>   

    </>
  ); 

}