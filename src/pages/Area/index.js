import React from "react";
import { useTranslation } from "react-i18next";

import usePosition from "~/services/usePosition";
import { Header } from "~/components";

export default function Area() {
  const [t] = useTranslation();
<<<<<<< Updated upstream
  const { latitude, longitude, error } = usePosition();
=======
  const { latitude, longitude } = usePosition();

  

  const initalCases = {
    cases: []
  }
  const [citiesCases, setTotalCases] = useState(initalCases)
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchData() {
      const citiesCases = await API.cases.getCityCases();
      setTotalCases(citiesCases)
    }
    fetchData();
  }, []);
>>>>>>> Stashed changes

  return (
    <>
      <Header title={t("header.area")} />
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
