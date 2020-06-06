import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News11 = props => {
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
        <Title>O início da pandemia e o isolamento social no Brasil</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image" alt="O início da pandemia e o isolamento social no Brasil"
                  src={require("~/assets/images/o_inicio_da_pandemia_e_o_isolamento_social_no_brasil.jpg")}
                />
                <div className="news-item-title">O início da pandemia e o isolamento social no Brasil</div>
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

              <p>O mundo está vivendo um momento raro na história das epidemias globais. Seja em relação ao número de mortos em contraste com uma época em que a tecnologia evoluiu a ponto de termos a inteligência artificial atuando no lugar de pessoas. Mesmo com tanta informação, grande parte da população não acredita no poder de contágio da Covid-19. </p>

<p>No Brasil, um relatório da Fiocruz traçou as principais medidas de isolamento social adotadas pelos governos estaduais durante o primeiro mês da pandemia. E observou a necessidade de se tomar medidas urgentes para esse enfrentamento diante de uma governança frágil em relação a respostas a essa crise. </p>

<p>O estudo cita também a parte da população que estaria mais vulnerável ao novo coronavírus, como pessoas em situação de pobreza e miséria, e define as forças motrizes globais nesse cenário, que seriam um modelo de desenvolvimento desigual e concentração urbana, aumento do fluxo de pessoas, bens e mercadorias, e a falta de medidas efetivas. </p>

<h2>O início da pandemia no Brasil</h2>
<p>No dia 22 de janeiro foi ativado o COE-nCOV (Centro de Operações de Emergências em Saúde Pública), com o objetivo de gerir as principais ações de identificação e tratamento do novo coronavírus no Brasil. No mesmo dia, foi lançado o Protocolo de Tratamento do Novo Coronavírus (2019-nCov). Apenas treze dias depois a OMS declarou Emergência em Saúde Pública de Importância Nacional e continua monitorando casos suspeitos. </p>

<p>Até então, nenhum decreto havia sido lançado por nenhum estado. O Ministério da Saúde prossegue investigando casos suspeitos e monitorando a lista de países em alerta em relação à Covid-19. Dois dias depois da confirmação do primeiro caso de coronavírus no país, em São Paulo, iniciou-se uma campanha publicitária de prevenção à doença. </p>

<p>A campanha orientava a população a lavar bem as mãos com água e sabão, não compartilhar objetos pessoais e usar álcool em gel a 70%. No final de fevereiro foi confirmado o segundo caso, também em São Paulo. </p>

<h2>OMS declara pandemia do novo coronavírus</h2>
<p>No dia 11 de março a OMS declarou a pandemia de coronavírus e poucos dias depois foram publicados os primeiros decretos estaduais. </p>

<p>É importante ressaltar que uma pandemia é também um risco sistêmico, pois impacta todos os demais sistemas: econômico, de saúde, político, cultural, social e humanitário e que as ações adotadas precisam contemplar o todo, prevendo riscos futuros e preparando o país para um retorno à normalidade. </p>

<p>No entanto, voltar ao normal implicaria também um retorno às condições que propiciaram o contágio, ou seja, é preciso tratar as fragilidades do sistema agora, em conjunto com ações de prevenção e contenção. São as medidas adotadas hoje, durante a crise, que darão resultados positivos a médio e longo prazos e possibilitarão um pós-pandemia mais forte e estruturado. Nesse caso, voltar ao normal exige cautela e preparação. </p>

<p>No final do mês de março, o Brasil já tinha quase 3 mil casos confirmados e 77 óbitos por Covid-19. A essa altura, havia um decreto publicado declarando situação de calamidade pública nacional e a transmissão comunitária já atingia todo o país. </p>

<h2>Gestão de riscos como medida preventiva</h2>
<p>O Brasil, por se tratar de um país cujo sistema de saúde já tem enormes problemas estruturais, precisa se preparar para eventuais emergências como essa no futuro. É preciso fazer uma gestão de risco em larga escala, e pensar em ações preventivas. Atualmente, estamos apenas promovendo ações reativas e corretivas à redução do risco de contágio. </p>

<p>O principal agente no combate ao novo coronavírus é o sistema de saúde, porém, sozinho ele não consegue atuar de forma eficiente na prevenção a futuras crises. É essencial a participação de outros setores da sociedade e o fortalecimento da governança, responsável pela ligação entre eles, assim como a sociedade civil e autoridades locais. </p>

<h2>O isolamento social nos estados criticados pelo governo</h2>
<p>Enquanto todos os estados e municípios tomavam medidas de distanciamento social para conter o avanço do contágio, o governo federal ia na contramão, criticando o pedido para que as pessoas ficassem em casa. </p>

<p>Junto com a precariedade do sistema de saúde, do transporte público, a falta de emprego e renda, de infraestrutura habitacional e de prestação de serviços a que a maioria da população é submetida e temos um cenário caótico. Isso significa que boa parte das pessoas não conseguiu ou não quis aderir ao isolamento. </p>

<p>Principais medidas de isolamento social: </p>
<ul>
<li>proibição de eventos públicos; </li>
<li>proibição de pessoas em espaços públicos; </li>
<li>alterações na rotina de empreendimentos de caráter não essencial; </li>
<li>alterações na rotina de transportes públicos; </li>
<li>reorganização das atividades de administração pública; </li>
<li>continuidade da prestação de serviços essenciais; </li>
<li>restrição ao sistema carcerário; </li>
<li>suspensão do recadastramento e prova de vida. </li>
</ul>

<p>De forma concomitante a essas medidas anunciadas, chegou às redes sociais um verdadeiro bombardeio de fake news em relação à pandemia, prejudicando ainda mais o isolamento social e quebrando a confiança do povo em relação às informações verdadeiras. </p>

<p>Tudo isso contribuiu para que as pessoas não respeitassem o distanciamento e não ficassem em casa, causando uma sobrecarga no sistema de saúde de algumas cidades e estados, prejudicando a contenção do contágio. </p>

<p>De uma maneira geral, o Brasil precisa pensar que essa pode não ser a última crise sanitária que enfrenta e buscar soluções para melhorar o sistema de saúde. O SUS foi criado para dar assistência universal a todos que precisem, mas na prática não é o que acontece. </p>

<p>A pandemia do novo coronavírus ainda não acabou, o país ainda está vivendo nela e se adaptando da maneira como consegue. Uma lição valiosa pode ser tirada de toda essa crise e de como foi gerida para que, no futuro, o Brasil tenha estrutura suficiente para lidar com qualquer crise de forma eficaz, sem perda de vidas. </p>

<p>Fonte: Fiocruz</p>

              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News11;
