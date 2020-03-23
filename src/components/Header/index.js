import React from "react";

import LogoSvg from "~/assets/icons/small-log.svg";
import Notification from "~/assets/icons/bell.svg";
import { Container, AlignItem, Title, Icon } from "./styles";

const Header = ({ leftIcon, title, rightIcon }) => {
  return (
    <Container>
      <AlignItem>
        <Icon src={leftIcon || LogoSvg} />
        <Title>{title}</Title>
      </AlignItem>
      <Icon src={rightIcon || Notification} />
    </Container>
  );
};

export default Header;
