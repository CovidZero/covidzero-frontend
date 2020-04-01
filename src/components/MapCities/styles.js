 import styled from "styled-components";

export const MapControl = styled.div`
    right: 0.5rem;
    top: 3.5rem;
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
      top: 5.5rem;
    }

    @media all and (min-width: 768px) {
      right: 15px;
      top: 100px;
    }
  `;