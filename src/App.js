import React from "react";
import logo from "./assets/images/logo.png";
import "./App.css";
import TestReduxSaga from "./pages/TestReduxSaga";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <label>Testing Redux store</label>
          <TestReduxSaga />
        </div>
      </header>
    </div>
  );
}

export default App;
