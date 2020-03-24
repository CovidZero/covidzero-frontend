import styled from "styled-components";

const CircleStyle = styled.div`
    border-radius: 50%;
    display: flex;
    height: 80px;
    width: 80px;
    align-items: center;
    justify-content: center;
    ${props => props.type === 'you' && `background-color: ${props.theme.colors.dotYou}25`}
    ${props => props.type === 'suspect' && `background-color: ${props.theme.colors.dotSuspect}25`}
    ${props => props.type === 'confirmed' && `background-color: ${props.theme.colors.dotConfirmed}25`}
    ${props => props.type === 'recovered' && `background-color: ${props.theme.colors.dotRecovered}25`}
`;


const CirclePointsText = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: #FFF;
  letter-spacing: 1px;
`;

export const Style = { CircleStyle, CirclePointsText };