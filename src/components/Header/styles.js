import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
`;

export const Title = styled.span`
  color: ${props => props.theme.colors.textColor};
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  margin-left: 10px;
`;

export const AlignItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  height: 24px;
  alt: "icon";
`;
