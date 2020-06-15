import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News9 = props => {
  const { id } = props.match.params;

  const [t] = useTranslation();

  return (
    <>
      <Header
        title={t("header.news")}
        leftIcon={ArrowLeft}
        actionLeftIcon={() => history.push("/news")}
        rightIcon={Notification}
      />
      <Content>
        <Title>Qual o impacto da crise do coronavírus na mídia?</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image" alt="Qual o impacto da crise do coronavírus na mídia?"
                  src={require("~/assets/images/qual-o-impacto-da-crise-do-coronavirus-na-midia.jpg")}
                />
                <div className="news-item-title">Qual o impacto da crise do coronavírus na mídia?</div>
              </div>
            </Cell>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info">{`Publicado por: Vanessa Lemos`} </div>
            </Cell>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info news-date">{`06/06/2020`}</div>
            </Cell>
          </Row>
        </Grid>
        <SocialShare></SocialShare>
        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
              <p>Estamos diante de um cenário distópico, uma sociedade caracterizada por uma nova normalidade em nível mundial. O motivo é conhecido por todos e, segundo a OMS, a única maneira de lidar com a pandemia no momento é manter todos em casa. Mas essa medida traz uma série de consequências que, independentemente de serem boas ou más, temos que estar preparados para uma ágil adaptação. </p>

              <p>Uma das grandes mudanças que temos percebido tem sido em relação ao impacto sofrido pelo consumo de mídia no Brasil. De uma maneira geral, esse consumo aumentou, pois as pessoas estão passando mais tempo em casa e recorrendo a essa forma de entretenimento para ocupar seu tempo. No entanto, surgiram também novas tendências, onde alguns veículos se destacaram, assim como algumas marcas. </p>

              <h2>O que mudou no consumo da mídia? </h2>
              <p>Segundo pesquisa realizada pela Kantar no começo de abril deste ano, o consumo de TV aumentou significativamente desde o início do isolamento social. Só para se ter uma ideia, o tempo médio que o brasileiro passou assistindo TV na primeira metade de abril foi de 7h54. Se compararmos com o tempo médio observado antes da pandemia, houve um crescimento de 1h20 de consumo. A região onde esse hábito mais cresceu foi a Sul, com 1h31 a mais. Já o menor crescimento foi no Norte, com 59 min a mais. </p>

              <p>O jornalismo também teve seu lugar nessas mudanças ocorridas. Quando começou a crise do coronavírus, as pessoas buscavam mais informações sobre o assunto para saber como agir e isso fez com que programas jornalísticos tivessem um aumento de audiência. Com o tempo, a população continuou assistindo TV, mas dando menos importância para telejornais. </p>

              <p>Para serviços de PayTV, houve um aumento de, em média, 20% em relação ao período anterior à pandemia. Programas como filmes e séries foram os mais procurados, com um crescimento de 47%. Já os serviços de streaming movimentaram as redes sociais e tiveram uma estreia muito aguardada pelo público: a série La casa de papel. Se compararmos com a temporada anterior, houve um aumento de 27% de público. </p>

              <p>Uma curiosidade nessa análise é que o consumo de rádio permanece quase inalterado. As pessoas que ouviam rádio no carro enquanto dirigiam encontraram novas maneiras de continuar ouvindo seus programas preferidos. Dentro de uma amostra de 13.240 pessoas ouvidas, 70% afirmam que continuam ouvindo rádio e 20% disseram que estão ouvindo até mais. </p>
              <h2>Surgimento de novas tendências</h2>
              <p>Um dos assuntos mais falados nas redes sociais são as super Lives, com certeza. Houve lives que deram certo, outras que não se saíram muito bem e algumas que viraram polêmica, mas o fato é que elas vieram para ficar. </p>

              <p>Algumas delas tiveram um alcance gigante, chegando a atingir 3 milhões de visualizações simultâneas. Uma ótima oportunidade para a indústria do entretenimento e também para a mídia. Seja através de monetização ou publicidade, esta nova tendência traz grandes promessas para divulgação e parcerias. O próprio LinkedIn abriu essa funcionalidade para seus usuários: são as Lives corporativas. </p>

              <p>Outra grande tendência são os aplicativos, sejam novos apps ou novos usos para os antigos. O Zoom, por exemplo, aplicativo que era utilizado para aulas EAD, vem sendo muito usado por empresas em reuniões de trabalho. E o Twitch, famoso app de gamers, vem realizando transmissões de Lives. Todos estão se adaptando e se reinventando para continuar no mercado. </p>

              <p>O esporte também precisa ser citado aqui, afinal os esportes tradicionais encontraram uma maneira de continuar nos holofotes: eles vêm retransmitindo grandes clássicos que fizeram sucesso no passado para manter seu público fiel. Os clubes também não quiseram ficar para trás, estão usando as redes sociais para interagir e aumentar o número de seguidores. eSports, já ouviu falar? São campeonatos virtuais de jogos em escala mundial. Já que as pessoas não podem ir ao estádio torcer pelo seu time, ao menos podem acessar o Twitch e vibrar. </p>


              <h2>Campanhas publicitárias mencionam o Covid-19</h2>
              <p>A atividade publicitária na TV vem abordando o tema Covid-19 em suas campanhas de forma constante durante a pandemia. Segundo a Kantar, 43% dos anunciantes fizeram inserções onde mencionavam o assunto nas duas primeiras semanas de abril, após o início do isolamento social. O setor que mais abordou o tema foi o comércio, seguido pelo setor financeiro e securitário. </p>

              <p>Não se sabe ainda qual será o legado dessa crise para a mídia no pós-pandemia, mas o mundo se adaptou de forma consideravelmente rápida a este novo normal. Todos os setores estão encontrando novas formas de continuar no mercado e a população está usufruindo de toda essa criatividade.</p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News9;
