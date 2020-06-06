import React from "react";
import { Route, Switch } from "react-router-dom";
import Brazil from "./pages/Brazil";
import Cities from "./pages/Cities";
import Area from "./pages/Area";
import Help from "./pages/Help";
import News from "./pages/News";
import UiKit from "./pages/UiKit";
import News1 from "./pages/News/News1";
import News2 from "./pages/News/News2";
import News3 from "./pages/News/News3";
import News4 from "./pages/News/News4";
import News5 from "./pages/News/News5";
import News6 from "./pages/News/News6";
import News7 from "./pages/News/News7";
import News8 from "./pages/News/News8";
import News9 from "./pages/News/News9";
import News10 from "./pages/News/News10";
import News11 from "./pages/News/News11";
import News12 from "./pages/News/News12";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Brazil} />
      <Route path="/cities" exact component={Cities} />
      <Route path="/area" exact component={Area} />
      {/* <Route path="/help" exact component={Help} /> */}
      <Route path="/news" exact component={News} />

      <Route path="/uikit" exact component={UiKit} />{" "}

      {/* News section /> */}
      <Route path="/news/Universidade_de_Oxford_recruta_para_testes_de_vacina_criada_para_erradicar_o_COVID-19" exact component={News1} />
      <Route path="/news/Diretor-Geral_da_OMS_apela_ao_G20_para_combater_unir_e_inflamar_o_COVID-19" exact component={News2} />
      <Route path="/news/por_tras_do_relatorio_que_pos_os_EUA_e_o_Reino_Unido_em_acao_contra_o_virus_COVID-19" exact component={News3} />
      <Route path="/news/projeto_de_ventilador_recebe_sinal_verde_do_governo_do_Reino_Unido_para_avançar_a_proxima_etapa_dos_testes" exact component={News4} />
      <Route path="/news/medidas_basicas_de_protecao_contra_o_novo_coronavirus" exact component={News5} />
      <Route path="/news/Revelando_a_origem_e_transmissao_do_COVID-19" exact component={News6} />
      <Route path="/news/o-mercado-brasileiro-e-as-mudanças-no-consumo" exact component={News7} />
      <Route path="/news/as-mudancas-nas-relacoes-de-consumo-durante-a-pandemia" exact component={News8} />
      <Route path="/news/qual-o-impacto-da-crise-do-coronavirus-na-midia" exact component={News9} />
      <Route path="/news/como-manter-a-eficacia-da-midia-durante-a-pandemia" exact component={News10} />
      <Route path="/news/seja-criativo-para-anunciar-durante-o-isolamento-social" exact component={News11} />
      <Route path="/news/o_inicio_da_pandemia_e_o_isolamento_social_no_brasil" exact component={News12} />

      <Route path="/" component={() => <h1>Desculpe, um erro ocorreu. Estaremos verificando o que aconteceu.</h1>} />
    </Switch>
  );
}
