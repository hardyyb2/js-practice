import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToastProvider from "./Problems/Toast/Toast";
import Toast2Provider from "./Problems/Toast/Toast2";

ReactDOM.render(
  <React.StrictMode>
    <Toast2Provider>
      <App />
    </Toast2Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
