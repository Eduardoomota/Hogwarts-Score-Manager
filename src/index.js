import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./global";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
