import React from "react";

import LogoSvg from "~/assets/icons/small-log.svg";
import Notification from "~/assets/icons/bell.svg";
import { Container, AlignItem, Title, Icon, LeftIcon } from "./styles";
import { Link } from 'react-router-dom';

const Header = ({ leftIcon, title, rightIcon, actionLeftIcon }) => {
  return (
    <Container>
      <AlignItem>
        <LeftIcon src={leftIcon || LogoSvg} onClick={actionLeftIcon} />
        <Title>{title}</Title>
      </AlignItem>
      <a href="https://covidzero.com.br/sobre">
        <Icon src={rightIcon || Notification} />
      </a>
    </Container>
  );
};

export default Header;
