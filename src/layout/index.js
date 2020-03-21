import React from "react";
import Sidebar from "./Sidebar";

import "./scss/Layout.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Sidebar />

      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
