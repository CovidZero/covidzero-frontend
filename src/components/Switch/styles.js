import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  padding: 3px;
`;

export const Track = styled.div`
  position: relative;
  width: 34px;
  height: 14px;
  border-radius: 7px;
  background-color: #808080;
`;

export const Thumb = styled.button.attrs({ type: 'button'})`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #F1F1F1;
  box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);

  position: absolute;
  top: 50%;
  left: 0;
  transform:
    translateY(-50%)
    translateX(${({active}) => active ? '17px' : '-3px'});
  transition: transform ease-in 250ms;

  :focus {
    outline:0;
  }
`;
