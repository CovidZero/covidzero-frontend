import React from "react";
import { useTranslation } from "react-i18next";

import { Header } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";
import { Search } from "@styled-icons/evil/Search";

import * as Styled from './styles.js';
import { Input, CardNews, Button } from '~/components';

export default function News() {

  const longContentCardNews =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const [t] = useTranslation();
  return(
    <>
      <Header title={t("header.news")} rightIcon={ShareIcon} />

      <Styled.Container>
        <Styled.InternContainer>
          <Styled.FakeNews>
            <Styled.FakeNewsHeader>
              <Styled.FakeTitle>Fake ou não?</Styled.FakeTitle>
              <p>Está com dúvida se uma notícia é verdadeira ou Fake News? Verifique agora mesmo!</p>
            </Styled.FakeNewsHeader>
            <Input
              icon={<Search color={"white"} size={"24px"} />}
              placeholder={"Verificar se notícia é Fake News"}
              onChange={e => console.log(e.target.value)}
            />
          </Styled.FakeNews>

          <Styled.Notification>
            <p>Quer  estar antenado nas últimas notícias
                sobre o coronavírus? Ative as notificações e fique atualizado!
            </p>
            <Button styleButton='txt-btn' sizeButton={16} disable={false} textButton='ativar notificações' />
          </Styled.Notification>
        </Styled.InternContainer>
      </Styled.Container>

      <Styled.Container style={{marginBottom: "5.5em"}}>
        <Styled.DivTitle>
          <Styled.PageTitle>Últimas notícias </Styled.PageTitle>
          <hr />
        </Styled.DivTitle>

        <CardNews title="Como os gestores devem se comportar na crise Coronavírus?"
                  content={longContentCardNews}
                  date={new Date()}
                  tag={<div>MAIN_TAG</div>} />

        <CardNews title="Como os gestores devem se comportar na crise Coronavírus?"
                  content={longContentCardNews}
                  date={new Date()}
                  tag={<div>MAIN_TAG</div>} />


        <CardNews title="Como os gestores devem se comportar na crise Coronavírus?"
                  content={longContentCardNews}
                  date={new Date()}
                  tag={<div>MAIN_TAG</div>} />

        <CardNews title="Como os gestores devem se comportar na crise Coronavírus?"
                  content={longContentCardNews}
                  date={new Date()}
                  tag={<div>MAIN_TAG</div>} />
      </Styled.Container>
    </>);
}
