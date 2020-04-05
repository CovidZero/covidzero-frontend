import styled from "styled-components";

const CircleStyle = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width || "80"}px;
    height: ${props => props.height || "80"}px;
    ${props => props.type === 'you' && `background-color: ${props.theme.colors.dotYou}25;`}
    ${props => props.type === 'suspect' && `background-color: ${props.theme.colors.dotSuspect}25;`}
    ${props => props.type === 'confirmed' && `background-color: ${props.theme.colors.dotConfirmed}25;`}
    ${props => props.type === 'recovered' && `background-color: ${props.theme.colors.dotRecovered}25;`}
`;


const CirclePointsText = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: #FFF;
  letter-spacing: 1px;
`;

export const Style = { CircleStyle, CirclePointsText };