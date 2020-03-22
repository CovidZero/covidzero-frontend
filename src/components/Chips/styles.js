import styled from "styled-components";

export const ChipStyle = styled.div`
    background: ${props => props.theme.colors.primary};
    color: #fff;
    font-size: 1em;
    padding: 8px 16px;
    line-height: 18px;
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    min-height: 47px;
    flex-direction: row;
    align-items: center;
    width: fit-content;
`;

export const ColumnDot = styled.div`
    padding-right: 8px;
`;

export const Style = { ChipStyle, ColumnDot };