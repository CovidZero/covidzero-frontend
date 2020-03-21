import React from "react";
import { useTranslation } from "react-i18next";

export default function Area() {
  const [t] = useTranslation();
  return <h1 style={{ textAlign: "center" }}>{t("menu.area")}</h1>;
}
