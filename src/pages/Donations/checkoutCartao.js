import React,{useState} from "react";
import { useTranslation } from "react-i18next";
import { Header,Button,Input,Switch } from "~/components";
import * as Styled from "./styles.js";

import { cpfMask,dataMask,intMask } from './mask'


export default function CheckoutCartao() {
    const [t] = useTranslation();

    const [valueCpf, setCpf]                   = useState("")
    const [valueDtNascimento, setDtNascimento] = useState("")
    const [valueValidade, setValidade]         = useState("")
    const [valueCVV, setCVV]                   = useState("")
 
   
    
    const initialState = [false, false, false,false];
    const [activeClasses, setActiveClasses]                   = useState(initialState)

    const ValorDonation=(index)=>{
      
            const  active = [...initialState.slice(0, index), !initialState[index],initialState.slice(index + 1)].flat();

            setActiveClasses(active)
         
    }
    


  return (
    <>
      <Header title={t("header.donations")} rightIcon={Notification} />


         <Styled.MobContainer>
                
                <p>Quanto você gostaria de doar?</p>
                <Styled.ContentButton>
                        <Button  
                          styleButton='sm-light-btn' 
                          className={activeClasses[0]? "lg-light-btn active":"lg-light-btn"}     
                          textButton='R$5'  
                          onClick={e => ValorDonation(0)}
                        /> 

                        <Button  
                          styleButton='sm-light-btn' 
                          className={activeClasses[1]? "lg-light-btn active":"lg-light-btn"}  
                          textButton='R$50'  
                          onClick={e => ValorDonation(1)}
                        /> 
                        <Button  
                          styleButton='sm-light-btn' 
                          className={activeClasses[2]? "lg-light-btn active":"lg-light-btn"}  
                          textButton='R$500'  onClick={e => ValorDonation(2)} /> 

                        <Button  
                           styleButton='sm-light-btn' 
                           className={activeClasses[3]? "lg-light-btn btn-txt active":"lg-light-btn btn-txt"}  
                           textButton='Outro Valor'   
                           onClick={e => ValorDonation(3)}
                          /> 
                </Styled.ContentButton>  

                <Styled.ContentForm>

                      <div className="label">Nome</div>
                      <Input
                        placeholder={"Nome"}
                        onChange={e => console.log(e.target.value)}
                      />
                      <div className="erro">Nome inválido</div>

                      <div className="label">Sobrenome</div>
                      <Input
                        placeholder={"Sobrenome"}
                        onChange={e => console.log(e.target.value)}
                      />

                    <div className="label">CPF</div> 
                    <Input
                        value={valueCpf}
                        onChange={e => setCpf(cpfMask(e.target.value))}
                      />                

                    <div className="label">Data de Nascimento</div> 
                    <Input 
                        value={valueDtNascimento}
                        onChange={e => setDtNascimento(dataMask(e.target.value))}
                      />                    

                    <div className="label">Email</div> 
                    <Input
                        placeholder={"Seu email"}
                        onChange={e => console.log(e.target.value)}
                      />                

               </Styled.ContentForm>
               
               <Styled.ContentFormCartao>
                    
                    <div className="label">Número do Cartão</div> 
                    <Input
                        placeholder={"Número do Cartão"}
                        onChange={e => console.log(e.target.value)}
                      />  


                    <div className="label">Nome do titular</div> 
                    <Input
                        placeholder={"Nome conforme impresso no cartão"}
                        onChange={e => console.log(e.target.value)}
                      />  

                     <div className="form-group">
                        <div>
                            <div className="label">Validade</div> 
                            <Input
                                 value={valueValidade}
                                 onChange={e => setValidade(dataMask(e.target.value))}
                              /> 
                        </div>
                        <div>
                            <div className="label">Código de Segurança</div> 
                            <Input
                                value={valueCVV}
                                placeholder={"CVV"} 
                                maxLength={"3"}
                                onChange={e => setCVV(intMask(e.target.value))}
                              /> 
                        </div>
                     </div> 


                    <Button 
                      styleButton='sm-light-btn'  
                      textButton='CONFIRMAR E DOAR'
                      className="full-light-btn"                                                                        
                    />
               </Styled.ContentFormCartao>               
      

         </Styled.MobContainer>

    </>
  ); 

}