import React from "react";
import { useTranslation } from "react-i18next";

import { Header } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";

export default function News() {
  const [t] = useTranslation();
  return <Header title={t("header.news")} rightIcon={ShareIcon} />;
}
