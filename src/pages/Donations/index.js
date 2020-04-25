import React from "react";
import { useTranslation } from "react-i18next";
import history from "~/services/history";
import { Header,Button, CardDonations } from "~/components";

import * as Styled from "./styles.js";


export default function Donations() {
    const [t] = useTranslation();

 
  return (
    <>
      <Header title={t("header.donations")} rightIcon={Notification} />

     
            <Styled.Container>
     
                  <CardDonations
                      title="Instituto Ronald McDonald" 
                      content={<p>Nosso país irá vencer o COVID-19, mas precisamos da sua doação para nos mantermose e superar esse período de luta com todas as nossas crianças em tratamento protegidas.</p>}
                      footer={
                        <Button 
                            styleButton='sm-light-btn'  
                            textButton='Doar'   
                            onClick={() => history.push("/donations/details")}                       
                         />
                      }
                     
                    />

                   <CardDonations
                      title="Instituto Ronald McDonald"
                      content={<p>Nosso país irá vencer o COVID-19, mas precisamos da sua doação para nos mantermose e superar esse período de luta com todas as nossas crianças em tratamento protegidas.</p>}
                      footer={
                        <Button styleButton='sm-light-btn' disable={false} textButton='Doar'/>
                      }
                    />

          </Styled.Container>   

    </>
  ); 

}