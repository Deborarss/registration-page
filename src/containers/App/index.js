import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import "antd/dist/antd.css";
import GlobalStyle from "../../global-styles";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
};

export default App;
