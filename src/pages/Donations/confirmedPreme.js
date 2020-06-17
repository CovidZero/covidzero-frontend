import React,{useState,useEffect}  from "react";
import {useParams}                 from "react-router-dom";

import { useTranslation }          from "react-i18next";
import { Header,Button,Loading }   from "~/components";
import history                     from "~/services/history";
import * as Styled from "./styles.js";

import API  from "~/API";

import ProjectsJson from "./projects.json";

export default function CheckoutBoleto() {
    const [t] = useTranslation();
    let { storeId,customerId,orderNumber} = useParams();

    const [loadingStatus, setloadingStatus] = useState(true)

    const initalParamPreme={
      storeId,
      customerId,
      orderNumber,
      token:""
    }

    const initalProjects = {
      id:0,
      name:"",
      about:"",
      goal:0,
      quota_total:0,
      quota_value:0,

      photo:{url:false}
    }


     const [Projects, setProjects]           = useState(initalProjects);
     const [paramPreme,setParamPreme]       = useState(initalParamPreme);
     const [dataOrder,setDataOrder]         = useState({
      customer:{
        firstName:''
      },
      payment:{
        amount:''
      }

     });





    useEffect(() => {

      (async () => {

           const response= await API.donationsPreme.Authentication();

            setParamPreme({...paramPreme,token:response.token});
            setloadingStatus(false)

      })()


          const projectsJson=ProjectsJson.find(({ id }) => id==storeId);

          if(typeof projectsJson !="undefined"){
                setProjects(projectsJson);
          }else{
              history.push("/donations");
          }



    },[paramPreme, storeId]);



    useEffect(() => {
      if(paramPreme.token!=""){
              API.donationsPreme.ListOrder(paramPreme).then(response =>{


                setDataOrder(response);

              });


       }

    },[paramPreme, paramPreme.token]);



  return (
    <>
      <Loading spinning={loadingStatus} />

      <Header title={t("header.donations")}  />


         <Styled.MobContainer>
                <Styled.ContentText style={{fontSize:"14px",lineHeight:"18px",margin:"17px 8px 0px 8px",color:"#F5F5F5"}}>
                     Obrigado pela sua doação, {dataOrder.customer.firstName}!
                </Styled.ContentText>

               <div style={{textAlign:"center",margin:"20px 0"}}>
                 <img  src={require("~/assets/images/icon-ok.svg")}/>

               </div>

                <Styled.ContentText style={{fontSize:"14px",lineHeight:"24px",margin:"8px 8px 17px"}}>
  <p>Sua doação de {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dataOrder.payment.amount)} foi confirmada e o valor será repassado diretamente para a ONG Ribon.</p>

                    <p>O CNPJ da ONG Ribon é 26.660.577/0001-13. Com ele, você poderá deduzir valores dos seus impostos a serem pagos.</p>


                    <p>Você receberá um email com a confirmação da doação.</p>

                   <p>A CovidZero não recebeu nenhuma comissão sobre essa doação.</p>
                </Styled.ContentText>



                <div  className="termos">
                      <div className="logo-preme">
                          <p>Pagamento processado por</p>

                          <a href="https://www.premepay.com/pt-br?utm_source=covidzero" target="_blank">
                               <img  src={require("~/assets/images/logo-preme.svg")}/>
                          </a>
                      </div>
                </div>

         </Styled.MobContainer>

    </>
  );

}

