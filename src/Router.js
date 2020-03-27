import React from "react";
import { Route, Switch } from "react-router-dom";
import Brazil from "./pages/Brazil";
import Cities from "./pages/Cities";
import Area from "./pages/Area";
import Help from "./pages/Help";
import News from "./pages/News";
import NewsItem from "./pages/News/NewsItem";
import UiKit from "./pages/UiKit";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Brazil} />
      <Route path="/cities" exact component={Cities} />
      {/* <Route path="/area" exact component={Area} /> */}
      {/* <Route path="/help" exact component={Help} /> */}
      <Route path="/news" exact component={News} />
      <Route path="/news/item/:id" exact component={NewsItem} />
      {/* <Route path="/uikit" exact component={UiKit} />{" "} */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
