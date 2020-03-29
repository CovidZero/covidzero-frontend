import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header, CardNews } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";

import * as Styled from "./styles.js";

export default function News() {
  const [t] = useTranslation();

  return (
    <>
      <Header title={t("header.news")} rightIcon={ShareIcon} />

      <Grid>
        <Row>
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
            <Styled.DivTitle>
              <Styled.PageTitle>Últimas notícias </Styled.PageTitle>
              <hr />
            </Styled.DivTitle>
          </Cell>
        </Row>

        <Row>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
            onClick={() => history.push("/news/Universidade_de_Oxford_recruta_para_testes_de_vacina_criada_para_erradicar_o_COVID-19")}
          >
            <CardNews
              title="Universidade de Oxford recruta para testes de vacina criada para erradicar o COVID-19"
              content={<p>Pesquisadores da Universidade de Oxford que trabalham em um esforço sem precedentes no desenvolvimento de vacinas para impedir o COVID-19 começaram a rastrear voluntários saudáveis (entre 18 e 55 anos) hoje para o próximo teste de vacina ChAdOx1 nCoV-19 na região do Vale do Tamisa.</p>}
              date={new Date()}
              tag={<div>#vacina</div>}
            />
          </Cell>
          <Cell
          desktopColumns={3}
          phoneColumns={4}
          tabletColumns={4}
          onClick={() => history.push("/news/Diretor-Geral_da_OMS_apela_ao_G20_para_combater_unir_e_inflamar_o_COVID-19")}>
            <CardNews
              title="Diretor-Geral da OMS apela ao G20 para combater, unir e inflamar o COVID-19"
              content={<p>O Dr. Tedros Adhanom Ghebreyesus, Diretor-Geral da Organização Mundial da Saúde, reuniu com Chefes de Estado na extraordinária Cúpula de Líderes do G20 de hoje, focada no COVID-19. Durante o encontro, Tedros disse: “Vocês se uniram para enfrentar a crise de saúde que define o nosso tempo: estamos em guerra com um vírus que ameaça nos separar; se deixarmos”. Também elogiou a iniciativa do G20 de encontrar soluções conjuntas e trabalhar em conjunto: “Esta é uma crise global que requer uma resposta global”.</p>}
              date={new Date()}
              tag={<div>#união</div>}
            />
          </Cell> 
          <Cell
          desktopColumns={3}
          phoneColumns={4}
          tabletColumns={4}
          onClick={() => history.push("/news/Por_trás_do_relatório_que_pôs_os_EUA_e_o_Reino_Unido_em_ação_contra_o_vírus_COVID-19")}>
            <CardNews
              title="Por trás do relatório de vírus que pôs os EUA e o Reino Unido em ação"
              content={<p>Quando Boris Johnson estava em campanha para que a Grã-Bretanha deixasse a União Europeia em 2016 - um caminho que muitos especialistas alertaram que terminaria em desastre para o país - um de seus aliados próximos, Michael Gove, declarou que “as pessoas neste país tiveram número suficiente de especialistas."</p>}
              date={new Date()}
              tag={<div>#pesquisa</div>}
            />
          </Cell>
        </Row>
      </Grid>
    </>
  );
}
