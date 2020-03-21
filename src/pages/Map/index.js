import React from "react";
import { useTranslation } from "react-i18next";

export default function Map() {
  const [t] = useTranslation();
  return <h1 style={{ textAlign: "center" }}>{t("menu.map")}</h1>;
}
