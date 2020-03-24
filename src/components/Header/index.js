import React from "react";

import LogoSvg from "~/assets/icons/small-log.svg";
import Notification from "~/assets/icons/bell.svg";
import { Container, AlignItem, Title, Icon, LeftIcon } from "./styles";

const Header = ({ leftIcon, title, rightIcon, actionLeftIcon }) => {
  return (
    <Container>
      <AlignItem>
        <LeftIcon src={leftIcon || LogoSvg} onClick={actionLeftIcon} />
        <Title>{title}</Title>
      </AlignItem>
      <Icon src={rightIcon || Notification} />
    </Container>
  );
};

export default Header;
