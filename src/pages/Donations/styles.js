import styled from "styled-components";


export const Container = styled.section`

    @media all and (min-width: 600px) {
                display: flex;
                padding:24px;
            
            > div{
                margin:10px;
                width: 509px;
                
            }
    }

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
   }

   .erro{
     color: #E34340;
     font-size:12px;
     display:none;
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
            color: #FCFCFC;

            &:active{
                background: #ccc;
                color: #EE7764;
            }
     }


     
     .lg-light-btn + .lg-light-btn{
         margin-left:8px;
     }

     .btn-txt{
         font-weight: bold;          
         line-height: 18px;
         text-transform: unset; 
     }

     .active{
        background: #ccc;
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
`;

export const ContentFormButton = styled.div`
    width: 164px;
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


export const ContentFormCartao = styled.div`
        background: #232328; 
        border: 1px solid #2E2E32;
        box-sizing: border-box;
        border-radius: 4px;
        padding:8px;
        

     .label{
        margin:0.5em 0;
        font-size:14px;
      }

      .form-group{
          display:flex;
          overflow: hidden;
          position: relative;
          width: 100%;
          margin-bottom:24px;
      }

      .form-group > div{
          flex:50%;
          overflow: hidden;
      }

      .form-group>div + div{
          margin-left:15px;
      }

`;