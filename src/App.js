import React from "react";
import { useTranslation } from "react-i18next";

import "@material/react-layout-grid/index.scss";

import Layout from "~/layout";
import Routes from "./Router";

import ReactGA from 'react-ga';

function App() {
  const [t, i18n] = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

   

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

function initializeReactGA() {
  ReactGA.initialize('UA-161000549-1');
  ReactGA.pageview('/');
}

export default App;


