import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News4 = props => {
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
        <Title>Projeto de ventilador recebe sinal verde do governo do Reino Unido para avançar à próxima etapa dos testes</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/projeto_de_ventilador_recebe_sinal_verde_do_governo_do_Reino_Unido_para_avancar_a_proxima_etapa_dos_testes.jpg")}
                />
                <div className="news-item-title">Projeto de ventilador recebe sinal verde do governo do Reino Unido para avançar à próxima etapa dos testes</div>
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
              <div className="news-info news-date">{`31/03/2020`}</div>
            </Cell>
          </Row>
        </Grid>
        <SocialShare></SocialShare>
        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
                <p>Uma equipe multidisciplinar de engenheiros e médicos da Universidade de Oxford e do King's College London, OxVent, foi selecionada pelo governo do Reino Unido para passar à próxima etapa de testes de segurança e usabilidade do protótipo de ventilador.</p>
                <p>Essa luz verde permite que a equipe teste seus protótipos de ventiladores, desenvolvidos em resposta à pandemia de coronavírus e à escassez aguda prevista deste equipamento. O próximo estágio seria a fabricação e a implantação através do NHS - Serviço Nacional de Saúde do Reino Unido. O design também pode ser usado em outras configurações de assistência médica. </p>
                <p>Liderada pelos professores de Oxford, Andrew Farmery, Mark Thompson, Tim Denison, Paul Goulart e Alfonso Castrejon-Pita junto com o aluno de DPhil, Rob Staruch, o professor Sebastien Ourselin e o Dr. Federico Formenti, do King's College London, a equipe definiu um design simples, seguro e escalável que atenderá às rigorosas especificações para uso com os pacientes. O projeto irá explorar componentes e equipamentos prontos para uso com elementos que podem ser produzidos por meio de técnicas de impressão 3D. </p>
                <p>O professor Mark Thompson diz: ‘Em menos de duas semanas, os estudantes, pesquisadores e acadêmicos que conduzem esse projeto criaram um protótipo, desenvolvido por uma equipe eficiente e eficaz, altamente estruturada e conquistaram o apoio do governo. A colaboração está em nosso DNA e tenho muito orgulho da equipe e do incrível apoio de nossas universidades.'</p>
                <p>O Dr. Federico Formenti, do King's College London, diz: 'Somos um grupo de engenheiros e anestesistas acadêmicos do King's College London e da Universidade de Oxford e temos a honra de ser selecionados pelo governo do Reino Unido em nosso esforço para ajudar a fortalecer o NHS nas próximas semanas. O objetivo da OxVent é maximizar o impacto no Reino Unido e ultrapassar suas fronteiras. Ficamos impressionados com ofertas generosas e mensagens de apoio de empresas e indivíduos em todo o Reino Unido e além. </p>
                <p>Mark Gladwell, presidente de operações globais da Smith & Nephew, disse: 'A Smith & Nephew tem orgulho de trabalhar com a equipe da OxVent e trazer nossa experiência em design e fabricação de dispositivos médicos para apoiar a entrega rápida desse inovador ventilador ao NHS'. </p>
                <p>Fonte: <a href="https://www.research.ox.ac.uk/Article/2020-03-31-ventilator-project-given-the-green-light-by-uk-government-to-proceed-to-next-stage-of-testing?utm_source=covidzero.com.br">Universidade de Oxford</a></p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News4;