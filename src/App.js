import React from "react";
import TestReducer from "./pages/TestReducer";
import { useTranslation } from "react-i18next";
import logo from "~/assets/images/logo.png";

function App() {
  const [t, i18n] = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

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
      <TestReducer />
    </div>
  );
}

export default App;
