import styled from "styled-components";

export const DotDefault = styled.div`
    background-color: ${props => props.theme.colors.dotDefault};
    border: 1px solid ${props => props.theme.colors.dotBorder};
    box-sizing: border-box;
    height: 8px;
    width: 8px;
    border-radius:50%;
`;

export const DotYou = styled.div`
    background-color: ${props => props.theme.colors.dotYou};
    border: 1px solid ${props => props.theme.colors.dotBorder};
    box-sizing: border-box;
    height: 8px;
    width: 8px;
    border-radius:50%;
`;

export const DotSuspect = styled.div`
    background-color: ${props => props.theme.colors.dotSuspect};
    border: 1px solid ${props => props.theme.colors.dotBorder};
    box-sizing: border-box;
    height: 8px;
    width: 8px;
    border-radius:50%;
`;

export const DotRecovered = styled.div`
    background-color: ${props => props.theme.colors.dotRecovered};
    border: 1px solid ${props => props.theme.colors.dotBorder};
    box-sizing: border-box;
    height: 8px;
    width: 8px;
    border-radius:50%;
`;

export const DotConfirmed = styled.div`
    background-color: ${props => props.theme.colors.dotConfirmed};
    border: 1px solid ${props => props.theme.colors.dotBorder};
    box-sizing: border-box;
    height: 8px;
    width: 8px;
    border-radius:50%;
`;

export const DotHidden = styled.div`
    display: none;
`;

export const Style = { DotDefault, DotYou, DotSuspect, DotRecovered, DotConfirmed, DotHidden };
