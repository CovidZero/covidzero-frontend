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
import ProjectsJson from "./projects.json";

const moment = require('moment');


export default function CheckoutCartao() {
    const [t] = useTranslation();
    let { id:storeId } = useParams();

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
      state: ""
}

  const initalCard={
        card_number:"",
        holder_name: "",
        security_code:"",
        cc_expiration:""
  }


    const [valueCep, setCep]                    = useState("")
    const [values, setValues]                   = useState(inital);
    const [valuesCard, setValuesCard]           = useState(initalCard);
    const [donationType, setDonationType]       = useState(false);
    const [donationEmpresa, setDonationEmpresa] = useState(false);
    const [paymentType, setPaymentType]         = useState(0);
    const [loadingStatus, setloadingStatus]     = useState(false);
 

    const initalParamPreme={
          storeId:storeId,
          customerId:"",
          cardId:"",
          token:""
    }
    
    const [paramPreme,setParamPreme]       = useState(initalParamPreme);
    const initialState = [false, false, false,false];
    const [activeClasses, setActiveClasses]          = useState(initialState)

    const ValorDonation=(index)=>{
            const auxValues = { ...values };
            const active    = [...initialState.slice(0, index), !initialState[index],initialState.slice(index + 1)].flat();
            let arr=[5,50,500,""];


            setActiveClasses(active) 
           

            auxValues['valor'] =arr[index];
             
            setValues(auxValues)
    }


   

    useEffect(() => {
          
          API.donationsPreme.Authentication().then(response => {
              setParamPreme({
                    ...paramPreme,
                    token:response.token
                  });
          });   
                
        

          const projectsJson=ProjectsJson.find(({ id }) => id==storeId);
 
               if(typeof projectsJson !="undefined"){
                    setValues({
                      ...values,
                      description:projectsJson.name
                    });
               }else{
                    history.push("/donations");
               }
      
 
    },[]);


    

    
    useEffect(() => {
          
          if(paramPreme.customerId>0 && paramPreme.cardId==""  && paymentType==0)
                CreateCard(); 

          else if(paramPreme.customerId>0 && paymentType==1) 
                CreateOrder();     

   },[paramPreme.customerId]);


   useEffect(() => {
          
    if(paramPreme.cardId>0)
        CreateOrder();
          
   },[paramPreme.cardId]);
    



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
          const { name, value } = e.target;
           

         
           if(name=="cpf")
              auxValues[name] =cpfMask(value)
           else if(name=="birthdate")   
              auxValues[name] =dataMask(value)
           else if(name=="cc_expiration")   
              auxValues[name] =validadeMask(value) 
           else if(name=="card_number")   
              auxValues[name] =cardMask(value)     
           else if(name=="phone")   
              auxValues[name] =phoneMask(value)                 
           else if(name=="valor")   
              auxValues[name] =valorMask(value) 
           else if(name=="cnpj")   
              auxValues[name] =cnpjMask(value)                               
           else
              auxValues[name] =value;

       setValues(auxValues)
    
    }
 

    const setValueCard=(e)=>{
          
      const auxValues = { ...valuesCard };
      const { name, value } = e.target;
        
       
       if(name=="cc_expiration")   
          auxValues[name] =validadeMask(value) 
       else if(name=="card_number")   
          auxValues[name] =cardMask(value)     
       else
          auxValues[name] =value;                           
       

      setValuesCard(auxValues)

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




   
   async function CreateCustomer(){

        let cnpj        = typeof(values.cnpj)!='undefined' ? values.cnpj : '';
        let razao_social= typeof(values.razao_social)!='undefined' ? values.razao_social :'';

        let customer= {
            "firstName": values.first_name,
            "surname":   values.surname,
            "cpf": values.cpf.replace(/\D/g, ''),
            "birthdate": moment(values.birthdate, "DD/MM/YYYY").format("YYYY-MM-DD"),
            "email": values.email,
            "phone": values.phone,
            "donationEmpresa":donationEmpresa,
            "cnpj":cnpj,
            "razaoSocial":razao_social,
            "anonymous":donationType,
            "address": {
                  "street": values.street,
                  "number": values.number,
                  "zipcode": values.zipcode.replace(/\D/g, ''),
                  "reference":values.reference,
                  "district":values.district,
                  "city": values.city,
                  "state": Number(values.state),
                  "country": 0
            }
        }
       
        try {
              const response = await API.donationsPreme.CreateCustomer(paramPreme, customer);                  
                    
              setParamPreme({
                ...paramPreme,
                  customerId:response.id
              });

        }catch (err) {
            alert('Ocorreu um erro, tente novamente.');
            setloadingStatus(false);
        }
        
   } 
   
   

  async function CreateCard(){
        let dataExpiration=valuesCard.cc_expiration.split('/');

        let card= {
            "holderName": valuesCard.holder_name,
            "expirationMonth":Number(dataExpiration[0]),
            "expirationYear": Number(dataExpiration[1]),
            "cardNumber": valuesCard.card_number.replace(/\D/g, ''),
            "securityCode": valuesCard.security_code	
        }	

       
        try {
              const response = await API.donationsPreme.CreateCard(paramPreme,card); 

              setParamPreme({
                ...paramPreme,
                  cardId:response.id
              });

        }catch (err) {
              alert('Ocorreu um erro, tente novamente.');
              setloadingStatus(false);
        }      
      
  }


  async function CreateOrder(){

        let amount = 0;
        if(isNaN(values.valor)) {
          amount = parseFloat(values.valor.replace(",","."));
        }
        else {
          amount = values.valor;
        }
    
        let  data = new Date(Date.now() + 2*86400000);


        let order= {
              "amount": amount,
              "description":values.description,              
              "payment": {
                "type": paymentType,
                "cardId":paramPreme.cardId,
                "dueDate":paymentType==1 ? data.toLocaleDateString('fr-CA') : "",
                "installments": 1
              }
        }
       
        try{
            const response = await API.donationsPreme.CreateOrder(paramPreme,order); 
            
            if(paymentType==1)
                 history.push(`/donations/boleto/preme/stores/${storeId}/orders/${response.number}`);
          

            if(paymentType==0)
                history.push(`/donations/confirmed/preme/stores/${storeId}/orders/${response.number}`);
             

            
             

        }catch (err) {
          alert('Ocorreu um erro, tente novamente.');
          setloadingStatus(false);
        } 
  }



  async function Checkout(){
    

      for(var val in values){
              if(values[val]==''){ 
                    let elem=document.getElementById(val);
                        elem.style.display = "block"; 

                    alert(elem.innerHTML);
                    return false;
                }         
      }  


      if(paymentType==0){
        for(var val in valuesCard){
            if(valuesCard[val]==''){ 
                let elem=document.getElementById(val);
                    elem.style.display = "block"; 

                alert(elem.innerHTML);
                return false;
            }         
        }  
  }

         
         setloadingStatus(true);

         const response = await API.donationsPreme.ListCustomer(paramPreme,values.cpf.replace(/\D/g, '')); 
         
         

         if(response.length > 0) {
            setParamPreme({
              ...paramPreme,
                 customerId:response[0].id,
                 cardId:response[0].card.id
            });
        }    
        else {
          await CreateCustomer();
        }
         
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
                          <option value="0">AC</option>
                          <option value="1">AL</option>
                          <option value="2">AP</option>
                          <option value="3">AM</option>
                          <option value="4">BA</option>
                          <option value="5">CE</option>
                          <option value="6">DF</option>
                          <option value="7">ES</option>
                          <option value="8">GO</option>
                          <option value="9">MA</option>
                          <option value="10">MT</option>
                          <option value="11">MS</option>
                          <option value="12">MG</option>
                          <option value="13">PA</option>
                          <option value="14">PB</option>
                          <option value="15">PR</option>
                          <option value="16">PE</option>
                          <option value="17">PI</option>
                          <option value="18">RJ</option>
                          <option value="19">RN</option>
                          <option value="20">RS</option>
                          <option value="21">RO</option>
                          <option value="22">RR</option>
                          <option value="23">SC</option>
                          <option value="24">SP</option>
                          <option value="25">SE</option>
                          <option value="26">TO</option>
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
                     {/*
                            <div className={paymentType==1? "form-button-left active-btn":"form-button-left"} >
                                <Styled.ContentFormButton onClick={e =>setPaymentType(1)}>
                                  Boleto
                                </Styled.ContentFormButton>
                                
                            </div>
                     */}
                            <div className={paymentType==0? " form-button-right active-btn ":" form-button-right "}>
                                <Styled.ContentFormButton  onClick={e =>setPaymentType(0)}>
                                  Cartão de Crédito
                                </Styled.ContentFormButton>
                            </div>
                    </div> 
                   
                   <Styled.ContentFormaPagamentoBody className={paymentType==1? " radius-right ":" radius-left"} >

                     <div style={paymentType==1? {display:"block"}: {display:"none"}} >
                           <Button 
                              styleButton='sm-light-btn'  
                              textButton='Gerar Boleto'
                              className="full-light-btn"  
                              onClick={Checkout}                                                                      
                            />

                     </div>
                     <div style={paymentType==0? {display:"block"}: {display:"none"}} >

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
                                value={valuesCard.card_number}
                                name={"card_number"}
                                onChange={setValueCard}
                              />  
                              <div className="erro" id="card_number">Informe o  Número do Cartão</div>

                            <div className="label">Nome do titular</div> 
                            <Input
                                placeholder={"Nome conforme impresso no cartão"}
                                name={"holder_name"}
                                onChange={setValueCard}
                              />  
                              <div className="erro" id="holder_name">Informe o Nome do titular</div>

                            <div className="form-group form-group-inp">
                                <div>
                                    <div className="label">Validade</div> 
                                    <Input
                                        value={valuesCard.cc_expiration}
                                        name={"cc_expiration"}
                                        onChange={setValueCard}
                                      /> 
                                      <div className="erro" id="cc_expiration">Informe data de Validade</div>
                                </div>
                                <div>
                                    <div className="label">Código de Segurança</div> 
                                    <Input
                                        value={valuesCard.security_code}
                                        placeholder={"CVV"} 
                                        maxLength={"3"}
                                        name={"security_code"}
                                        onChange={setValueCard}
                                      /> 
                                      <div className="erro" id="security_code">Informe o código de Segurança</div>
                                </div>
                            </div> 

                            <Button 
                              styleButton='sm-light-btn'  
                              textButton='CONFIRMAR E DOAR'
                              className="full-light-btn"  
                              onClick={Checkout}                                                                      
                            />

                       </div>

                      <div  className="termos">
                            <div className="logo-preme">
                                <p>Pagamento processado por</p> 
                                <a href="https://www.premepay.com/pt-br?utm_source=covidzero" target="_blank">
                                     <img  src={require("~/assets/images/logo-preme.svg")}/>
                                </a>
                            </div>
                                <p>O pagamento será processado por Preme e estará disponível em sua fatura como CovidZero. Ao realizar o pagamento você concorda com <a href="https://premepay.com/pt-br/terms-and-conditions?utm_source=covidzero" target="_blank">os termos de uso.</a></p>
                      </div>

                 </Styled.ContentFormaPagamentoBody>

               </Styled.ContentFormaPagamento>   

         
      

         </Styled.MobContainer>

    </>
  ); 

}