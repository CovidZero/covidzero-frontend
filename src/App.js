import React from "react";
import { useTranslation } from "react-i18next";

import "@material/react-layout-grid/index.scss";

import Layout from "~/layout";
import Routes from "./Router";

function App() {
  const [t, i18n] = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

  handleChangeLang('pt');

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
