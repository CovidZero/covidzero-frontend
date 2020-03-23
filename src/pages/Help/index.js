import React from "react";
import { useTranslation } from "react-i18next";

import { Header } from "~/components";

export default function Help() {
  const [t] = useTranslation();
  return <Header title={t("header.help")} />;
}
