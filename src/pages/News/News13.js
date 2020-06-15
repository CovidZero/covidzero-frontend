import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News13 = props => {
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
        <Title>O impacto da COVID-19 nas relações de trabalho</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image" alt="O impacto da COVID-19 nas relações de trabalho"
                  src={require("~/assets/images/o_impacto_da_COVID-19_nas_relacoes_de_trabalho.jpg")}
                />
                <div className="news-item-title">O impacto da COVID-19 nas relações de trabalho</div>
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

              <p>Muito tem se falado sobre o “novo normal” durante a pandemia da Covid-19 e se ele permanecerá nas nossas vidas, pelo menos em parte. Ainda não se sabe se ele é promissor ou não, apenas que o mundo precisou se adaptar para vencer essa doença, que começou na China e já tomou conta do mundo inteiro. </p>

<p>Algumas mudanças que essa crise acarretou na sociedade podem ser vistas como positivas, como a crescente escolha entre prioridades na vida das pessoas, por exemplo. Por motivo de contenção de gastos, boa parte da população vem optando por comprar apenas itens essenciais, deixando de lado produtos considerados supérfluos ou itens de luxo. </p>

<p>Pode-se ver mudanças também nas novas formas de trabalho, o famoso home office. É verdade que isso não é novidade, mas tem sido para muita gente nesse momento. Algumas empresas, inclusive, já anunciaram que não pretendem voltar ao antigo modelo ou preferem deixar essa decisão para os funcionários, quando for possível. </p>

<h2>O novo normal e o novo ambiente de trabalho</h2>
<p>A ONU publicou uma entrevista com a consultora técnica sênior da Organização Internacional do Trabalho (OIT), Susan Hayter, sobre as mudanças que podem acontecer em decorrência da pandemia no mundo. </p>

<p>Susan acredita que essa transição trouxe vantagens e desvantagens para trabalhadores. Por um lado, as pessoas puderam estar mais perto da família, fazer refeições juntos e acompanhar os filhos mais de perto. Por outro, os horários de trabalho e descanso se misturaram, causando estresse e comprometendo a saúde mental. </p>

<p>O fato é que muitas empresas conseguiram se adaptar e fornecer as ferramentas adequadas para seus colaboradores exercerem suas atividades remotamente. Outras acabaram fechando e parte delas ainda está em processo de adaptação. </p>

<h2>Desigualdade entre as profissões fica evidente</h2>
<p>Algumas categorias profissionais tiveram maior facilidade em lidar com esse mundo digital, pelo próprio tipo de serviço prestado. Pessoas que exercem cargos mais altos tiveram maior possibilidade de se afastar, enquanto categorias mais operacionais ou que trabalham por demanda precisaram optar entre ganhar o salário ou se proteger. </p>

<p>A entrevista diz que algumas profissões passaram a ser mais valorizadas, como professores, profissionais de saúde e trabalhadores de supermercados. Outros, que já eram mal remunerados, sofreram ainda mais com o declínio dos salários e o crescimento do desemprego. </p>

<p>A OIT estima uma queda de 60% nos ganhos dos trabalhadores informais só no primeiro mês da crise. Fora o fato de não possuírem nenhum dos benefícios concedidos a trabalhadores formais, como licença médica ou seguro-desemprego. Essa pandemia revelou que a flexibilidade do trabalho informal se aplica também à estabilidade de renda. </p>

<p>Por outro lado, esse cenário de isolamento social revela novas oportunidades de trabalho em novas áreas, como o desenvolvimento de software e produtos ou serviços digitais. Isso pode ser benéfico a longo prazo, mas não muda o quadro atual de desemprego e seus efeitos. </p>

<h2>Como será o retorno ao trabalho</h2>
<p>Enquanto essa revolução digital está a caminho, as pessoas precisarão voltar aos seus empregos e retomar o dia a dia de trabalho in loco em muitas empresas. Mas para que isso aconteça, será necessário tomar medidas de segurança e orientá-las com foco nas pessoas. </p>

<p>A OIT publicou um documento contendo diretrizes para que esse retorno ao trabalho seja o mais seguro possível, contemplando normas de segurança como uso de EPIs apropriados, se necessários. Fala também sobre ajustes nos serviços de acordo com a demanda, mantendo remoto o que puder permanecer assim. </p>

<p>O documento cita ainda que o trabalhador deve se sentir seguro para voltar, dentro de uma perspectiva de ergonomia e ausência de riscos em relação ao vírus da Covid-19. O colaborador terá o direito de se afastar caso acredite, e prove, que está colocando sua vida em risco. </p>

<h2>Principais medidas para um retorno seguro</h2>
<p>Entre as medidas que podem ser tomadas pelos estabelecimentos que pretendem retornar ao trabalho presencial, estão a instalação de vitrines de plástico transparente, barreiras físicas, melhoria da ventilação, limpeza e higiene adequados. </p>

<p>Os grupos de risco em relação à contaminação pelo novo coronavírus continuam tendo atenção especial e suas necessidades devem ser levadas em consideração. </p>

<p>O novo normal terá ainda algumas mudanças até o final desta pandemia e a longo prazo também. O fato é que os escritórios não deixarão de existir assim, de uma hora para outra e o trabalho não será totalmente remoto, pelo menos não ainda. Estima-se que, em países de alta renda, apenas 27% dos trabalhadores possam trabalhar em casa. </p>

<p>Quando falamos em Brasil, essa realidade muda um pouco e esse percentual deve diminuir. Ou seja, o povo brasileiro deve se preparar para o retorno a uma rotina como a conhecia antes e também aprender a usar as novas tecnologias para aproveitar mais as oportunidades. </p>

<p>Fonte: ONU Brasil e OIT – Organização Internacional do Trabalho</p>


              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News13;
