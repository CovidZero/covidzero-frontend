import styled from "styled-components";


export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: minmax(100px, auto);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    padding:24px;

    /*@media all and (min-width: 600px) {
                display: block;
                padding:24px;
                
            > div{
                margin:10px;
                width: 580px;
                display:inline-flex;
                
                
            }
    }*/

    @media (max-width: 839px) and (min-width: 480px){
        padding:16px;
    }    

    @media (max-width: 479px){
        padding:16px;
    }
`;


export const MobContainer = styled.section`
   width:375px;
   margin:0 auto;
   padding:0 16px;

   .GridCardtats {
       padding: 24px 0 5px;
   }

   .donation-stats{
       padding:8px;
   }
   .full-light-btn{
        width:100%;
        padding: 15px 24px;
        font-size: 16px;
        height: 48px;
        background: #FFF;
   }

   .erro{
     color: #E34340;
     font-size:12px;
     display:none;
   }


   .termos{
          margin-top:25px;
          font-size: 10px;
          line-height: 16px;
          color: #BDBDBD;
      }

      .termos .logo-preme{
          text-align:center;
      }

      .termos .logo-preme img{
          max-width: 60px;
      }

      .termos .logo-preme p{
          margin-bottom:4px;
          font-weight: 300;
          font-size: 12px;
          line-height: 18px;
      }


`;

export const ContentImg = styled.div`
   width:375px;
   margin:0 auto;
   position:relative;

   .title-img{
        position: absolute;
        bottom: 20px;
        left: 16px;
   }
   img{ 
        height: 141px;
        width: 100%;
        object-fit: cover;
        opacity:0.5;
        
   }
`;

export const ContentText = styled.div`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #BDBDBD;
    overflow-wrap: break-word;
    margin-bottom:25px;
`;


// checkout
export const ContentButton = styled.div`
     
     .lg-light-btn{
            padding: 13px 14px;
            font-size: 16px;
            letter-spacing:0px;
            height: 48px;
            background:#2E2E32;
            box-shadow: initial;
            color: #FFF;

            &:active{
                background: #FFF;
                color: #EE7764;
            }
     }


     
     .lg-light-btn + .lg-light-btn{
         margin-left:8px;
     }

     .btn-txt{        
         line-height: 18px;
         text-transform: unset; 
     }

     .active{
        background: #FFF;
        color: #EE7764;
     }
`;

export const ContentForm = styled.div`
      margin:1em 0;

      .label{
        margin:0.5em 0;
        font-size:14px;
      }

      select{
            background: #282731;
            color: #fff;
            font-size: 1em;
            border: 1px solid #16161B;
            border-radius: 8px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            height: 48px;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-left: 1em;
            padding-right: 1em;
            width: 100%;
      }

      .switch{
         font-size: 14px;
         line-height: 24px;
         letter-spacing: 1px;
         color: #BDBDBD;
         margin-top:24px;
         position:relative;
      }
      .switch span{
          padding-right:16px;
      }
      .switch >div{
          padding:0 10px;
      }
      .switch svg{
          position:absolute;
          right:19px;
      }
`;

export const ContentFormButton = styled.div`
    height: 64px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #2E2E32;    
    opacity: 0.85;
    border-radius: 4px;
    padding:1em;
    margin-bottom:4px;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;

    .icon{
        position:absolute;
        right:1em;
        top:1em;
    }

`;


export const ContentFormaPagamento = styled.div`
        position:relative;
        box-sizing: border-box;

       
     .label{
        margin:0.5em 0;
        font-size:14px;
      }

      .form-group{
          display:flex;
          overflow: hidden;
          position: relative;
          width: 100%;
          top: -2px;
          z-index: 1;
      }

      .form-group .form-button-left{
            background: #16171c;
            padding: 8px;
            border-bottom-right-radius: 4px; 
            font-weight: bold;
      }
   

      .form-group .form-button-right{
           background: #16171c;  
           padding: 8px;
           border-bottom-left-radius: 4px;                  
           font-weight: bold;
      }
      .form-group .form-button-left div,
      .form-group .form-button-right div{
            color:#BDBDBD;
        }

      .form-group .active-btn{
            background: #232328;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border: 1px solid #2E2E32;
            border-bottom: 0;
            color:#F5F5F5;
      }

      .form-group .active-btn div{
        color:#F5F5F5;

      }

      .form-group .active-right{
            background: #232328;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border: 1px solid #2E2E32;
            border-bottom: 0;
      }
      
      
      .form-group > div{
          flex:50%;
          overflow: hidden;
      }

      .form-group-inp>div + div{
          margin-left:15px;
      }
      .form-group-inp{
          margin-bottom:24px;
      }


      .radius-right{
          border-top-right-radius:8px;
      }
 
      .radius-left{
          border-top-left-radius:8px;
      }
     


      .info{
            padding: 5px 0;
        }


      .info h2{
        font-size: 14px;
        line-height: 24px; 
        letter-spacing: 1px;
        color: #F5F5F5;
        margin:0;
        margin-left: 24px;
      }
      .info p{
         font-weight: 300;
         font-size: 10px;
         line-height: 16px;
         color: #BDBDBD;
         margin:0;
         
      }

      .info .icon{
        position: absolute;
      }


`;

export const ContentFormaPagamentoBody = styled.div`
          position:relative;
          background: #232328;
          padding:8px;
          border-radius: 4px;
          border: 1px solid #2E2E32;
          margin-top: -4px;

`;