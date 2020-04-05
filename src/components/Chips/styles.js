import styled from "styled-components";

export const ChipStyle = styled.div`
    background: ${props => props.theme.colors.primary};
    color: #fff;
    font-size: 1em;
    padding: 8px 16px;
    margin: 0 5px;
    line-height: 18px;
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    min-height: ${props => props.height || `47`}px;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    ${props => props.onClick && `cursor: pointer;`}
`;

export const ColumnDot = styled.div`
    padding-right: 8px;
`;

export const Style = { ChipStyle, ColumnDot };