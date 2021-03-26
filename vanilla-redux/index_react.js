import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  // index에 store 연결
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
