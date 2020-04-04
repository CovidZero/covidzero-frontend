import styled from "styled-components";

export const CardBoxStyle = styled.div`

  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 12px;
  /* border: 1px solid ${props => props.theme.colors.primaryDark}; */
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;

  @media all and (min-width: 600px) {
    padding: 16px;
  }
`;

export const Title = styled.span`
  font-size: 12px;
  margin-bottom: 1em;
  
  @media all and (min-width: 600px) {
    font-size: 16px;
  }
 
`;

export const CardBoxStatsDefault = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: ${props => props.theme.colors.statsDefault};
  text-transform: uppercase;
  letter-spacing: 1px;

`;

export const Canvas = styled.canvas`

`;

export const Style = {
    CardBoxStyle,
    CardBoxStatsDefault,
    Title
};