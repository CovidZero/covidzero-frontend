import React,{useEffect,useState}  from "react";
import {useParams }                from "react-router-dom";
import DocumentMeta                from 'react-document-meta';
import { useTranslation }          from "react-i18next";
import { Cell, Grid, Row }         from "@material/react-layout-grid";
import history                     from "~/services/history";
import { Header,Button,CardStats,Loading } from "~/components";

import * as Styled from "./styles.js";
import API from "~/API";

import ProjectsJson from "./projects.json";

export default function Details() {
    const [t]  = useTranslation(); 
       
    let { id:idProjecto,capitation } = useParams();
    
    
    const [loadingStatus, setloadingStatus] = useState(true)

    const initalProjects = {
      id:0,
      name:"",
      about:"",
      goal:0,
      quota_total:0,
      quota_value:0,
      photo:{url:false} 
    }

    const initalMeta = {
      title:'CovidZero',
      description:'CovidZero - Combate ao COVID-19'
     };

    const [meta, _setMeta]            = useState(initalMeta)
    const [Projects, setProjects]     = useState(initalProjects)

    
    const setMeta=(response)=>{
        
        initalMeta.title      =`${response.name}`+ ' | CovidZero';
        initalMeta.description=`${response.name}`+ ' | CovidZero  - Combate ao COVID-19';
        
        _setMeta(initalMeta);
    }



    useEffect(() => {
        
       if(capitation=='captable'){
            (async () => {         
                API.donationsCaptable.findProjects(idProjecto).
                  then(response =>{ 
                      setMeta(response);
                      setProjects(response);
                      setloadingStatus(false);
                }).catch(ret=> history.push("/donations"));
            }
            )()
       }

      else{
         const projectsJson=ProjectsJson.find(({ id }) => id==idProjecto);
               if(typeof projectsJson !="undefined"){
                     setMeta(projectsJson);
                     setProjects(projectsJson);
                     setloadingStatus(false);
               }else{
                    history.push("/donations");
               }
                
      }

    },[]);
 

    let formato = { minimumFractionDigits: 2 , currency: 'BRL' }

    

    function formatValor(_value){
                let value =_value!=null ? _value :0;

         return parseFloat(value).toLocaleString('pt-BR',formato);
    }


  return (
    <>
      <DocumentMeta {...meta}>
      <Loading spinning={loadingStatus} />
      <Header title={t("header.donations")} rightIcon={Notification} />

          <Styled.ContentImg>
                  {Projects.photo.url && <img src={Projects.photo.url} />}
                  <div className="title-img">{Projects.name}</div>
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
                            title={<div>Arrecadado</div>} 
                            count={formatValor(Projects.quota_total)}
                            className="donation-stats"
                            /> 
                        </Cell>
                        <Cell
                            desktopColumns={6}
                            phoneColumns={4}
                            tabletColumns={4}
                          >
                           <CardStats 
                            title={<div>Meta</div>} 
                            count={formatValor(Projects.goal)}
                            className="donation-stats"
                            /> 
                        </Cell>                        
                      </Row>
                </Grid> 


                <Styled.ContentText>
                 <div className="content-placeholder"  style={loadingStatus? {display:"block"}: {display:"none"}} >
                      <div className="animated-background  content-1"></div>
                      <div className="animated-background  content-2"></div>
                      <div className="animated-background  content-3"></div>
                      <div className="animated-background  content-4"></div>
                      <div className="animated-background  content-1"></div>
                      <div className="animated-background  content-2"></div>
                      <div className="animated-background  content-3"></div>
                      <br/>
                      <div className="animated-background  content-4"></div>
                      <div className="animated-background  content-1"></div>
                      <div className="animated-background  content-2"></div>
                      <div className="animated-background  content-3"></div>
                      <div className="animated-background  content-4"></div>                                            
                 </div>       

                   {Projects.about}
                   <p><b>Quanto  o CovidZero ganha?</b></p>
                   <p>Nada! O valor recebido é passado diretamente para a instituição escolhida e o CovidZero não recebe nenhuma doação por isso.</p>
                </Styled.ContentText> 
                
                
                <Button 
                  styleButton='sm-light-btn'  
                  textButton='Doe a partir de R$5'
                  className="full-light-btn"  
                  onClick={() => history.push(`/donations/checkout/${capitation}/${Projects.id}`)}                                                    
                />
               
               <Styled.ContentText style={{fontSize:"12px",lineHeight:"18px",margin:"17px 8px 8px 8px",textAlign:"center"}}>
                       Captação promovida por
               </Styled.ContentText>

               <div style={{textAlign:"center",margin:"0px 0px 20px 0px"}}>
                 {capitation=='captable' &&
                  <a href="https://captable.com.br/?utm_source=covidzero" target="_blank">
                    <img  src={require("~/assets/images/cap-table.svg")}/>
                  </a>
                 }
 
                {capitation=='preme' &&
                  <a href="#" target="_blank">
                    <img  src={require("~/assets/images/logo-preme.svg")}/>
                  </a>
                 }

               </div>  

         </Styled.MobContainer>
         </DocumentMeta>

    </>
  ); 

}