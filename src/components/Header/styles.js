import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.header.heigth};
  padding: 0 20px;

  @media all and (min-width: 600px) {
    height: ${props => props.theme.header.largeHeigth};
  }
`;

export const Title = styled.span`
  color: ${props => props.theme.colors.textColor};
  font-size: ${props => props.theme.header.title};
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 1px;
  margin-left: 10px;

  @media all and (min-width: 600px) {
    color ${props => props.theme.colors.largeHeaderTitle};
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
  @media all and (min-width: 600px) {
    display: none;
  }
`;

export const AlignRight = styled.div`
  display: flex;
  > * {
    margin: 0 10px;
  }
`;

export const SelectContainer = styled.div`
  min-width: 100px;
  min-height: 28px;
  select {
      width: 100%;
      display: block;
      background: none;
      color: #fff;
      font-size: 16px;
      appearance: none;
      border: 1px solid #fff;
      padding: 5px 25px 5px 10px;
    }
    svg {
      position: absolute;
      right: 33px;
      top: 30px;

      @media all and (max-width: 600px) {
        top: 16px;
      }
    }
`;
