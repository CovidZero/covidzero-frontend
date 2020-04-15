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
    position: relative;
    bottom: 9vh;
    width: 100%;
  }

  @media screen and (device-width: 768px) {
    position: relative;
    width: 90%;
  }

  /* iPad Pro 12.9" */
  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 1024px)
    and (max-device-width: 1366px)
    and (-webkit-min-device-pixel-ratio: 2) {
      position: relative;
      bottom: 9vh;
      width: 100%;
  }
`;

export const ContainerChips = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;

  /* iPhone/iPad */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px) {
      /*max-width: 90%;
      margin-left: auto;
      margin-right: auto;*/
      justify-content: space-between;
      font-size: 0.54em;
  }

  @media only screen
  and (min-width: 360px)
  and (max-width: 640px) {
    /*max-width: 90%;
    margin-left: auto;
    margin-right: auto;*/
    justify-content: space-between;
    font-size: 0.6em;
  }
`;

export const ContainerDiv = styled.div`
    background: #282731;
    color: #fff;
    font-size: 1em;
    padding: 8px 16px;
    margin: 0 5px;
    line-height: 18px;
    border-radius: 8px;
    display: flex;
    min-height: 10px;
    flex-direction: row;
    align-items: center;
    width: fit-content;

    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 568px) {
        width: 100%;
        justify-content: center;
      }
`;