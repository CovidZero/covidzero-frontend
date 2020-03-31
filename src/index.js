import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import store from "./store";
import history from "./services/history";
import "./i18n";


import theme from "./styles/theme";
import GlobalFonts from "./styles/fonts";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <GlobalFonts />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
