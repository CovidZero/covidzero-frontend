import React,{useState,useEffect}  from "react";
import {useParams   }              from "react-router-dom";
import { useTranslation }          from "react-i18next";
import { Header,Button,Loading } from "~/components";

import * as Styled from "./styles.js";
 


export default function CheckoutBoleto() {
    const [t] = useTranslation();
    let { id } = useParams();

    const [loadingStatus, setloadingStatus] = useState(true)

    useEffect(() => {
      setloadingStatus(false)
    });

  
  return (
    <>
      <Loading spinning={loadingStatus} />
      <Header title={t("header.donations")} rightIcon={Notification} />
      
         <Styled.MobContainer>
                <Styled.ContentText style={{fontSize:"14px",lineHeight:"18px",margin:"17px 8px 0px 8px",color:"#F5F5F5"}}>Obrigado pela sua doação, FIRST_NAME!</Styled.ContentText>

                <Styled.ContentText style={{fontSize:"14px",lineHeight:"24px",margin:"8px 8px 17px"}}>Ao recebermos a confirmação do pagamento do Boleto Bancário, sua doação de 100.00 será repassada diretamente para a ONG ONG_NAME.</Styled.ContentText>
                
                <Styled.ContentFormaPagamento>               
                      <Styled.ContentFormaPagamentoBody>
                        <div>
                              <Styled.ContentText style={{fontSize:"14px",lineHeight:"18px",margin:"5px 8px",color:"#F5F5F5"}}>
                                 Código de barras
                              </Styled.ContentText>   

                              <Styled.ContentText style={{fontSize:"12px",lineHeight:"18px",margin:"5px 8px"}}>
                                12345.12345 12345.12345678901.123456 1 23 123456789012
                              </Styled.ContentText>

                              <Styled.ContentText style={{fontSize:"10px",lineHeight:"16px",margin:"5px 8px"}}>
                                Vencimento 22/03/2020
                              </Styled.ContentText>

                              <Button 
                                  style={{marginBottom:"8px"}}
                                  styleButton='sm-light-btn'  
                                  textButton='COPIAR CÓDIGO DE BARRAS'
                                  className="full-light-btn"  
                                  onClick={()=>console.log("click")}                                                                      
                                />
                                 
                               <Button 
                                  styleButton='sm-light-btn'  
                                  textButton='Enviar boleto por email'
                                  className="full-light-btn"  
                                  onClick={()=>console.log("click")}                                                                    
                                />
                        </div>
                        
                        <div  className="termos">
                              <div className="logo-preme">
                                  <p>Pagamento processado por</p> 
                                  <a href="https://www.premepay.com/pt-br?utm_source=covidzero" target="_blank"><img  src={require("~/assets/images/logo-preme.svg")}/></a>
                              </div>
                              <p>O pagamento será processado por Preme Pay e estará disponível em sua fatura como CovidZero. Ao realizar o pagamento você concorda com <a href="https://premepay.com/pt-br/terms-and-conditions?utm_source=covidzero" target="_blank">os termos de uso.</a></p>
                        </div>
                    </Styled.ContentFormaPagamentoBody>

                    <Styled.ContentText style={{fontSize:"14px",lineHeight:"24px",margin:"8px 8px 17px"}}>
                         <p>O CNPJ da ONG  ONG_NAME é ONG_CNPJ. Com ele, você poderá deduzir valores dos seus impostos a serem pagos.</p>
                         <p>Você receberá um email com a confirmação da doação.</p> 
                         <p>A CovidZero não receberá nenhuma comissão sobre essa doação.</p> 
                    </Styled.ContentText>

               </Styled.ContentFormaPagamento>   
         </Styled.MobContainer>

    </>
  ); 

}