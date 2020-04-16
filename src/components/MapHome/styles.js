import styled from "styled-components";

export const MapControl = styled.div`
    right: 0.5rem;
    top: 6rem;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-flow: column wrap;

    button {
      background: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      color: #fff;
    }

    @media all and (min-width: 600px) {
      right: 0.5rem;
      top: 8rem;
    }

    @media all and (min-width: 768px) {
      right: 15px;
      top: 20px;
    }
  `;
