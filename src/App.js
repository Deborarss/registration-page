import React from "react";
import "antd/dist/antd.css";
import "sanitize.css/sanitize.css";
import GlobalStyle from "./global-styles";
import RegistrationSteps from "./components/RegistrationSteps";

const App = () => {
  return (
    <>
      <RegistrationSteps />
      <GlobalStyle />
    </>
  );
};

export default App;
