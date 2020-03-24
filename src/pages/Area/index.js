import React from "react";
import { useTranslation } from "react-i18next";

import usePosition from "~/services/usePosition";
import { Header } from "~/components";
import { Map } from "~/components";

export default function Area() {
  const [t] = useTranslation();
  const { latitude, longitude, error } = usePosition();

  return (
    <>
      <Header title={t("header.area")} />
      <Map lat={latitude} lng={longitude} markers={[]} />
    </>
  );
}
