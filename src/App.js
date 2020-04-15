import React from "react";

import "@material/react-layout-grid/index.scss";

import Layout from "~/layout";
import Routes from "./Router";


function App() {

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
