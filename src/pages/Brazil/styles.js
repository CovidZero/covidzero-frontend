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
  @media (min-width: 840px) {
    flex: 100%;
  }
`;

export const MobileBottomIndicators = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    bottom: 0; /* Must be 0 because in physical devices there is the browser header */
    width: 100%;
  }
`;
