import styled from "styled-components";

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

export const ContainerMap = styled.div`
  height:100vh;
  width:100vw;

  @media (max-width:840px) {
    height:70vh;
  }

   

 svg {
  touch-action: pan-left pan-down;
  circle {
    transition: all .25s ease-in-out;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.25);
    }

    &:active {
      transform: scale(1.75);
    }
  }
}
`;

export const MobileBottomIndicators = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    top: 75vh;
    width: 100%;
  }
`;
