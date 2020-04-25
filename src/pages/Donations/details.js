import React from "react";
import { useTranslation }          from "react-i18next";
import { Cell, Grid, Row }         from "@material/react-layout-grid";
import history                     from "~/services/history";
import { Header,Button,CardStats } from "~/components";

import * as Styled from "./styles.js";


export default function Details() {
    const [t] = useTranslation();

  return (
    <>
      <Header title={t("header.donations")} rightIcon={Notification} />

          <Styled.ContentImg>
                  <img
                    src={require("~/assets/images/donations.jpg")}
                  />
                  <div className="title-img">Instituto Ronald McDonald</div>
         </Styled.ContentImg> 

         <Styled.MobContainer>


                <Grid className="GridCardtats">
                      <Row>
                        <Cell
                            desktopColumns={6}
                            phoneColumns={4}
                            tabletColumns={4}
                          >
                           <CardStats 
                            title={<div>Meta</div>} 
                            count="{quantity}"
                            className="donation-stats"
                            /> 
                        </Cell>
                        <Cell
                            desktopColumns={6}
                            phoneColumns={4}
                            tabletColumns={4}
                          >
                           <CardStats 
                            title={<div>Arrecadado</div>} 
                            count="{quantity}"
                            className="donation-stats"
                            /> 
                        </Cell>                        
                      </Row>
                </Grid> 


                <Styled.ContentText>
                   <p>Nosso país irá vencer o COVID-19, mas precisamos da sua doação para nos mantermose e superar esse período de luta com todas as nossas crianças em tratamento protegidas.</p>
                   <p>Nosso país irá vencer o COVID-19, mas precisamos da sua doação para nos mantermose e superar esse período de luta com todas as nossas crianças em tratamento protegidas.</p>
                   <p><b>Quanto  o CovidZero ganha?</b></p>
                   <p>Nada! O valor recebido é passado diretamente para a instituição escolhida e o CovidZero não recebe nenhuma doação por isso.</p>
                </Styled.ContentText> 
                
                
                <Button 
                  styleButton='sm-light-btn'  
                  textButton='DOE A PARTIR DE R$5'
                  className="full-light-btn"  
                  onClick={() => history.push("/donations/checkout/")}                                                    
                />

         </Styled.MobContainer>

    </>
  ); 

}