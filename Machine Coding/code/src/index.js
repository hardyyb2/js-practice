import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToastProvider from "./Problems/Toast/Toast";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
