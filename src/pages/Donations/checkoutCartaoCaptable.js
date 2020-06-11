import React,{useState,useEffect}  from "react";
import {useParams,  }              from "react-router-dom";
import history                     from "~/services/history";
import { useTranslation }          from "react-i18next";
import {
  LockOutline
} from "@styled-icons/evaicons-outline";
import {
  HelpCircle
} from  "@styled-icons/boxicons-regular/HelpCircle";

import { Header,Button,Input,Loading,Switch } from "~/components";


import * as Styled from "./styles.js";
import { cpfMask,dataMask,cepMask,validadeMask,cardMask,phoneMask,valorMask,cnpjMask } from './mask';
import API  from "~/API"; 



export default function CheckoutCartao() {
    const [t] = useTranslation();
    let { id } = useParams();

    const inital = {           
      description:"", 
      valor:"",
      first_name:"",
      surname:"",
      cpf: "",
      birthdate:"",
      email: "",
      phone: "",
      street:"",
      number:"",
      zipcode:"",
      district:"",
      city: "",
      state: "",
      holder_name: "",
      card_number:"",
      security_code:"",
      cc_expiration:""
}

    const [donation,setDonation]                = useState(false) 
    const [valueCep, setCep]                    = useState("")
    const [values, setValues]                   = useState(inital);

    const [donationType, setDonationType]       = useState(false);
    const [donationEmpresa, setDonationEmpresa] = useState(false);
    const [fomarPagamento, setFomarPagamento]   = useState(0);

    const [loadingStatus, setloadingStatus] = useState(false);
     
     
    const initialState = [false, false, false,false];
    const [activeClasses, setActiveClasses]                   = useState(initialState)

    const ValorDonation=(index)=>{
            const auxValues = { ...values };
            const  active = [...initialState.slice(0, index), !initialState[index],initialState.slice(index + 1)].flat();
            setActiveClasses(active)

             let arr=[5,50,500,""];

            auxValues['valor'] =arr[index];
             
            setValues(auxValues)
    }


    

    useEffect(() => {
      (async () => {         
           API.donationsCaptable.findProjects(id).then(response => {
                values.description=response.name;
           }).catch(ret=> history.push("/donations"));;  
           
       }
      )()
 
    },[]);

    

    const getCep=(event)=>{ 
            let cep=event.target.value.replace(/\D/g, '');
            let validacep = /^[0-9]{8}$/;
           
            if (cep != "" && validacep.test(cep)) { 
                 API.cep.findCep(event.target.value).then(response =>{
                  
                  const auxValues = { ...values };
                  
                        auxValues["street"]   =response.logradouro;
                        auxValues["zipcode"]  =response.cep;
                        auxValues["district"] =response.bairro;
                        auxValues["city"]     =response.localidade;
                        auxValues["state"]    =response.uf;
                     
                     
                     setValues(auxValues);
                });
            }
    } 


    const setValue=(e)=>{
          
          const auxValues = { ...values };

          let name=e.target.name;

         
           if(name=="cpf")
              auxValues[name] =cpfMask(e.target.value)
           else if(name=="birthdate")   
              auxValues[name] =dataMask(e.target.value)
           else if(name=="cc_expiration")   
              auxValues[name] =validadeMask(e.target.value) 
           else if(name=="card_number")   
              auxValues[name] =cardMask(e.target.value)     
           else if(name=="phone")   
              auxValues[name] =phoneMask(e.target.value)                 
           else if(name=="valor")   
              auxValues[name] =valorMask(e.target.value) 
           else if(name=="cnpj")   
              auxValues[name] =cnpjMask(e.target.value)                               
           else
              auxValues[name] =e.target.value;

          
         
      
       setValues(auxValues)

 
        
    }

   

    async function objDonation(){
          let param={
                "project_id": id,
                "value":values.valor
          }

           return  await API.donations.DonationsProjects(id,param);

    }



    const travaBtnValor=()=>{
            var elems = document.getElementById("box-btn").getElementsByClassName("lg-light-btn");
              
            for (var i = 0; i < elems.length; i++) {
                elems[i].disabled=true;
            }

           document.getElementById("inp_valor").disabled=true;

    }


    const gerarBoleto=()=>{
        history.push('/donations/boleto/1');
    }


    const salvar=()=>{
     
      for(var val in values){
          if(values[val]==''){ 
                  //console.log(val);
                let elem=document.getElementById(val);
                    elem.style.display = "block"; 

                alert(elem.innerHTML);
                return false;
            }         
      }

        setloadingStatus(true);

        if(!donation)
             objDonation().then(response=>{
                   setDonation(response);
                   Checkout(response.id);
                   travaBtnValor();
             });

        else
          Checkout(false);
        
       
   }

   
   const Checkout=(id)=>{

      

      let dataExpiration=values.cc_expiration.split('/');

      let cnpj        = typeof(values.cnpj)!='undefined' ? values.cnpj : '';
      let razao_social= typeof(values.razao_social)!='undefined' ? values.razao_social :'';

     

     let param= {
        "donation": {
          "id": id ? id : donation.id,
          "order": {
            "description":values.description,
            "amount": values.valor,
            "payment": {
              "card": {
                "holder_name": values.holder_name,
                "expiration_month": dataExpiration[0],
                "expiration_year": dataExpiration[1],
                "card_number": values.card_number,
                "security_code": values.security_code	
              }	
            },
            "customer": {
              "first_name": values.first_name,
              "surname":   values.surname,
              "cpf": values.cpf,
              "birthdate": values.birthdate,
              "email": values.email,
              "phone": values.phone,
              "donation_empresa":donationEmpresa,
              "cnpj":cnpj,
              "razao_social":razao_social,
              "anonymous":donationType,
              "address": {
                "street": values.street,
                "number": values.number,
                "zipcode": values.zipcode.replace(/\D/g, ''),
                "district":values.district,
                "city": values.city,
                "state": values.state,
                "country": "BRL"
              }
            }
          }
        }      
      }

        console.log(param);

       API.donations.CheckoutProjects(param).then(response =>{
                 history.push("/donations/confirmed");
                 setloadingStatus(false);
                 
       }).catch(errs=>{
            alert("Erro ao processar sua doação, favor verificar os dados informados!");
            setloadingStatus(false);
       });  
    }
      



  return (
    <>
      <Loading spinning={loadingStatus} />
      <Header title={t("header.donations")} rightIcon={Notification} />

      
         <Styled.MobContainer>
                
                <p>Quanto você gostaria de doar?</p>
                <Styled.ContentButton id="box-btn">
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
                           textButton='Outro valor'   
                           onClick={e => ValorDonation(3)}
                          /> 
                </Styled.ContentButton>  

                <Styled.ContentForm>
                     <div style={activeClasses[3]? {display:"block"}: {display:"none"}} >
                      <div className="label">Valor</div>
                            <Input
                              placeholder={"Informe o valor"}
                              value={values.valor}
                              name={"valor"}
                              onChange={setValue}
                              id={"inp_valor"}                        
                            />
                           
                      </div>
                      <div className="erro" id="valor">Informe o valor</div>

                      <div className="label">Nome</div>
                      <Input
                        name={"first_name"}
                        onChange={setValue}  
                                               
                      />
                      <div className="erro" id="first_name">Informe seu nome</div>

                      <div className="label">Sobrenome</div>
                      <Input
                        name={"surname"}
                        onChange={setValue}                        
                      />
                       <div className="erro" id="surname">Informe o Sobrenome</div>

                    <div className="label">CPF</div> 
                    <Input
                        value={values.cpf}
                        name={"cpf"}
                        onChange={setValue}
                      />    
                       <div className="erro" id="cpf">Informe o CPF</div>            

                    <div className="label">Data de Nascimento</div> 
                    <Input 
                        value={values.birthdate}
                        name={"birthdate"}
                        onChange={setValue}
                      />  
                       <div className="erro" id="birthdate">Informe a data de Nascimento</div>                  

                    <div className="label">Email</div> 
                    <Input placeholder={"Seu email preferido"} name={"email"}   onChange={setValue}  />  
                    <div className="erro" id="email">Informe um email</div>  
                                  

                    <div className="label">Telefone</div> 
                    <Input value={values.phone} name={"phone"}   onChange={setValue}  />  
                    <div className="erro" id="phone">Infome o telefone</div>  
 
                  

                    {/*Endereço*/}
                    <div className="label">CEP</div> 
                    <Input   
                       value={valueCep}  
                       name={"zipcode"}
                       onChange={e => setCep(cepMask(e.target.value))}
                       onBlur={getCep}
                    />  
                    <div className="erro" id="zipcode">Informe o CEP</div>  

                    <div className="label">Endereço</div> 
                    <Input placeholder={"Rua/Avenida"} name={"street"} value={values.street}  /> 
                    <div className="erro" id="street">Informe o endereço</div>  


                    <div className="label">Número</div> 
                    <Input name={"number"}  onChange={setValue}  /> 
                    <div className="erro" id="number">Informe o Número</div>   

                    <div className="label">Complemento</div> 
                    <Input  name={"reference"} onChange={setValue}  />
                    <div className="erro" id="reference">Informe o Complemento</div>    

                    <div className="label">Bairro</div> 
                    <Input value={values.district}  name={"district"} onChange={setValue} /> 
                    <div className="erro" id="district">Informe o Bairro</div>  
                     

                    <div className="label">Cidade</div> 
                    <Input  value={values.city}   name={"city"} onChange={setValue} />  
                    <div className="erro" id="city">Informe a Cidade</div>
                    
                    <div className="label">Estado</div> 
                    <select className="select"  name={"state"} value={values.state} onChange={setValue}>
                          <option value="99"></option>
                          <option value="AC">AC</option>
                          <option value="AL">AL</option>
                          <option value="AP">AP</option>
                          <option value="AM">AM</option>
                          <option value="BA">BA</option>
                          <option value="CE">CE</option>
                          <option value="DF">DF</option>
                          <option value="ES">ES</option>
                          <option value="GO">GO</option>
                          <option value="MA">MA</option>
                          <option value="MT">MT</option>
                          <option value="MS">MS</option>
                          <option value="MG">MG</option>
                          <option value="PA">PA</option>
                          <option value="PB">PB</option>
                          <option value="PR">PR</option>
                          <option value="PE">PE</option>
                          <option value="PI">PI</option>
                          <option value="RJ">RJ</option>
                          <option value="RN">RN</option>
                          <option value="RS">RS</option>
                          <option value="RO">RO</option>
                          <option value="RR">RR</option>
                          <option value="SC">SC</option>
                          <option value="SP">SP</option>
                          <option value="SE">SE</option>
                          <option value="TO">TO</option>
                    </select>
                    <div className="erro" id="state">Infome o Estado</div>


                    <div className="switch">
                     <span>Doação anônima?</span>     Não <Switch  className="btn-switch"  onChange={setDonationType}/> Sim
                     <HelpCircle  color="white" size="24px"/>
                    </div>

                    <div className="switch">
                     <span>Doar como Empresa?</span>     Não <Switch  className="btn-switch"  onChange={setDonationEmpresa} /> Sim
                     <HelpCircle  color="white" size="24px"/>
                    </div>

                    <div style={donationEmpresa ? {display:"block"}: {display:"none"}} >
                        <div className="label">Razão Social</div>
                          <Input
                            name={"razao_social"}
                            onChange={setValue}  
                                                  
                          />
                          <div className="label">CNPJ</div>
                          <Input
                            name={"cnpj"}
                            value={values.cnpj}
                            onChange={setValue}   
                          />                      
                    </div>


               </Styled.ContentForm>
               
               <Styled.ContentFormaPagamento>
                   <div className="form-group">
                            <div className={fomarPagamento==0? "form-button-left active-btn":"form-button-left"} >
                                <Styled.ContentFormButton onClick={e =>setFomarPagamento(0)}>
                                  Boleto
                                </Styled.ContentFormButton>
                                
                            </div>
      
                            <div className={fomarPagamento==1? " form-button-right active-btn ":" form-button-right "}>
                                <Styled.ContentFormButton  onClick={e =>setFomarPagamento(1)}>
                                  Cartão de Crédito
                                </Styled.ContentFormButton>
                            </div>
                    </div> 
                   
                   <Styled.ContentFormaPagamentoBody className={fomarPagamento==0? " radius-right ":" radius-left"} >

                     <div style={fomarPagamento==0? {display:"block"}: {display:"none"}} >
                           <Button 
                              styleButton='sm-light-btn'  
                              textButton='Gerar Boleto'
                              className="full-light-btn"  
                              onClick={gerarBoleto}                                                                      
                            />

                     </div>
                     <div style={fomarPagamento==1? {display:"block"}: {display:"none"}} >

                            <div className="info">
                                <div className="icon">
                                            <LockOutline color="white" size="20px"/>
                                </div> 
                                <h2>Ambiente seguro</h2>
                                <p>Seus dados bancários não serão compartilhados com a ONG e o CovidZero.</p>
                            </div>
                            
                            <div className="label">Número do Cartão</div> 
                            <Input
                                placeholder={"Número do Cartão"}
                                value={values.card_number}
                                name={"card_number"}
                                onChange={setValue}
                              />  
                              <div className="erro" id="card_number">Informe o  Número do Cartão</div>

                            <div className="label">Nome do titular</div> 
                            <Input
                                placeholder={"Nome conforme impresso no cartão"}
                                name={"holder_name"}
                                onChange={setValue}
                              />  
                              <div className="erro" id="holder_name">Informe o Nome do titular</div>

                            <div className="form-group form-group-inp">
                                <div>
                                    <div className="label">Validade</div> 
                                    <Input
                                        value={values.cc_expiration}
                                        name={"cc_expiration"}
                                        onChange={setValue}
                                      /> 
                                      <div className="erro" id="cc_expiration">Informe data de Validade</div>
                                </div>
                                <div>
                                    <div className="label">Código de Segurança</div> 
                                    <Input
                                        value={values.security_code}
                                        placeholder={"CVV"} 
                                        maxLength={"3"}
                                        name={"security_code"}
                                        onChange={setValue}
                                      /> 
                                      <div className="erro" id="security_code">Informe o código de Segurança</div>
                                </div>
                            </div> 

                            <Button 
                              styleButton='sm-light-btn'  
                              textButton='CONFIRMAR E DOAR'
                              className="full-light-btn"  
                              onClick={salvar}                                                                      
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

               </Styled.ContentFormaPagamento>   

         
      

         </Styled.MobContainer>

    </>
  ); 

}