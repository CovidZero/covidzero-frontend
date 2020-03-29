import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News2 = props => {
  const { id } = props.match.params;

  const [t] = useTranslation();

  return (
    <>
      <Header
        title={t("header.news")}
        leftIcon={ArrowLeft}
        actionLeftIcon={() => history.push("/news")}
        rightIcon={ShareIcon}
      />
      <Content>
        <Title>CovidZero - Diretor-Geral da OMS apela ao G20 para combater, unir e inflamar o COVID-19</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/Diretor-Geral_da_OMS_apela_ao_G20_para_combater_unir_e_inflamar_o_COVID-19.jpg")}
                />
                <div className="news-item-title">Diretor-Geral da OMS apela ao G20 para combater, unir e inflamar o COVID-19</div>
              </div>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info">{`Publicado por: Christian Lindmeier`} </div>
            </Cell>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info news-date">{`26/03/2020`}</div>
            </Cell>
          </Row>
        </Grid>
           <SocialShare></SocialShare>
        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
                <p>O Dr. Tedros Adhanom Ghebreyesus, Diretor-Geral da Organização Mundial da Saúde, reuniu com Chefes de Estado na extraordinária Cúpula de Líderes do G20 de hoje, focada no COVID-19. Durante o encontro, Tedros disse: “Vocês se uniram para enfrentar a crise de saúde que define o nosso tempo: estamos em guerra com um vírus que ameaça nos separar; se deixarmos”. Também elogiou a iniciativa do G20 de encontrar soluções conjuntas e trabalhar em conjunto: “Esta é uma crise global que requer uma resposta global”. </p>
                <p>A mensagem do Dr. Tedros foi clara: “Lutar, unir, inflamar” </p>
                <p>Primeiro, ele pediu aos líderes que lutem sem desculpas, sem arrependimentos - agradecendo aos países que já tomaram medidas e pedindo urgentemente que façam mais. </p>
                <p>Segundo,ele os incentivou a se unirem, enfatizando que nenhum país pode combater isso sozinho e incitando todos os países a desenvolver a solidariedade já provocada pela crise. Por último, a iniciar um movimento global para garantir que isso nunca aconteça novamente. </p>
                <p>O Diretor-Geral saudou o compromisso dos líderes do G20 de “fazer o que for necessário para superar a pandemia” para proteger vidas e meios de subsistência, além de restaurar a confiança, reforçar a estabilidade atualmente ameaçada no comércio e em outros setores. Inclusive, o comprometimento de tomarem todas as medidas de saúde necessárias e procurar garantir financiamento adequado para conter a pandemia e proteger as pessoas, especialmente as mais vulneráveis." </p>
                <p>Os chefes de Estado se comprometeram a apoiar e fortalecer ainda mais o mandato da OMS na coordenação da resposta e solicitou o financiamento total do Plano Estratégico de Preparação e Resposta da OMS. Concomitantemente, a trabalharem juntos para aumentar o financiamento de pesquisa e desenvolvimento de vacinas e medicamentos, fortalecer a cooperação científica internacional e alavancar tecnologias digitais. Por sua vez, encarregaram a OMS e outras organizações relevantes de avaliar as lacunas na preparação para pandemia e relataram as conclusões dessa avaliação aos Ministros de Finanças e Saúde do G20, a fim de estabelecer uma iniciativa global sobre preparação e respostas juntas contra pandemias. </p>
                <p>Fonte: <a href="https://www.who.int/news-room/detail/26-03-2020-who-s-director-general-calls-on-g20-to-fight-unite-and-ignite-against-covid-19?utm_source=covidzero.com.br">Orgão Mundial da Saúde</a></p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News2;
