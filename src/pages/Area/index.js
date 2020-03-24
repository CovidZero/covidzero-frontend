import React from "react";
import { useTranslation } from "react-i18next";

import usePosition from "~/services/usePosition";
import { Header } from "~/components";
import { MapArea } from "~/components";

export default function Area() {
  const [t] = useTranslation();
  const { latitude, longitude, error } = usePosition();

  return (
    <>
      <Header title={t("header.area")} />
      <MapArea lat={latitude} lng={longitude} />
    </>
  );
}
