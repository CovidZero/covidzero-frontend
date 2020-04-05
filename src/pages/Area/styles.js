import styled from "styled-components";

export const ContainerMap = styled.div`
    width: 100%;
    height: 93vh;

    @media (max-width: 600px){
      height: 77vh;
    }

    /* iPhone X , XS, 11 Pro */
    @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      height: 71vh;
    }

    /* iPhone XR, 11 */
    @media only screen and (min-device-width : 414px) and (max-device-height : 896px) and (-webkit-device-pixel-ratio : 2) {
      height: 74vh;
    }

    /* iPhone XS Max, 11 Pro Max */
    @media only screen and (min-device-width : 414px) and (max-device-height : 896px) and (-webkit-device-pixel-ratio : 3) {
      height: 75vh;
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