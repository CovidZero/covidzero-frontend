import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { getGithubInfo } from "./actions";
import { Input, Button } from "./styles";
import usePosition from '~/services/usePosition';


const TestReduxSaga = () => {
  const [username, setUsername] = useState("");
  const { latitude, longitude, error } = usePosition();

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
      <Input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Button onClick={() => handleSearch()}>Search</Button>
      {data.id && (
        <ul>
          <li>
            <img src={data.avatar_url} height={200} />
          </li>
          <li>{data.location}</li>
        </ul>
      )}
      <h3>Localização</h3>
      <div>
        {error
          ? (<p>error: {error}</p>)
          : (
            <>
              <p>latitude: {latitude}<br /></p>
              <p>longitude: {longitude}<br /></p>
            </>
          )
        }
      </div>
    </div>
  );
};

export default TestReduxSaga;
