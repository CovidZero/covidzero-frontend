import styled from 'styled-components';

export const Container = styled.section`
    width: 90vw;
    margin: 1em auto;
    display: flex;
    flex-wrap: wrap;
`;

export const InternContainer = styled.div`
    display: flex;
`;

export const FakeNews = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: ${props => props.theme.borderRadius};
    background: #232328;
    padding: 16px;

    p{
        color: ${props => props.theme.colors.titleCard};
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
    }

    @media all and (min-width: 768px) {
        flex-direction: row;
        margin: 0 10px;
    }
`;

export const FakeNewsHeader = styled.div`

    @media all and (min-width: 768px) {
        width: 290px;
        margin-right: 90px;
    }
    
`;

export const FakeTitle = styled.h2`
    color: ${props => props.theme.colors.titleCard};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.25rem;
    display: none;
    margin-top: 0px;

    @media all and (min-width: 768px) {
        display: block;
    }
`;

export const Notification = styled(FakeNews)`
    width: 30%;
    display: none;

    @media all and (min-width: 768px) {
        display: block;
}
    
`;

export const DivTitle = styled.div`
    width: 100%;
    padding: 0 10px;
    display: none;

    hr{
        border: 1px solid #222222;
    }

    @media all and (min-width: 768px) {
        display: block;
    }
`;

export const PageTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    line-height: 3rem;
    margin-bottom: 0px;
`;


