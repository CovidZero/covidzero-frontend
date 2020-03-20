import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGithubAvatar } from "./actions";

const TestReducer = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const { avatar } = useSelector(state => state.testReducer);

  function handleSearch() {
    dispatch(getGithubAvatar(username));
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={() => handleSearch()}>Search</button>
      <img src={avatar} />
    </div>
  );
};

export default TestReducer;
