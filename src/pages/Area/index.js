import React from "react";
import { useTranslation } from "react-i18next";
import usePosition from "~/services/usePosition";

export default function Area() {
  const [t] = useTranslation();
  const { latitude, longitude, error } = usePosition();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{t("menu.area")}</h1>
      <div>
        {error ? (
          <p>error: {error}</p>
        ) : (
          <>
            <p>
              latitude: {latitude}
              <br />
            </p>
            <p>
              longitude: {longitude}
              <br />
            </p>
          </>
        )}
      </div>
    </>
  );
}
