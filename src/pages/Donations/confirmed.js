import React,{useState,useEffect}  from "react";
import {useParams}              from "react-router-dom";
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
                <Styled.ContentText style={{fontSize:"14px",lineHeight:"18px",margin:"17px 8px 0px 8px",color:"#F5F5F5"}}>
                     Obrigado pela sua doação, FIRST_NAME!
                </Styled.ContentText>

               <div style={{textAlign:"center",margin:"20px 0"}}>
                 <img  src={require("~/assets/images/icon-ok.svg")}/>
               </div>  

                <Styled.ContentText style={{fontSize:"14px",lineHeight:"24px",margin:"8px 8px 17px"}}>
                    <p>Sua doação de AMOUNT foi confirmada e o valor será repassado diretamente para a ONG ONG_NAME.</p>

                    <p>O CNPJ da ONG ONG_NAME é ONG_CNPJ. Com ele, você poderá deduzir valores dos seus impostos a serem pagos.</p>

                    <p>Você receberá um email com a confirmação da doação.</p>

                   <p>A CovidZero não recebeu nenhuma comissão sobre essa doação.</p>
                </Styled.ContentText>
                
             
                <div  className="termos">
                      <div className="logo-preme">
                          <p>Pagamento processado por</p> 
                          <a href="https://www.premepay.com/pt-br?utm_source=covidzero" target="_blank"><img  src={require("~/assets/images/logo-preme.svg")}/></a>
                      </div>
                </div>
                     
         </Styled.MobContainer>

    </>
  ); 

}