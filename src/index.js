import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import history from "./services/history";
import "./i18n";
import { Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById("root")
);
