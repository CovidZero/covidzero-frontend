import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News1 = props => {
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
        <Title>CovidZero - Universidade de Oxford recruta para testes de vacina criada para erradicar o COVID-19</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/CovidZero_Universidade_de_Oxford_recruta_para_testes_de_vacina_criada_para_erradicar_o_COVID-19.jpg")}
                />
                <div className="news-item-title">Universidade de Oxford recruta para testes de vacina criada para erradicar o COVID-19</div>
              </div>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info">{`Publicado por: Universidade de Oxford`} </div>
            </Cell>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info news-date">{`27/03/2020`}</div>
            </Cell>
          </Row>
        </Grid>
 
           
        <SocialShare></SocialShare>
           


        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
                <p>Pesquisadores da Universidade de Oxford que trabalham em um esforço sem precedentes no desenvolvimento de vacinas para impedir o COVID-19 começaram a rastrear voluntários saudáveis (entre 18 e 55 anos) hoje para o próximo teste de vacina ChAdOx1 nCoV-19 na região do Vale do Tamisa. A vacina baseada em um vetor de vacina contra adenovírus e o estudo da proteína da SARS-CoV-2 já está em produção, mas ainda não estará pronta por algumas semanas.</p>
                <p>A equipe recrutará voluntários saudáveis com idades entre 18 e 55 anos, que se passarem na triagem, serão os primeiros humanos a testar a nova vacina, chamada ChAdOx1 nCoV-19. O estudo fornecerá informações valiosas sobre os aspectos de segurança da vacina, bem como sua capacidade de gerar uma resposta imune contra o vírus. Indivíduos interessados podem se voluntariar para participar da vacina COVID-19 pelo site. </p>
                <p>O estudo, uma colaboração entre as equipes clínicas do Instituto Jenner da Universidade e do Oxford Vaccine Group, recrutará até 510 voluntários, que receberão a vacina ChAdOx1 nCoV-19 ou uma injeção de controle para comparação. Enquanto a equipe começará a triar as pessoas agora para ver se elas são elegíveis para participar do estudo, os participantes não receberão a vacina por algumas semanas. Um trabalho pré-clínico detalhado está sendo realizado e a vacina está sendo fabricada com o padrão de qualidade clínica no Clinical Biomanufacturing Facility da Universidade de Oxford. O experimento foi aprovado pelos reguladores e revisores éticos do Reino Unido. Os pesquisadores estão trabalhando o mais rápido possível para preparar a vacina para ser usada na pesquisa, o que inclui investigações pré-clínicas adicionais e produção de um número maior de doses da vacina. </p>
                <p>O professor Adrian Hill, diretor do Instituto Jenner da Universidade de Oxford, diz que: “A equipe de Oxford teve uma experiência excepcional de uma resposta rápida à vacina, como o surto de Ebola na África Ocidental em 2014. Esse é um desafio ainda maior. As vacinas estão sendo formuladas do zero e progrediram a uma taxa sem precedentes. O próximo julgamento será fundamental para avaliar a viabilidade da vacinação contra o COVID-19 e poderá levar a uma implantação precoce.” </p>
                <p>O professor Andrew Pollard, pesquisador-chefe do estudo, disse: 'Iniciar os ensaios clínicos é o primeiro passo nos esforços para descobrir se a nova vacina que está sendo desenvolvida na Universidade de Oxford funciona e pode desempenhar com segurança um papel central no controle da pandemia do  coronavírus que está varrendo o globo. </p>
                <p>Cientistas de todo o mundo estão trabalhando duro para desenvolver uma vacina para prevenir o COVID-19, mas há muito a ser feito. A equipe de Oxford, liderada pelas professoras Sarah Gilbert, Andrew Pollard, Professora Teresa Lambe, Sandy Douglas e Adrian Hill, começou a trabalhar no projeto de uma vacina na sexta-feira, 10 de janeiro de 2020. </p>
                <p>A vacina é um vetor viral contra o adenovírus (ChAdOx1) e foi desenvolvida no Instituo Jenner de Oxford. Foi escolhida como a tecnologia de vacina mais adequada para uma vacina SARS-CoV-2 (COVID-19), pois pode gerar uma forte resposta imune a partir de uma dose e não é um vírus replicante, portanto, não pode causar uma infecção contínua no indivíduo vacinado.  Isso também torna mais seguro dar a crianças, idosos e qualquer pessoa com uma condição pré-existente, como diabetes. Os vetores adenovirais são um tipo de vacina muito bem estudado, tendo sido utilizado com segurança em milhares de indivíduos, de 1 semana a 90 anos de idade, em vacinas direcionadas a mais de 10 doenças diferentes. </p>
                <p>Os coronavírus têm espinhos em forma de taco na sua camada externa. Respostas imunes de outros estudos sobre coronavírus sugerem que eles são um bom alvo para uma vacina. A vacina de Oxford contém a sequência genética desta proteína dentro da constituição do ChAdOx1. Após a aplicação da vacina, é produzida a proteína da superfície (formato semelhante a tacos) do coronavírus, que prepara o sistema imunológico para atacar o coronavírus se ele infectar o corpo mais tarde. O professor Gilbert e sua equipe já desenvolveram uma vacina para outra doença do coronavírus humano, que é a Síndrome Respiratória do Oriente Médio (MERS), e isso mostrou ser promissor nos primeiros ensaios clínicos. </p>
                <p>O professor Gilbert, pesquisador principal do programa de desenvolvimento de vacinas, disse: “Desde o surto de Ebola na África Ocidental em 2014, minha equipe de pesquisa vem trabalhando em novas abordagens para o desenvolvimento de vacinas para proteger a população do mundo contra um surto de doença infecciosa ou uma pandemia. Agora estamos trabalhando com uma equipe muito maior para concretizar esses planos.” </p>
                <p>Ao mesmo tempo em que realiza o primeiro ensaio clínico, a produção da vacina está sendo ampliada para testes maiores e, potencialmente, para implantação futura. Ao iniciar a expansão da fabricação da vacina imediatamente, a equipe pode garantir que doses suficientes de vacina estejam disponíveis o mais rápido possível - especialmente para trabalhadores do National Health Service -NHS (sistema público de saúde da Inglaterra), idosos e pessoas com condições de saúde subjacentes - se os ensaios comprovarem que a vacina é segura e eficaz. </p>
                <p>Sandy Douglas, que lidera o projeto de ampliação da fabricação de vacinas, disse: “A escala dessa epidemia representa um enorme desafio para a fabricação de vacinas. Precisamos seguir padrões rigorosos de segurança e isso leva tempo. Ao iniciar o trabalho de fabricação em larga escala imediatamente, esperamos acelerar a disponibilidade de vacinas seguras e de alta qualidade.” </p>
                <p>A professora Teresa Lambe, líder dos estágios iniciais do desenvolvimento de vacinas, disse: “O compromisso, a compaixão e o benefício percebido durante todo o esforço de todos com quem trabalhamos foram incríveis. Agradecemos profundamente o apoio de todos os nossos colaboradores, financiadores e equipes ao nosso redor para chegar a esse estágio com a velocidade que temos.” </p>
                <p>Fonte: <a href="http://www.ox.ac.uk/news/2020-03-27-oxford-covid-19-vaccine-programme-opens-clinical-trial-recruitment?utm_source=covidzero.com.br" target="_blank">Universidade de Oxford</a></p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News1;
