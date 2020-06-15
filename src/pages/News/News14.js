import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News14 = props => {
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
        <Title>Saúde mental em tempos de pandemia</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image" alt="Saúde mental em tempos de pandemiao"
                  src={require("~/assets/images/saude_mental_em_tempos_de_pandemia.jpg")}
                />
                <div className="news-item-title">Saúde mental em tempos de pandemia</div>
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

              <p>É sempre difícil lidar com uma crise, seja pelas mudanças que acarreta, pelos riscos que demanda ou pelo processo em si. O Brasil vive hoje uma das maiores crises dos últimos tempos e a pandemia do novo coronavírus já matou quase 30 mil pessoas. </p>

              <p>Um povo preso dentro de casa, proibido de circular livremente, com a maior parte dos serviços funcionando parcialmente ou fechados. Some-se a isso o medo de contrair o vírus ou de transmiti-lo a algum de seus familiares e amigos, a solidão causada pelo isolamento, a crise econômica e financeira que está a caminho e, ainda, a possibilidade de perder o emprego. </p>

              <p>Tem-se aí o cenário ideal para que a saúde mental de qualquer pessoa sofra algum tipo de consequência. Os impactos podem ser dos mais leves, como estresse agudo, aos mais profundos e perigosos, como o suicídio, por exemplo. O problema é grave e pode estar sendo potencializado pela pandemia e o panorama gerado por ela. </p>

              <h2>A prevenção é o caminho</h2>
              <p>Pensando em tudo isso, a Fiocruz lançou uma cartilha abordando o tema saúde mental e atenção psicossocial voltada para profissionais de saúde, que trata de assuntos relacionados à prevenção ao suicídio, seus principais sinais de alerta e cuidados. </p>

              <p>Estima-se que, no Brasil, 51% dos casos de suicídio ocorram dentro de casa e que apenas um em cada três casos chegue aos serviços de saúde. É importante, nesse momento, que as autoridades responsáveis tomem atitudes em relação a expandir a rede de atenção à saúde mental e criar grupos de apoio virtuais para dar suporte a quem precisa. </p>

              <p>O assunto é tão sério que o secretário-geral das Nações Unidas, António Guterres, gravou uma mensagem em vídeo para chamar a atenção em relação à gravidade do problema e lançou um relatório que trata de políticas públicas voltadas para essa questão. </p>

              <p>No vídeo, o chefe da ONU diz que os mais atingidos serão os adolescentes, idosos, jovens, profissionais de saúde, quem já tenha alguma condição mental preexistente e pessoas em situação de conflito e crise. </p>

              <h2>Outras formas de ajudar</h2>
              <p>O papel da mídia também tem bastante relevância na prevenção e cuidados com a saúde mental durante a pandemia. O material sugere que se criem campanhas de conscientização da população de uma maneira geral, fazendo com o que o tema deixe de ser um tabu. É uma das formas de tornar o assunto mais acessível, derrubando barreiras que impeçam algumas pessoas de pedir ajuda e tratando o tema com mais naturalidade. </p>

              <p>Ações comunitárias ou criadas por organizações da sociedade civil podem ser excelentes aliadas também. Iniciativas como entrega de alimentos, checagem por telefone de pessoas que moram sozinhas e organização de atividades virtuais como estímulo à ação e diversão formam uma rede de apoio a essa causa. </p>

              <p>Outra maneira de ajudar é se fazer presente na vida de alguém que faça parte desse grupo de risco. Diante de um cenário de distanciamento social, as pessoas precisam de algum contato com outro ser humano e uma ligação, por exemplo, pode fazer diferença. </p>

              <p>Grupos de apoio sempre são uma resposta eficiente para dar suporte e, nesse cenário de distâncias, é possível fazer isso de forma virtual e segura. Existem excelentes aplicativos gratuitos disponíveis para reuniões e chamadas em grupo e podem ser utilizados para isso também. </p>

              <h2>A saúde mental é essencial</h2>
              <p>Sabe-se que os serviços de saúde mental no Brasil estão ainda aquém do esperado e, dentro dessa perspectiva da Covid-19, o processo se agravou. Em parte, por conta do fechamento desses serviços especializados para atender casos suspeitos e confirmados do novo coronavírus. Ademais, porque parte dos profissionais de saúde mental foi infectada pelo SARS-CoV-2 e precisou se afastar. </p>

              <p>Segundo a OMS, “saúde é um estado de completo bem-estar físico, mental e social, e não consiste apenas na ausência de doença ou de enfermidade”. Pode-se considerar, então, que a saúde mental está inclusa no conceito de saúde, de uma maneira geral, e é parte indispensável dela. </p>

              <p>O que se pode extrair de todo esse panorama é a necessidade de uma reorganização do sistema de saúde mental no país, para maior alcance a quem precisa. Tendo em vista que é um direito de todos e faz-se tão imprescindível nos dias de hoje, talvez a tecnologia possa ser um importante aliado. </p>

              <p>Por fim, espera-se que essa crise deixe como legado positivo algumas lições em relação a prioridades em todas as áreas da sociedade que foram afetadas. E que as pessoas possam sair dela fortalecidas e prontas para um quadro de pós-pandemia e que encontrem o apoio necessário para isso. </p>

              <p>Fonte: Fiocruz e ONU Brasil</p>

              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News14;
