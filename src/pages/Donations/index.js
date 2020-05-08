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
                  
            {/* CapTable */}
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

            {/* Ribon */}
                    <CardDonations
                      title='WFP - Programa Mundial de Alimentos Brasil' 
                      content='Ajude a WFP a continuar distribuindo merendas escolares durante a crise do Coronavírus. Cada R$10 ajudam a higienizar 500 merendas escolares, garantindo alimentação segura para alunos da rede pública.'
                      footer={
                        <Button 
                            styleButton='sm-light-btn'  
                            textButton='Doar'   
                            onClick={() => history.push("/donations/details/wfp")}                       
                         />
                      } 
                    />

                    <CardDonations
                      title='Favela Sem Corona' 
                      content='Percebendo o descaso que o poder público já pratica com as comunidades do Rio de Janeiro, o projeto Favela sem Corona foi criado com o objetivo de diminuir o impacto da epidemia de coronavírus nas favelas do município, atuando nas áreas de prevenção e apoio ao diagnóstico.'
                      footer={
                        <Button 
                            styleButton='sm-light-btn'  
                            textButton='Doar'   
                            onClick={() => history.push("/donations/details/favela-sem-corona")}                       
                         />
                      } 
                    />

                    <CardDonations
                      title='Ação da Cidadania' 
                      content='A rede da Ação da Cidadania hoje está presente em 19 estados do país mais o distrito federal. Cada entidade em seu estado atua com independência completa, operando de acordo com as necessidades de sua região.'
                      footer={
                        <Button 
                            styleButton='sm-light-btn'  
                            textButton='Doar'   
                            onClick={() => history.push("/donations/details/acao-da-cidadania")}                       
                         />
                      } 
                    />
          

          </Styled.Container>   

          

    </>
  ); 
  

}