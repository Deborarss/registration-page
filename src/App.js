import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "sanitize.css/sanitize.css";
import history from "./utils/history";
import configureStore from "./configureStore";

// Import root app
import App from "./containers/App";

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const ConnectApp = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

export default ConnectApp;
