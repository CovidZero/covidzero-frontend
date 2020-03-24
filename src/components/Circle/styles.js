import styled from "styled-components";

export const CircleStyle = styled.div`
    border-radius: 50%;
    display: flex;
    min-height: 80px;
    min-width: 80px;
    align-items: center;
    justify-content: center;
    ${props => props.type === 'you' && `background-color: ${props.theme.colors.dotYou}25`}
    ${props => props.type === 'suspect' && `background-color: ${props.theme.colors.dotSuspect}25`}
    ${props => props.type === 'confirmed' && `background-color: ${props.theme.colors.dotConfirmed}25`}
    ${props => props.type === 'recovered' && `background-color: ${props.theme.colors.dotRecovered}25`}
`;

export const Style = { CircleStyle };