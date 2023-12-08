import "./polyfill";
import "./styles/common.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/recyclex">
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
