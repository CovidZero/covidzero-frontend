import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header, CardNews } from "~/components";
import Notification from "~/assets/icons/bell.svg";

import * as Styled from "./styles.js";

export default function News() {
  const [t] = useTranslation();

  return (
    <>
      <Header title={t("header.news")} rightIcon={Notification} />

      <Grid>
      {/*  <Row>
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
            <Styled.DivTitle>
              <Styled.PageTitle>Conteúdos relevantes</Styled.PageTitle>
              <hr />
            </Styled.DivTitle>
          </Cell>
        </Row> */}

        <Row>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/o_impacto_da_COVID-19_nas_relacoes_de_trabalho">
            <CardNews
              title="O impacto da COVID-19 nas relações de trabalho"
              content={<p>Muito tem se falado sobre o “novo normal” durante a pandemia da Covid-19 e se ele permanecerá nas nossas vidas, pelo menos em parte. Ainda não se sabe se ele é promissor ou não, apenas que o mundo precisou se adaptar para vencer essa doença, que começou na China e já tomou conta do mundo inteiro.</p>}
              date={new Date(2020, 5, 6, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/o_inicio_da_pandemia_e_o_isolamento_social_no_brasil">
            <CardNews
              title="O início da pandemia e o isolamento social no Brasil"
              content={<p>O mundo está vivendo um momento raro na história das epidemias globais. Seja em relação ao número de mortos em contraste com uma época em que a tecnologia evoluiu a ponto de termos a inteligência artificial atuando no lugar de pessoas. Mesmo com tanta informação, grande parte da população não acredita no poder de contágio da Covid-19.</p>}
              date={new Date(2020, 5, 6, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/seja-criativo-para-anunciar-durante-o-isolamento-social">
            <CardNews
              title="Seja criativo para anunciar durante o isolamento social"
              content={<p>Desde que o Brasil foi tomado pela crise do novo coronavírus, a criatividade tem sido uma importante aliada para driblar o momento complicado e inovar no mercado. Empresários de todos os ramos têm encontrado novas formas de fazer negócios e divulgá-los para continuar mantendo seu consumidor fiel. Com a mudança de comportamento causada pelo isolamento social, foi preciso redescobrir esse público, entender o que é importante nesse período e entregar ainda mais valor.</p>}
              date={new Date(2020, 5, 6, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/como-manter-a-eficacia-da-midia-durante-a-pandemia">
            <CardNews
              title="Como manter a eficácia da mídia durante a pandemia"
              content={<p>O mundo já viveu, ao longo dos séculos, outras pandemias e, de maneiras diferentes, conseguiu se adaptar e superar todas elas. Um exemplo de uma pandemia ocorrida no século XIV foi a peste bubônica, também conhecida como peste negra. Ela matou entre 75 e 200 milhões de pessoas por toda Europa, reduzindo sua população a um terço.</p>}
              date={new Date(2020, 5, 6, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/qual-o-impacto-da-crise-do-coronavirus-na-midia">
            <CardNews
              title="Qual o impacto da crise do coronavírus na mídia?"
              content={<p>Estamos diante de um cenário distópico, uma sociedade caracterizada por uma nova normalidade em nível mundial. O motivo é conhecido por todos e, segundo a OMS, a única maneira de lidar com a pandemia no momento é manter todos em casa. Mas essa medida traz uma série de consequências que, independentemente de serem boas ou más, temos que estar preparados para uma ágil adaptação.</p>}
              date={new Date(2020, 5, 6, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/as-mudancas-nas-relacoes-de-consumo-durante-a-pandemia">
            <CardNews
              title="As mudanças nas relações de consumo durante a pandemia"
              content={<p>A pandemia é uma realidade e já estamos vivendo nela há algum tempo. Sabemos que muita coisa mudou e estamos todos tentando nos adaptar. Por sorte, o homem é um ser adaptável.</p>}
              date={new Date(2020, 5, 6, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/o-mercado-brasileiro-e-as-mudanças-no-consumo">
            <CardNews
              title="O mercado brasileiro e as mudanças no consumo"
              content={<p>Entender como funciona o consumo neste período é importante, pois ajudará a programar os próximos passos. O mundo já passou por outras crises e as enfrentou utilizando as ferramentas disponíveis na época. Hoje, vivemos uma era digital, onde produtos e serviços já vinham sendo adaptados a essa nova realidade</p>}
              date={new Date(2020, 4, 16, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/Revelando_a_origem_e_transmissao_do_COVID-19">
            <CardNews
              title="Revelando a origem e transmissão do COVID-19"
              content={<p>O novo coronavírus infectou milhares de pessoas na China desde dezembro de 2019, aumentando uma preocupação global de saúde pública. Estudos recentes (Huang et al., Chan et al. e Zhou et al.) forneceram informações oportunas sobre sua origem e capacidade de se espalhar entre os seres humanos, informando a prevenção de infecções e práticas de controle.</p>}
              date={new Date(2020, 2, 24, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/medidas_basicas_de_protecao_contra_o_novo_coronavirus">
            <CardNews
              title="Medidas básicas de proteção contra o novo coronavírus"
              content={<p>Fique atento às últimas informações sobre o surto de COVID-19, disponíveis no site da OMS e através de sua autoridade nacional e local de saúde pública. A maioria das pessoas infectadas experimenta sintomas leves e se recupera, mas pode ser mais grave para outras pessoas. Cuide de sua saúde e proteja os outros fazendo o seguinte: </p>}
              date={new Date(2020, 2, 18, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/projeto_de_ventilador_recebe_sinal_verde_do_governo_do_Reino_Unido_para_avançar_a_proxima_etapa_dos_testes">
            <CardNews
              title="Projeto de ventilador recebe sinal verde do governo do Reino Unido para avançar à próxima etapa dos testes"
              content={<p>Uma equipe multidisciplinar de engenheiros e médicos da Universidade de Oxford e do King's College London, OxVent, foi selecionada pelo governo do Reino Unido para passar à próxima etapa de testes de segurança e usabilidade do protótipo de ventilador.</p>}
              date={new Date(2020, 2, 31, 12)}
              tag={<div>#vacina</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/Universidade_de_Oxford_recruta_para_testes_de_vacina_criada_para_erradicar_o_COVID-19">
            <CardNews
              title="Universidade de Oxford recruta para testes de vacina criada para erradicar o COVID-19"
              content={<p>Pesquisadores da Universidade de Oxford que trabalham em um esforço sem precedentes no desenvolvimento de vacinas para impedir o COVID-19 começaram a rastrear voluntários saudáveis (entre 18 e 55 anos) hoje para o próximo teste de vacina ChAdOx1 nCoV-19 na região do Vale do Tamisa.</p>}
              date={new Date(2020, 2, 27, 12)}
              tag={<div>#vacina</div>}
            />
            </a>
          </Cell>
          <Cell
          desktopColumns={3}
          phoneColumns={4}
          tabletColumns={4}
          >
           <a href="/news/Diretor-Geral_da_OMS_apela_ao_G20_para_combater_unir_e_inflamar_o_COVID-19">
            <CardNews
              title="Diretor-Geral da OMS apela ao G20 para combater, unir e inflamar o COVID-19"
              content={<p>O Dr. Tedros Adhanom Ghebreyesus, Diretor-Geral da Organização Mundial da Saúde, reuniu com Chefes de Estado na extraordinária Cúpula de Líderes do G20 de hoje, focada no COVID-19. Durante o encontro, Tedros disse: “Vocês se uniram para enfrentar a crise de saúde que define o nosso tempo: estamos em guerra com um vírus que ameaça nos separar; se deixarmos”. Também elogiou a iniciativa do G20 de encontrar soluções conjuntas e trabalhar em conjunto: “Esta é uma crise global que requer uma resposta global”.</p>}
              date={new Date(2020, 2, 26, 12)}
              tag={<div>#união</div>}
            />
            </a>
          </Cell>

          <Cell
          desktopColumns={3}
          phoneColumns={4}
          tabletColumns={4}
          >
           <a href="/news/por_tras_do_relatorio_que_pos_os_EUA_e_o_Reino_Unido_em_acao_contra_o_virus_COVID-19">
            <CardNews
              title="Por trás do relatório de vírus que pôs os EUA e o Reino Unido em ação"
              content={<p>Quando Boris Johnson estava em campanha para que a Grã-Bretanha deixasse a União Europeia em 2016 - um caminho que muitos especialistas alertaram que terminaria em desastre para o país - um de seus aliados próximos, Michael Gove, declarou que “as pessoas neste país tiveram número suficiente de especialistas."</p>}
              date={new Date(2020, 2, 17, 12)}
              tag={<div>#pesquisa</div>}
            />
            </a>
          </Cell>
        </Row>
      </Grid>
    </>
  );
}
