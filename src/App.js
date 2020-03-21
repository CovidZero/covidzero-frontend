import React from "react";
import TestReduxSaga from "./pages/TestReduxSaga";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import logo from "~/assets/images/logo.png";
import Routes from "./Router";

function App() {
  const [t, i18n] = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

  const routes = [
    { title: "menu.map", router: "map" },
    { title: "menu.cities", router: "cities" },
    { title: "menu.area", router: "" },
    { title: "menu.help", router: "help" },
    { title: "menu.news", router: "news" }
  ];

  return (
    <div>
      <img src={logo} alt="CovidZero" width={200} height={200} />
      <label>{t("title")}</label>
      <div>
        <button type="button" onClick={() => handleChangeLang("pt")}>
          PT-BR
        </button>
        <button type="button" onClick={() => handleChangeLang("en")}>
          EN
        </button>
      </div>
      <Menu routes={routes} />
      <Routes />
    </div>
  );
}

export default App;
