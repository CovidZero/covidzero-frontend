import styled, { css } from 'styled-components';

export const SmallFilledButton = styled.button`
    text-transform: uppercase;
    border: 0px;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 500;
    ${props =>
        props.disabled
        ? css`background: rgba(238, 119, 100, .50);`
        : css`background: #EE7764;`
    };
    ${props => 
        props.disabled
        ? css`color: rgba(245, 245, 245, .50);`
        : css`color: #FCFCFC;`
    };
    height: 32px;
    ${props =>
        props.disabled
        ? css`cursor: not-allowed;`
        : css`cursor: pointer;`
    };
    outline: none;
    margin: 10px;

    &:active{
        background: #E06653;
    }
`;

export const MediumFilledButton = styled(SmallFilledButton)`
    padding: 10px 20px;
    font-size: 16px;
    height: 40px;
`;

export const LargeFilledButton = styled(SmallFilledButton)`
    padding: 15px 24px;
    font-size: 16px;
    height: 48px;
`;


export const BackgroundDiv = styled.div`
    background: #303030;
`;



export const SmallUnfiledButton = styled.button`
    background: transparent;
    padding: 6px 16px;
    text-transform: uppercase;
    border: 0px;
    border-radius: 4px;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 500;
    ${props => 
        props.disabled
        ? css`box-shadow: 0 0 0 1px rgba(252, 252, 252, .50) inset;`
        : css`box-shadow: 0 0 0 1px #FCFCFC inset;`
    };
    ${props => 
        props.disabled
        ? css`color: rgba(252, 252, 252, .50);`
        : css`color: #FCFCFC;`
    };
    height: 32px;
    ${props =>
        props.disabled
        ? css`cursor: not-allowed;`
        : css`cursor: pointer;`
    };
    outline: none;
    margin: 10px;

    &:active{
        background: #fff;
        color: #EE7764;
    }
`;

export const MediumUnfiledButton = styled(SmallUnfiledButton)`
    padding: 10px 20px;
    font-size: 16px;
    height: 40px;
`;

export const LargeUnfiledButton = styled(SmallUnfiledButton)`
    padding: 15px 24px;
    font-size: 16px;
    height: 48px;
`;


export const TextButton = styled.button`
    background: transparent;
    padding: 6px 0px;
    text-transform: uppercase;
    border: 0px;
    letter-spacing: 1px;
    font-size: ${props => props.size + 'px'};
    font-weight: 500;
    outline: none;
    ${props => 
        props.disabled
        ? css`color: rgba(238, 119, 100, .50);`
        : css`color: #EE7764;`
    };

    ${props =>
        props.disabled
        ? css`cursor: not-allowed;`
        : css`cursor: pointer;`
    };

    &:active{
        color: #FA8875;
    }
`;
