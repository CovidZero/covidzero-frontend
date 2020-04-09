import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News6 = props => {
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
        <Title>Revelando a origem e transmissão do COVID-19</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/Revelando_a_origem_e_transmissão_do_COVID-19.jpg")}
                />
                <div className="news-item-title">Revelando a origem e transmissão do COVID-19</div>
              </div>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info">{`Publicado por: Yifei Xu`} </div>
            </Cell>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info news-date">{`24/02/2020`}</div>
            </Cell>
          </Row>
        </Grid>
        <SocialShare></SocialShare>
        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
                <p>O novo coronavírus infectou milhares de pessoas na China desde dezembro de 2019, aumentando uma preocupação global de saúde pública. Estudos recentes (Huang et al., Chan et al. e Zhou et al.) forneceram informações oportunas sobre sua origem e capacidade de se espalhar entre os seres humanos, informando a prevenção de infecções e práticas de controle. </p>
                <p>O romancista Paulo Coelho escreveu uma vez que 'Tudo o que acontece duas, certamente acontecerá uma terceira vez'. Enquanto nossa memória das doenças Síndrome Repiratória Aguda Grave (SARS-CoV) e Síndrome Respiratória do Oriente Médio (MERS-CoV) não desapareceu, um novo coronavírus (COVID-19) está chegando sob os holofotes. O COVID-19 foi detectado pela primeira vez em Wuhan, China, em dezembro de 2019, e se espalhou rapidamente pelo país (Figura 1A). Em 8 de fevereiro de 2020, mais de 34.800 casos confirmados do COVID-19 e 724 mortes foram relatadas na China e em outros 24 países [1]. A OMS declarou o surto causado pelo COVID-19, situação de Emergência de Saúde Pública de Importância Internacional em 30 Janeiro de 2020. Vários estudos recentes forneceram informações críticas e oportunas sobre a origem e transmissão entre humanos deste vírus [2–4]. </p>
                <p>Um grupo de cientistas chineses investigou os dados epidemiológicos dos primeiros 41 pacientes com novo coronavirus, admitidos em hospital em Wuhan, antes de 2 de janeiro de 2020 [2]. Vinte e sete (66%) dos pacientes tiveram histórico de contato direto com o mercado de frutos do mar de Huanan, onde vivem e animais selvagens abatidos e vendidos para consumo. O mercado Huanan e seus animais selvagens eram suspeitos de serem a fonte de infecção humana por COVID-19. Zhou et al. recuperou cinco genomas completos de amostras coletadas de pacientes com o novo coronavírus e, através da análise do genoma, eles descobriram que o vírus é um betacoronavírus que compartilha uma identidade de sequência de 96% com um coronavírus encontrado em morcegos [4]. Foi demonstrado que o gene do coronavírus desempenha um papel crítico na transmissão interespécies: Zhou e colegas descobriram que COVID-19 pode usar ACE2 como um receptor de entrada celular. Dessa forma, COVID-19 se assemelha a SARS-CoV [5,6]. </p>
                <p>SARS-CoV e MERS-CoV foram originados de morcegos, ambas são zoonoses e podem infectar seres humanos através de diferentes hospedeiros intermediários [7] (Figura 1B). Suspeita-se que civetas de palmeiras asiáticas vendidas em mercados de animais vivos foram o hospedeiro intermediário para SARS-CoV [7,8]. O MERS-CoV foi transmitido através de dromedários [7,8]. A identificação de um hospedeiro intermediário para um novo vírus não é uma investigação trivial, e ainda não é claro se COVID-19 infecta humanos via transmissão direta de um morcego ou através de hospedeiros intermediários. </p>
                <p>Chan et al. realizou um estudo epidemiológico e investigação genômica de um grupo familiar de seis pacientes em Shenzhen, uma importante cidade localizada a 1000 km de Wuhan; esta forneceu evidências de transmissão entre humanos e propagação interurbana de COVID-19 [3]. Entre os seis pacientes, cinco foram infectados com COVID-19 depois de visitar Wuhan e os pacientes restantes, que não haviam viajado para Wuhan, adquiriram a infecção através de contato próximo com membros da família em Shenzhen. Nenhum membro da família esteve em contato com o Mercado Huanan, ou com animais selvagens, mas dois deles foram a um hospital em Wuhan durante a visita, sugerindo que esses pacientes adquiriram a infecção no hospital Wuhan e trouxeram o vírus de volta a Shenzhen, posteriormente transmitindo-o ao demais membros da família. </p>
                <p>Embora o mercado Huanan em Wuhan tenha sido altamente relevante para o surgimento e disseminação de COVID-19, e o vírus tenha sido detectado em amostras ambientais do mercado, a origem desse vírus não foi determinada conclusivamente. A análise dos genomas COVID-19 disponíveis mostrou uma diversidade genética muito limitada, indicando que esses genomas compartilham um ancestral comum recente. Exames de dados epidemiológicos em [2] descobriram que o primeiro paciente conhecido e os outros 13 dos 41 pacientes iniciais, não tiveram histórico de contato com o mercado de Huanan. Além disso, o primeiro paciente não compartilhou ligação epidemiológica com qualquer paciente do grupo estudado. Assim, é possível que haja mais de uma fonte de infecção. Por exemplo, um vírus homogêneo pode existir na cadeia de suprimentos de animais selvagens, em Huanan e outros mercados da cidade. Independentemente de sua fonte inicial, é provável que o COVID-19 tenha sido introduzido em um pequeno aglomerado de seres humanos a partir de um grupo de animais infectados e, a partir daí, o vírus adquiriu a capacidade de transmissão entre humanos, espalhando-se pela cidade antes dos pacientes do Mercado Huanan serem identificados. </p>
                <p>Os dados clínicos mostraram que a data de início dos sintomas do primeiro paciente conhecido foi 1º de dezembro de 2019 [2]. Considerando o período de incubação conhecido - entre 1 e 14 dias - a transmissão interespécies poderia ter ocorrido, no mais tardar, em novembro de 2019. Como nenhum dos membros da família do primeiro paciente conhecido desenvolveram febre ou qualquer outro sintoma respiratório, é razoável especular se ocorreu mais de uma infecção por COVID-19, com a hipótese de que algumas cepas não são transmissíveis entre seres humanos, enquanto outras adquiriram essa capacidade de transmissão, causando o surto atual. </p>
                <p>A origem de COVID-19 merece profunda investigação, com algumas perguntas-chave que também precisam ser abordadas completamente. (i) Qual é o mecanismo molecular subjacente à transmissão interespécies de COVID-19? Esse mecanismo é semelhante ou distinto ao associado com o surgimento de SARS-CoV e MERS-CoV? (ii) Qual é o papel desempenhado por mutação pontual e recombinação na evolução de COVID-19? Desde que os coronavírus podem sofrer mutação rápida e recombinação frequente, essas atividades gerarão novas cepas com maior transmissibilidade e patogenicidade? (iii) </p>
                <p>O quanto é prevalente o vírus em seu hospedeiro natural e possui qual capacidade de infectar outros animais? Esta questão é relevante porque o coronavírus originário do morcego foi encontrado por ultrapassar a barreira entre espécies e infectar suínos [9], cuja hipótese é servir como um "recipientes de mistura" para a geração de vírus geneticamente novos. A introdução de COVID-19 em animais de criação poderia representar uma ameaça potencial para a agricultura e saúde pública. </p>
                <p>Após o surgimento do SARS-CoV e MERS-CoV, o COVID-19 representa uma terceira grande emergência de um novo coronavírus. Agora é hora de aprender com as lições desses dois surtos anteriores para impedir a propagação de mais doenças a partir do COVID-19. </p>
                <p>Fonte: <a href="https://www.cell.com/trends/microbiology/fulltext/S0966-842X(20)30025-1?utm_source=covidzero.com.br">CellPress</a></p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News6;