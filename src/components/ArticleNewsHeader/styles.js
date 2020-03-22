import styled from "styled-components";

export const ArticleBoxImage = styled.div`
    height: 134px;
    background-repeat: no-repeat;
    background-size: 100% 134px;
    width: 100%;
    display: flex;
`;

export const ArticleBoxTitle = styled.label`
    color: #fff;
    padding: 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    background: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
`;

export const Style = { ArticleBoxTitle, ArticleBoxImage };