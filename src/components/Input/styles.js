import styled from "styled-components";

export const ContainerBox = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 1em;
  border: 1px solid ${props => props.theme.colors.primaryDark};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items:center;
  padding-left: 1em;
  padding-right: 1em;
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
`;

export const InputIcon = styled.div`
  margin-right: .5em;
`
