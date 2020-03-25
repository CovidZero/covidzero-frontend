import styled from "styled-components";

export const CardBoxStyle = styled.div`
    background: ${props => props.theme.colors.primary};
    color: #fff;
    font-size: 1em;
    padding: 1em;
    /* border: 1px solid ${props => props.theme.colors.primaryDark}; */
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
`;

export const CardBoxStatsDefault = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: ${props => props.theme.colors.statsDefault};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardBoxStatsConfirmed = styled.label`
  color: ${props => props.theme.colors.statsConfirmed};
`;

export const CardBoxStatsRecovered = styled.label`
  color: ${props => props.theme.colors.statsRecovered};
`;

export const CardBoxStatsSuspect = styled.label`
  color: ${props => props.theme.colors.statsSuspect};
`;

export const CardBoxStatsDeath = styled.label`
  color: ${props => props.theme.colors.statsDeath};
`;

export const Style = {CardBoxStyle, CardBoxStatsDefault, CardBoxStatsConfirmed, CardBoxStatsRecovered, CardBoxStatsSuspect, CardBoxStatsDeath};