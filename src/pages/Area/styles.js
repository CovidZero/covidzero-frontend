import styled from "styled-components";

export const ContainerMap = styled.div`
    width: 100%;
    height: 95vh;

    @media (max-width: 600px){
    }
`;

export const Container = styled.section`
  @media (min-width: 840px) {
    height: 100%;
    overflow: hidden;
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: row-reverse;
  }
`;