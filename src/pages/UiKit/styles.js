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
`;

export const InputIcon = styled.div`
  min-height: 16px;
  min-width: 16px;
  background: white;
  margin-right: .25em;
`



export const ExpandableBox = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 1em;
  padding: 1em;
  border: 1px solid ${props => props.theme.colors.primaryDark};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
`
export const ExpandableBoxHeader = styled.div`
  font-size: 12px;
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
`
export const ExpandableBoxHeaderIcon = styled.div`
  position: absolute;
  right:0px;
`
export const ExpandableBoxBody = styled.div`
  display: flex;
  margin-top: 1em;
`

