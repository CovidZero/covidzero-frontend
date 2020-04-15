import React,{ useEffect, useState } from "react";

import LogoSvg from "~/assets/icons/small-log.svg";
import Notification from "~/assets/icons/bell.svg";
import { Languages } from "~/i18n";
import { useTranslation } from 'react-i18next'

import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline'
import { Container, AlignItem, Title, Icon, LeftIcon, AlignRight, SelectContainer } from "./styles";



const Header = ({ leftIcon, title, rightIcon, actionLeftIcon }) => {
  const [t, i18n] = useTranslation();
  function handleChangeLanguage(event) {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  }
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      console.log('change', lng)
      setLanguage(lng);
    })
  }, []);

  return (
    <Container>
      <AlignItem>
        <LeftIcon src={leftIcon || LogoSvg} onClick={actionLeftIcon} />
        <Title>{title}</Title>
      </AlignItem>
      <AlignRight>
        <a href="https://covidzero.com.br/sobre">
          <Icon src={rightIcon || Notification} />
        </a>
        {Languages && <SelectContainer>
          <select onChange={handleChangeLanguage} value={language}>
            {Languages.map(lng => (
              <option key={lng.value} value={lng.value}>{lng.label}</option>
            ))}
          </select>
          <ArrowIosDownwardOutline color="white" size="20px" />
        </SelectContainer>}
      </AlignRight>
    </Container>
  );
};

export default Header;
