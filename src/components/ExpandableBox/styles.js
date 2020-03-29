import styled from "styled-components";

export const ExpandableBox = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 1em;
  border: 1px solid ${props => props.theme.colors.primaryDark};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
`;
export const ExpandableBoxHeader = styled.div`
  font-size: 12px;
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  padding: 0 1em;
  min-height: 50px;
`;
export const ExpandableBoxHeaderIcon = styled.div`
  position: absolute;
  right: 1em;
  cursor: pointer;
`;
export const ExpandableBoxBody = styled.div`
  display: flex;
`;
