import React from "react";
import TestReducer from "./pages/TestReducer";
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
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
