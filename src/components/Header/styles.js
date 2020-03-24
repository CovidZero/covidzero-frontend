import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.header.heigth};
  padding: 0 20px;

  @media all and (min-width: 768px) {
    height: ${props => props.theme.header.largeHeigth};
  }
`;

export const Title = styled.span`
  color: ${props => props.theme.colors.textColor};
  font-weight: bold;
  font-size: ${props => props.theme.header.title};
  line-height: 24px;
  letter-spacing: 1px;
  margin-left: 10px;

  @media all and (min-width: 768px) {
    font-size: ${props => props.theme.header.largeTitle};
  }
`;

export const AlignItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  height: 24px;
  alt: "icon";
`;

export const LeftIcon = styled(Icon)`
  @media all and (min-width: 768px) {
    display: none;
  }
`;
