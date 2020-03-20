import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from 'styled-components'

import { getGithubInfo } from "./actions";

const Button = styled.button`
  background: "#f04d57";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f04d57;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "#f04d57";
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const TestReduxSaga = () => {
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
    </div>
  );
};

export default TestReduxSaga;
