import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  font-family: "Ubuntu";
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "#f04d57";
  background: papayawhip;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
`;
