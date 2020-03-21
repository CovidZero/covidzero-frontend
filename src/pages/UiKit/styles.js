import styled from "styled-components";

export const ContainerBox = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 1em;
  padding: 1em;
  border: 1px solid ${props => props.theme.colors.primaryDark};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  padding: 0;
  margin: 0;
  color: white;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;
  display: flex;  

  ::-webkit-input-placeholder {
      font-style: italic;
  }
  :-moz-placeholder {
      font-style: italic;  
  }
  ::-moz-placeholder {
      font-style: italic;  
  }
  :-ms-input-placeholder {  
      font-style: italic; 
  }
`;

export const InputIcon = styled.div`
  min-height: 16px;
  min-width: 16px;
  background: white;
  margin-right: .25em;
`