import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 840px) {
    height: 100%;
    top: 0;
    width: 100%;
    display: flex; 
    flex-flow: row-reverse;
    p{
      display:none;
    }
  }
  @media (max-width: 840px){
    p{
      font-size:16;
      color: #fff;
      font-weight: bold
    }
  }
`;

export const ContainerMap = styled.div`
  @media (min-width: 840px) {
    flex: 100%;
    margin-top: 5%;
  }
  @media (max-width: 840px) {
    display: none;
  }
`;


