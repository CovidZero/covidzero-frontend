import React from "react";
import { Route, Switch } from "react-router-dom";
import Brazil from "./pages/Brazil";
import Cities from "./pages/Cities";
import Area from "./pages/Area";
import Help from "./pages/Help";
import News from "./pages/News";
import News1 from "./pages/News/News1";
import News2 from "./pages/News/News2";
import News3 from "./pages/News/News3";
import UiKit from "./pages/UiKit";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Brazil} />
      <Route path="/cities" exact component={Cities} />
      <Route path="/area" exact component={Area} />
      <Route path="/help" exact component={Help} />
      <Route path="/news" exact component={News} />

      <Route path="/uikit" exact component={UiKit} />{" "}

      {/* News section /> */}
      <Route path="/news/Universidade_de_Oxford_recruta_para_testes_de_vacina_criada_para_erradicar_o_COVID-19" exact component={News1} />
      <Route path="/news/Diretor-Geral_da_OMS_apela_ao_G20_para_combater_unir_e_inflamar_o_COVID-19" exact component={News2} />
      <Route path="/news/Por_trás_do_relatório_que_pôs_os_EUA_e_o_Reino_Unido_em_ação_contra_o_vírus_COVID-19" exact component={News3} />
      <Route path="/" component={() => <h1>Desculpe, um erro ocorreu. Estaremos verificando o que aconteceu.</h1>} />
    </Switch>
  );
}
