import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { getGithubInfo } from "./actions";

const TestReducer = () => {
  const [username, setUsername] = useState("");

  const [t] = useTranslation();
  const dispatch = useDispatch();

  const { data } = useSelector(state => state.testReducer);

  function handleSearch() {
    dispatch(getGithubInfo(username));
  }

  return (
    <div>
      <hr />
      <h3>{t("searchGithub")}</h3>
      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={() => handleSearch()}>Search</button>
      {data.id && (
        <ul>
          <li>
            <img src={data.avatar_url} height={200} />
          </li>
          <li>{data.location}</li>
        </ul>
      )}
    </div>
  );
};

export default TestReducer;
